<template>
	<x-drag-panel ref="dragPanel" :bindObj="panel">
		<!--要让tree有纵向滚动条就要包到bimTree的div中-->
        <el-tabs v-model="activeTab">
            <el-tab-pane v-for="(item,index) in spatialDatas" :key="index" :label="item.name" :name="item.name">
                <div id="bimTree" style="height:100%;">
                    <el-tree
                        :data="item.data"
                        :props="props"
                        @node-click="handleNodeClick"
                        :expand-on-click-node="false"
                    ></el-tree>
                </div>
            </el-tab-pane>
        </el-tabs>
	</x-drag-panel>
</template>

<script>
// import axios from "axios"; //@/ 指src目录   ./ 表示当前目录下   ../ 表示父级目录下
import { BimiViewer, ProductState } from "@/assets/js/bim/bim";
import viewerHelper from "@/utils/viewHelper";
import XDragPanel from "@/components/Controls/XDragPanel";
import bimAxios from "@/utils/requestBim";

export default {
	name: "",
	components: { XDragPanel },
	data() {
		return {
            panel:{
                visiable:false,
                title:"空间结构",
                icon:"el-icon-office-building",
                color:"box box-primary",
                width:"300px",
                //height:"300px", 
                height:(document.body.clientHeight -200)+"px", 
                top:"20px",
                right:"20px",
                zIndex:1
            },
            spatialDatas: [],
            activeTab:null,
			props: {
				children: "children",
				label: "name"
			}
		};
	},
	methods: {
		add(name,guid) {
			if (guid != null && guid !== "") {
                let spatialFile ="data/"+guid+".tree.json";
                bimAxios.get(spatialFile).then(data=>{
                    this.spatialDatas.push({name:name,data:data});
                    this.activeTab = name;
                })
                .catch(error => {
                   //bimi文件加载做了message，这里不用处理了
                });
			}
        },
        remove(name){
            this.spatialDatas.forEach((item,index,array) => {
                if(item.name === name)
                {
                    array.splice(index,1);
                    //设置tab活动
                    if(array.length > 0)
                    {
                        this.activeTab = array[0].name;
                    }
                    return false;
                }
            });
        },
		handleNodeClick(data) {
			let viewer = viewerHelper.getViewer();
			if (viewer) {
				viewer.highlightingColour = [255, 173, 33, 255];
				let ifcId = data.id;
				let success = viewer.zoomTo(ifcId);
				if (success) {
					viewer.setCameraTarget(ifcId);
					viewer.resetStates();
					viewer.setState(ProductState.HIGHLIGHTED, [ifcId]);
				}
			}
        },
        
        

	},

	mounted() {
		
    },
    beforeDestroy() {
        this.spatialDatas.length = 0;
	}
};
</script>

<style scoped>
</style>
