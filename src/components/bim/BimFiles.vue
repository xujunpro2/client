<template>
	<x-drag-panel :bindObj="panel">
		<!--要让tree有纵向滚动条就要包到bimTree的div中-->
		<div id="bimTree" style="height:100%;" class="bimFilesTree">
			<el-tree
				ref="dirTree"
				:lazy="true"
				:load="loadNode"
				:props="props"
				:expand-on-click-node="false"
                :show-checkbox="true"
                :check-strictly="true"
                :check-on-click-node="true"
                node-key="bindObj"
                :default-checked-keys="defaultBim"
				@node-click="handleNodeClick"
                @check-change="handleCheckChange"
			></el-tree>
		</div>
	</x-drag-panel>
</template>

<script>
import XDragPanel from "@/components/Controls/XDragPanel";
export default {
	name: "",
	components: { XDragPanel },
	data() {
		return {
			panel: {
				visiable: false,
                title: "三维模型",
                icon:"el-icon-folder-opened",
				color: "box box-primary",
				width: "300px",
				height: document.body.clientHeight - 300 + "px",
				top: "20px",
				left: "20px"
				//right:"10px",
				//bottom:"10px"
			},
			dirData: [],
			props: {
				label: "nodeLabel",
				isLeaf: "isLeaf"
            },
            defaultBim:[], //specail表中的个人默认bim,一开始在tree上要checked
            mockEvent:false
		};
    },

	methods: {
		//Tree的load绑定
		loadNode(node, resolve) {
			//root目录
			if (node.level === 0) {
				this.$store.dispatch("dir/rootIFCDirs").then(data => {
					return resolve(data);
				});
			} else {
				let dirId = node.data.nodeId; //获得node绑定的数据对象
				this.$store
					.dispatch("dir/childDirsAndIFCS", dirId)
					.then(data => {
						return resolve(data);
					});
			}
        },
        //向父组件发送事件
        handleNodeClick(data) {
            if(data.isLeaf && data.bindObj)
            {
                let guid = data.bindObj;
                //his.$emit('bimFileChange', {guid:guid});
            }
        },
        handleCheckChange(data,checked){
            if(data.isLeaf && data.bindObj)
            {
                //mockEvent是为了避免setChecked->handleCheckChange死循环而设置的标志量，恶心
                if(this.mockEvent)
                {
                    this.mockEvent = false;
                    return;
                }
                let oper = "关闭";
                if(checked)
                {
                    oper = "加载";
                }
                let message =  "确定要"+oper+data.nodeLabel+"吗?";
                //通过确定对话框让焦点落到canvas上，否则不会刷新
                this.$confirm(message, "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(()=>{
                    let guid = data.bindObj;
                    this.$emit('bimFileChange', {guid:guid,checked:checked});
                }).catch(() => {
                    this.mockEvent = true;
                    this.$refs.dirTree.setChecked(data,!checked,false);
                });
            }
        }
	},

	mounted() {
        if(this.$store.state.uv.specail.defaultBim)
        {
             let specailBims = this.$store.state.uv.specail.defaultBim.split(';');
            specailBims.forEach(guid => {
                this.defaultBim.push(guid);
            });
        }
       
    }
};
</script>

<style lang="scss">
// 让tree只有最后叶节点显示checkbox，注意要取消socp
.bimFilesTree{
    .el-tree-node{
        .is-leaf + .el-checkbox .el-checkbox__inner{
            display: inline-block
        }
        .el-checkbox__input>.el-checkbox__inner{
            display: none
        }
    }
}

</style>
