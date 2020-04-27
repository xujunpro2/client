<template>
	<div class="mainegg">
        <el-button @click="test">Test</el-button>
		<stage ref="stage" v-if="selectedPage" :page="selectedPage" :zoom="zoom"></stage>
		<zoom-menu @zoomChange="zoomHandler" :zoom="zoom" class="zoom-menu"></zoom-menu>
        <context-menu 
            :target="contextMenuTarget" 
            :show="contextMenuVisible" 
            @update:show="(show) => contextMenuVisible = show">
           
           
            <a href="#" @click="upCell"><i class="el-icon-top"></i>&nbsp;上移</a>
            <a href="#" @click="downCell"><i class="el-icon-bottom"></i>&nbsp;下移</a>
            <a href="#" @click="topCell"><i class="el-icon-upload2"></i>&nbsp;置顶</a>
            <a href="#" @click="bottomCell"><i class="el-icon-download"></i>&nbsp;置底</a>
            <div class="cmenu-divider"></div>
              <a href="#" @click="test"><i class="el-icon-setting"></i>&nbsp;属性设置</a>
        </context-menu>
	</div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import {
	_changeActivePage,
	_rebaseActivePage,
	_updateEditorZoom,
    getPageIndexById,
    updateEgglement,
    updatePage
} from "@/store/types";

import Stage from "./Stage";
import ZoomMenu from "@/components/editor/common/ZoomMenu";
import ContextMenu from "@/components/editor/context-menu/VueContextMenu"

export default {
	name: "mainegg",
    components: { Stage, ZoomMenu,ContextMenu},
    data () {
        return {
            contextMenuTarget: null,
            contextMenuVisible: false,
        }
    },
	created: function() {
		this.selectFallbackPage(this.selectedPage);
	},
	computed: {
         /**
         * 关注state.app.selectedPage ,并绑定给Stage.vue：触发以下操作:
         * 1.在Stage.vue中 实时生成pageStyle，并传递给MrContainer的style(css)
         * 2.在StageEl.vue中，动态调用render。DnD流程Stage.dropHandler() -> action:registerElement() -> mutations:->createEgglement() ->"page.children.push(element)"
         *   
         * */
		...mapState({
			selectedPage: state => state.app.selectedPage,
			pages: state => (state ? state.project.pages : []),
			zoom: state => state.app.editorZoom
		}),
        ...mapGetters([getPageIndexById])        
         
	},
	watch: {
		// After a redo/undo action this will apply
		selectedPage: function(val) {
			this.selectFallbackPage(val);
		}
	},
	methods: {
        
		selectFallbackPage(page) {
			if (!page && this.pages.length > 0) {
				this._changeActivePage(this.pages[0]);
			} else {
				this._rebaseActivePage(this.getPageIndexById(page.id));
			}
		},

		zoomHandler(zoomValue) {
			this._updateEditorZoom(zoomValue);
		},

		...mapMutations([
			_changeActivePage,
			_rebaseActivePage,
            _updateEditorZoom,
            updateEgglement,
            updatePage
        ]),
        //图元上移一位
        upCell(){
            let selectedElements = this.$store.state.app.selectedElements;
            if(selectedElements.length > 0)
            {
                let el = selectedElements[0];
                let newIndex = Number(el.zIndex) + 1;
                this.updateEgglement({egglement:el,zIndex:newIndex})
                //修改max_zIndex
                if(newIndex >= this.selectedPage.max_zIndex)
                {
                    this.updatePage({page:this.selectedPage,max_zIndex:this.selectedPage.max_zIndex+1})
                }
                this.contextMenuVisible = false;
            }
        },
        downCell(){
            let selectedElements = this.$store.state.app.selectedElements;
            if(selectedElements.length > 0)
            {
                let el = selectedElements[0];
                let newIndex = Number(el.zIndex) - 1;
                this.updateEgglement({egglement:el,zIndex:newIndex})
                //修改min_zIndex
                if(newIndex <= this.selectedPage.min_zIndex)
                {
                    this.updatePage({page:this.selectedPage,min_zIndex:this.selectedPage.min_zIndex-1})
                }
                this.contextMenuVisible = false;
            }
        },
        topCell(){
            let selectedElements = this.$store.state.app.selectedElements;
            if(selectedElements.length > 0)
            {
                let el = selectedElements[0];
                this.updateEgglement({egglement:el,zIndex:this.selectedPage.max_zIndex})
                //记得更新max
                this.updatePage({page:this.selectedPage,max_zIndex:this.selectedPage.max_zIndex+1})
            }
            this.contextMenuVisible = false;
        },
        bottomCell(){
            let selectedElements = this.$store.state.app.selectedElements;
            if(selectedElements.length > 0)
            {
                let el = selectedElements[0];
                this.updateEgglement({egglement:el,zIndex:this.selectedPage.min_zIndex})
                this.updatePage({page:this.selectedPage,min_zIndex:this.selectedPage.min_zIndex-1})
            }
            this.contextMenuVisible = false;
        },
        test(){
            //获得当前选中的图元
            let selectedElements = this.$store.state.app.selectedElements;
            if(selectedElements.length > 0)
            {
                let cellId = selectedElements[0].id;
                var cell = this.$refs.stage.findCell(cellId);
                if(cell)
                {
                   cell.doSetting();
                }
            }
            this.contextMenuVisible = false;
        }
    },
    mounted: function () {
        //设置右键菜单的target dom
        var pageId = this.selectedPage.id;
       // console.info(pageId);
        this.contextMenuTarget = document.getElementById(pageId);
    },
};
</script>

<style scoped>
.mainegg {
	margin: 0 57px; /*画布左右留白57px，但scale之后，右边留白消失了，目前还没有找到解决方法 */
	height: 100%;
}

.zoom-menu {
	bottom: 24px;
	left: 24px;
	padding: 0 6px;
	position: fixed; /*相对于浏览器的绝对定位 */
}

.cmenu-divider {
    background-color: #DCDFE6;
    position: relative;
    display: block;
    height: 1px;
    width: 100%;
}

</style>
