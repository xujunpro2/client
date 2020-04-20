<template>
    <x-drag-panel ref="dragPanel" :bindObj="panel">
        <el-table :data="moveProducts" border style="width: 100%">
            <el-table-column prop="PRODUCT" label="构件ID"></el-table-column>
            <el-table-column prop="PRODUCTNAME" label="构件名称"></el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="onDeleteMove(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <p></p>
        <el-row type="flex" justify="end">
            <div>
                <el-button type="primary" @click="addMove">添加</el-button>
            </div>
        </el-row>
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
                title:"移动构件",
                icon:"el-icon-setting",
                color:"box box-primary",
                width:"400px",
                //height:"300px", 
                height:(document.body.clientHeight -200)+"px", 
                top:"20px",
                right:"20px",
                zIndex:1
            },
            moveProducts:[]
		};
	},
	methods: {
    
        //点击绑定按钮
        addMove(){
            //提交主页面执行绑定操作
            this.$emit('submitAddMove');
        },
       
        refreshData(){
            //刷新表格
            request.get('data/getMoveProducts.action').then(json=>{
                this.moveProducts = json;
            });
        },
        onDeleteMove(row){
            this.$confirm("确定从移动构件名单中删除吗?", "提示", {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                var id = row.ID;
                request.get('data/deleteMoveProduct.action',{params:{id:id}}).then(json=>{
                    if(json.count == 1)
                    {
                        this.refreshData();
                        this.$notify({
                            title: '消息',
                            message: '删除成功',
                            type: 'success',
                            duration:3000
                        });
                    }
                });
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
</style>
