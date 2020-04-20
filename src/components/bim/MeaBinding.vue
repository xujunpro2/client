<template>
	<x-drag-panel ref="dragPanel" :bindObj="panel">
		<!--要让tree有纵向滚动条就要包到bimTree的div中-->
        <el-tabs v-model="activeTab" @tab-click="onTabClick">
            <el-tab-pane label="测点" name="mea">
                <div id="bimTree">
                    <el-tree v-if="authValidated"
                        ref="meaTree"
                        :lazy="true"
                        :load="loadNode"
                        :props="props"
                        :expand-on-click-node="false"
                        node-key="id"
                    ></el-tree>
                </div>
               <p></p>
                <el-row type="flex" justify="end">
                    <div>
                        <el-button type="primary" @click="bindMea">绑定</el-button>
                    </div>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="绑定列表" name="binded">
                <el-table :data="meaBindData" border style="width: 100%">
                    <el-table-column prop="MEANAME" label="测点"></el-table-column>
                    <el-table-column prop="PRODUCTNAME" label="构件"></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="onDeleteBind(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
	</x-drag-panel>
</template>

<script>
// import axios from "axios"; //@/ 指src目录   ./ 表示当前目录下   ../ 表示父级目录下
import XDragPanel from "@/components/Controls/XDragPanel";
import axios from 'axios'
import Qs from 'qs';
import request from '@/utils/request'

export default {
	name: "",
	components: { XDragPanel },
	data() {
		return {
            panel:{
                visiable:false,
                title:"测点绑定",
                icon:"el-icon-setting",
                color:"box box-primary",
                width:"400px",
                //height:"300px", 
                height:(document.body.clientHeight -200)+"px", 
                top:"20px",
                right:"20px",
                zIndex:1
            },
            activeTab:"mea",
            
            authValidated:false,//是否登陆成功，为true，才加载tree
			props: {
				label: "name",
				isLeaf: "ispoint"
            },
            meaBindData:[]
		};
	},
	methods: {
        loadNode(node, resolve) {
            //root目录
            //var root =  process.env.VUE_APP_NARI_API_ROOT;
            var root = this.$store.state.api;
            //第一层root节点
            if (node.level === 0) 
            {
                axios.get(root+'/mplat/imc/sysmodel/getImcModelRoot.action',{params: {raceName: 'SLModel' }}).then(res=>{
                    var data = res.data.data;//data是数组，正好符合tree的数据要求
                    console.info(data);
                   
                    return resolve(data);
                })
		
            } 
            //后续子节点
            else 
            {
                let data = node.data;
                //别问为什么
                var param = {
                    raceName: 'SLModel',
                    appType:'',
                    curNodeString:JSON.stringify(data)
                };
                 axios({
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    method: 'post',
                    url: root+'/mplat/imc/sysmodel/getImcChildModelByPid.action',
                    data: Qs.stringify(param)
                }).then(res=>{
                    //console.info(res.data.data);
                    return resolve(res.data.data)
                })
                
				// let dirId = node.data.nodeId; //获得node绑定的数据对象
				// this.$store
				// 	.dispatch("dir/childDirsAndIFCS", dirId)
				// 	.then(data => {
				// 		return resolve(data);
				// 	});
			}
        },
        //点击绑定按钮
        bindMea(){
            var node = this.$refs.meaTree.getCurrentNode();//node就是节点绑定的数据
            //判断是否是测点节点
            if(node.ispoint)
            {
                //提交主页面执行绑定操作
                this.$emit('submitBindMea',node);
            }
            else
            {
                this.$alert("您选中的不是测点节点，请选中测点节点进行绑定操作!", "错误", {
					type: "error"
				});
            }
        },
        onTabClick(tab){
            if(tab.name == 'binded')
            {
                this.refreshData();
            }
        },
        refreshData(){
            //刷新表格
            request.get('data/getBinds.action').then(json=>{
                this.meaBindData = json;
            });
        },
        onDeleteBind(row){
            this.$confirm("确定删除绑定关系吗?", "提示", {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                var id = row.ID;
                request.get('data/deleteBind.action',{params:{id:id}}).then(json=>{
                    if(json.count == 1)
                    {
                        this.refreshData();
                        this.$notify({
                            title: '消息',
                            message: '绑定关系删除成功',
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
