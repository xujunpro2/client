<template>
	<x-drag-panel :bindObj="panel">
		<table>
			<tr>
				<th width="40%">名称</th>
				<th width="60%">值</th>
			</tr>
            <!--属性-->
            <template v-if="curProperty!=null">
                <!--vue遍历Object属性-->
                <tr v-for="(value, key) in curProperty.gens">
                    <td>{{key}}</td>
                    <td>{{value}}</td>
                </tr>
                <template v-for="(pv, pk) in curProperty.properties">
                    <tr>
                        <td colspan="2" class="group">{{pk}}</td>
                    </tr>
                    <tr v-for="(piv, pik) in pv">
                        <td>{{pik}}</td><td>{{piv}}</td>
                    </tr>
                </template>
            </template>
            <!--材质-->
            <template v-if="curMaterials!=null">
                <tr>
                    <td colspan="2" class="group">材质</td>
                </tr>
                <!--双重循环-->
                <template v-for="(value, key) in curMaterials.materials">
                     <tr v-for="(item,index) in value">
                        <td colspan="2">{{item}}</td>
                    </tr>
                </template>
            </template>
		</table>
	</x-drag-panel>
</template>
<script>
import XDragPanel from "@/components/Controls/XDragPanel";
import bimAxios from "@/utils/requestBim";
export default {
	name: "BimProperties",
	components: { XDragPanel },
	data() {
		return {
			panel: {
				visiable: false,
                title: "构件属性",
                icon:"el-icon-picture-outline",
				color: "box box-primary",
				width: "360px",
				height: document.body.clientHeight - 250 + "px",
				top: "40px",
                right: "40px",
                zIndex:1
            },
            dataMap:new Map(),//数据容器，key是guid，value是一个Map数组，0是属性Map，1是材质Map
            curProperty:null,//当前属性
            curMaterials:null //当前材质
		};
    },
    methods:{
        add(guid) {
            let datas = new Array();
            this.dataMap.set(guid,datas);
            //属性
            let propertiesFile ="data/"+guid+".property.json";
            bimAxios.get(propertiesFile).then(data=>{
                let propertiesMap = new Map();
                data.forEach(item => {
                    let key = item.entityId;
                    let value = item;
                    propertiesMap.set(key,value);
                });
                datas[0] = propertiesMap;
            })
            .catch(error => {
            });
            //材质
            let materialsFile ="data/"+ guid+".material.json";
            bimAxios.get(materialsFile).then(data=>{
                let materialsMap = new Map();
                data.forEach(item => {
                    let key = item.entityId;
                    let value = item;
                    materialsMap.set(key,value);
                });
                datas[1] = materialsMap;
            })
            .catch(error => {
            });
        },
        remove(guid){
            this.dataMap.delete(guid);
        },
        setCurProperty(guid,prodId){
            let datas = this.dataMap.get(guid);
            //命中
            if(datas)
            {
                this.curProperty = datas[0].get(prodId);
                this.curMaterials = datas[1].get(prodId);
            }
            //没找到就清空table
            else
            {
                this.curProperty = null;
                this.curMaterials = null;
            }
        }
    },
    mounted() {
    },
    beforeDestroy() {
        this.dataMap.clear();
	}
};
</script>
<style scoped>
table {
	width: 100%;
    color:#606266;
	font-size: 12px;
	border-collapse: collapse;
	border-spacing: 0;
	border-left: 1px solid #888;
	border-top: 1px solid #888;
}

table th,
table td {
	border-right: 1px solid #888;
	border-bottom: 1px solid #888;
	padding: 2px;
}

table th {
	font-weight: bold;
	/* background: #ccc; */
}
table .group{
    font-weight: bold;
	background: #e1e1e1;
}
</style>