<template>
    <x-drag-panel ref="dragPanel" :bindObj="panel">
        <el-checkbox v-model="openCaculate" @change="chkChange">开启构件面积、体积计算</el-checkbox>
        <p></p>
        <a class="note">注意：开启构件面积、体积计算，需要保持整个场景的三角网顶点数据，这将会占用大量的内存。</a>
    </x-drag-panel>
</template>

<script>
// import axios from "axios"; //@/ 指src目录   ./ 表示当前目录下   ../ 表示父级目录下
import XDragPanel from "@/components/Controls/XDragPanel";
import request from '@/utils/request'

export default {
	name: "",
	components: { XDragPanel },
	data() {
		return {
            panel:{
                visiable:false,
                title:"构件体量计算",
                icon:"el-icon-open",
                color:"box box-primary",
                width:"300px",
                height:"200px", 
                top:"20px",
                right:"20px",
                zIndex:1
            },
            openCaculate:false
		};
	},
	methods: {
        refreshData(){
           request.get('data/getBimConfig.action',{params:{key:'area'}}).then(json=>{
              if(json.value === 'true')
              {
                 this.openCaculate = true;
              }
              else
              {
                  this.openCaculate = false;
              }
           })
        },
        chkChange(data){
            //data就是true/false
            console.info(data);
            var value = ""+data;//后台保存的是varchar
            request.get('data/updateBimConfig.action',{params:{key:'area',value:value}}).then(json=>{
                if(json.count === 1)
                {
                    this.$notify({
                        title: '消息',
                        message: '修改成功',
                        type: 'success',
                        duration:3000
                    });
                }
            })
        }
       
	},

	mounted() {
		
    },
    beforeDestroy() {
       
	}
};
</script>

<style scoped>
.note{
    font-size: 12px;
}
</style>
