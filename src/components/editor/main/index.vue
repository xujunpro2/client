<template>
	<div class="mainegg">
        <el-button @click="test">Test</el-button>
		<stage ref="stage" v-if="selectedPage" :page="selectedPage" :zoom="zoom"></stage>
		<zoom-menu @zoomChange="zoomHandler" :zoom="zoom" class="zoom-menu"></zoom-menu>
	</div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import {
	_changeActivePage,
	_rebaseActivePage,
	_updateEditorZoom,
	getPageIndexById
} from "@/store/types";

import Stage from "./Stage";
import ZoomMenu from "@/components/editor/common/ZoomMenu";

export default {
	name: "mainegg",
	components: { Stage, ZoomMenu },
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
			_updateEditorZoom
        ]),
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
           
        }
	}
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
</style>
