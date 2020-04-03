<template>
	<div class="bimDiv">
		<canvas id="bim"></canvas>
		<div class="toolbarDiv">
			<el-tooltip class="item" effect="dark" content="空间结构" placement="top-start">
				<el-button
					size="medium"
					type="primary"
					icon="el-icon-office-building"
					circle
					@click="showSpatialPanel"
				></el-button>
			</el-tooltip>
			<el-tooltip class="item" effect="dark" content="构件属性" placement="top-start">
				<el-button
					size="medium"
					type="primary"
					icon="el-icon-picture-outline"
					circle
					@click="showPropertiesPanel"
				></el-button>
			</el-tooltip>
			<el-tooltip class="item" effect="dark" content="扩展属性" placement="top-start">
				<el-button
					size="medium"
					type="primary"
					icon="el-icon-picture-outline-round"
					circle
					@click="showExtPropertiesPanel"
				></el-button>
			</el-tooltip>
		</div>
        
        <div class="testDiv">
            <el-button size="mini" round @click="test()">获得测试数据</el-button>
            <el-button size="mini" round @click="openSPDialog()">打开选点</el-button>
        </div>
      
		<!--空间结构-->
		<bim-spatial ref="spatialPanel"></bim-spatial>
		<!--构件属性-->
		<bim-properties ref="propertiesPanel"></bim-properties>
		<!--构件扩展属性-->
		<bim-ext-properties ref="extPropertiesPanel"></bim-ext-properties>
		<div v-if="loading.waitCount !== 0" class="loading_bg"></div>
		<div v-if="loading.waitCount !== 0" class="loading">
			<el-steps :active="loading.progressStep" finish-status="success">
				<el-step title="下载轻量化文件"></el-step>
				<el-step title="渲染三维模型"></el-step>
			</el-steps>
			<div v-for="item of loading.progressDatas">
				<span style="font-size:13px">{{item.name}}</span>
				<el-progress :percentage="item.progress" color="#409eff'"></el-progress>
			</div>
			<p></p>
			<div v-if="loading.progressStep === 1">
				<i class="el-icon-loading"></i>
				<span style="font-size:14px">正在渲染三维模型,请稍后...</span>
			</div>
		</div>
	</div>
</template>

<script>
import { BimiViewer, ProductState } from "@/assets/js/bim/bim";
import FlashPlugin from "@/assets/js/bim/plugins/FlashPlugin";
import TipPlugin from "@/assets/js/bim/plugins/TipPlugin";
import PointPlugin from "@/assets/js/bim/plugins/PointPlugin";
import RoamingPlugin from "@/assets/js/bim/plugins/RoamingPlugin";
import LabelPlugin from "@/assets/js/bim/plugins/LabelPlugin";
import NavCube from "@/assets/js/bim/plugins/NavCubePlugin";
import PathPlugin from "@/assets/js/bim/plugins/PathPlugin";
import RectSelectionPlugin from "@/assets/js/bim/plugins/RectSelectionPlugin"

import { Loading } from "element-ui";
import viewerHelper from "@/utils/viewHelper";
import BimSpatial from "@/components/bim/BimSpatial";
import BimProperties from "@/components/bim/BimProperties";
import BimExtProperties from "@/components/bim/BimExtProperties";
import MessageUtil from "@/utils/MessageUtil";


export default {
	name: "Bim",
	components: { BimSpatial, BimProperties, BimExtProperties },
	data() {
		return {
			defaultBim: '冷站', //specail表中的个人默认bim
			modelId: -1,
			loadedBims: new Map(), //已加载的bim，key是guid，value是model id
			ifcNameCache: new Map(), //bim名称缓存,key是guid,value是ifc名称
			//加载进度相关的数据和标志位
			loading: {
				downloadingCount: 0, //标志位：正在下载的数量，到0的时候，progressStep前进一步
				progressStep: 0, //标志位：loading步骤
				progressDatas: [], //下载bimi文件的进度条数据
				waitCount: 0 //标志位：loading需要等待处理的bim数量，每个bim完全载入后-1，当到0的时候，销毁loading
            },
            actionAFlag:true,//模拟演示的两个，以后要删除了
            actionBFlag:true
		};
	},
	methods: {
		initView() {
            let viewer = new BimiViewer("bim", true);
            viewerHelper.setViewer(viewer);
            //演示面积体积计算
			viewer.enableCalculateAreaOrVolume(true);
			//直接先启动帧刷新，这样才能默认加载多个bim
			viewer.start();
			
			viewer.on("error", error => {
				if (error.message === "bim file not found") {
					this.$message.error(
						"无法访问模型，请检查data目录!"
					);
				} else {
					console.error(error.message);
				}
			});
			viewer.on("onprogress", data => {
				let guid = data.tag;
				let name = guid;
                let progress = Math.floor((data.loaded / data.total) * 100);
				this.loading.progressDatas.forEach(item => {
					if (item.guid === data.tag) {
						item.progress = Math.floor(
							(data.loaded / data.total) * 100
						);
					}
				});
			});
			viewer.on("ondownloaded", data => {
				//每次bimi文件下载完毕后，判断一下是否全部的bimi文件都下载结束了，如果都结束了，那么就进入到step2
				this.loading.downloadingCount--;
				if (this.loading.downloadingCount == 0) {
					this.loading.progressStep = 1;
				}
			});
			viewer.on("loaded", model => {
				this.loading.waitCount--;
				if (this.loading.waitCount == 0) {
                    viewer.manualRefresh();
                    this.addPlugins();
				}

				this.modelId = model.id;
				let guid = model.tag;
				//加入map缓存
				this.loadedBims.set(guid, model.id);
				//加载空间结构文件
				let ifcName = guid;
				this.$refs.spatialPanel.add(ifcName, guid);
				//加载构件属性文件
                this.$refs.propertiesPanel.add(guid);
			});

			viewer.on("dblclick", args => {
                var id = args.id;
				if (id) {
					viewer.resetStates();
					viewer.zoomTo(id);
					viewer.setCameraTarget(id);
					viewer.setState(ProductState.HIGHLIGHTED, [id]);
				}
			});

			viewer.on("pick", args => {
                var id = args.id;
                console.info(id);
				if (id) {
					//获得构件所属于的bim
					var guid = viewer.getProductTag(id);
					viewer.resetStates();
					viewer.setState(ProductState.HIGHLIGHTED, [id]);
					this.$refs.propertiesPanel.setCurProperty(guid, id);
					this.$refs.extPropertiesPanel.setCurProperty(guid, id);
				}
			});
		},
		//关闭页面，释放当前所有的bim模型
		destroyView() {
			if (this.loadedBims.size > 0) {
				let viewer = viewerHelper.getViewer();
				let modelIds = new Array();
				this.loadedBims.forEach((value, key, map) => {
					modelIds.push(value);
				});
				modelIds.forEach(id => {
					viewer.stop(id);
					viewer.unload(id);
				});
				modelIds.length = 0;
				this.loadedBims.clear();
			}
		},
		//加载默认模型的时候可能会一次加载多个bim
		loadBim(guids) {
			this.loading.downloadingCount = this.loading.waitCount =
				guids.length;
			this.loading.progressDatas.length = 0;
			this.loading.progressStep = 0;
			for (var i = 0; i < guids.length; i++) {
				let guid = guids[i];
				let bimiFile = guid + ".bimi";
				//预防中文，但发现C#还是有几率出现最后一个字乱码，所以现在bimi文件都是taskId当文件名
				let url = this.getDownloadUrl(bimiFile);
				let viewer = viewerHelper.getViewer();
				if (viewer) {
					this.loading.progressDatas.push({
						guid: guid,
						progress: 0,
						name: guid
					});
					viewer.load(url, guid);
				}
			}
        },
        //根据是否使用nignx动态生成bimi文件下载的url
        getDownloadUrl(bimiFile){
            return "data/"+bimiFile;
        },
		//卸载模型是一个个的卸载
		unloadBim(guid) {
			//结构面板remove数据
			let name = guid;
			this.$refs.spatialPanel.remove(name);
			//属性面板remove数据
			this.$refs.propertiesPanel.remove(guid);

			let modelId = this.loadedBims.get(guid);
			//modelId从0开始
			if (modelId != -1) {
				let viewer = viewerHelper.getViewer();
				if (viewer) {
					viewer.stop(modelId);
					viewer.unload(modelId);
					this.loadedBims.delete(guid);
					viewer.manualRefresh();
				}
			}
		},

		//加载bim插件
		addPlugins() {
			let viewer = viewerHelper.getViewer();
            if (viewer) 
            {
                let navCube = new NavCube();
                viewer.addPlugin(navCube);
                
				let flashPlugin = new FlashPlugin();
                viewer.addPlugin(flashPlugin);

				let tipPlugin = new TipPlugin();
                viewer.addPlugin(tipPlugin);

                let labelPlugin = new LabelPlugin();
                viewer.addPlugin(labelPlugin);

                let rectSelection = new RectSelectionPlugin(function(data){
                    console.info(data);
                    viewer.setState(ProductState.HIGHLIGHTED,data);
                });
                viewer.addPlugin(rectSelection);
	
                
				//构件顶点参数
				// let vertices = new Float32Array([
				//     //2000.0,-250.0,1500.0,
				//     0,0,0,
				//     4000, 500, 3000,
				// ]);
				// let ids = new Float32Array([
				//     6000000, //ID通常设置的大一点，但不要超过8200005
				//     6000001,
				// ]);
				// let colors = new Float32Array([
				//     1.0,0.0,0.0,1.0,
				//     0.0,0.0,1.0,1.0,
				// ]);
				// var pointPlugin = new PointPlugin({vertices:vertices,colors:colors,ids:ids});
				// viewer.addPlugin(pointPlugin);

				
			}
		},


		//显示结构树面板
		showSpatialPanel() {
			this.$refs.spatialPanel.panel.visiable = !this.$refs.spatialPanel
				.panel.visiable;
			this.setPanelTop(this.$refs.spatialPanel.panel);
		},
		//显示构件属性面板
		showPropertiesPanel() {
			this.$refs.propertiesPanel.panel.visiable = !this.$refs
				.propertiesPanel.panel.visiable;
			this.setPanelTop(this.$refs.propertiesPanel.panel);
		},
		//显示构件扩展属性面板
		showExtPropertiesPanel() {
			this.$refs.extPropertiesPanel.panel.visiable = !this.$refs
				.extPropertiesPanel.panel.visiable;
			this.setPanelTop(this.$refs.extPropertiesPanel.panel);
		},
		//通过zindex让panel显示在最前位
		setPanelTop(panel) {
			if (panel.visiable) {
				this.$refs.spatialPanel.panel.zIndex = 1;
				this.$refs.propertiesPanel.panel.zIndex = 1;
				panel.zIndex = 2;
			}
		},
    
     
        test()
        {
            //视角当前数据
            var p = viewerHelper.getViewer().getCameraPosition();
            console.info(p);
            //视角初始数据
            var orthogonalCamera = viewerHelper.getViewer().orthogonalCamera;
            console.info(orthogonalCamera);
        },

        reciveMessage(){
            window.addEventListener('message',function(event){
                var message = event.data;
                new MessageUtil().doMessage(message);
            }, false);
        },
       
        openSPDialog(){
            top.postMessage('打开选点对话框', '*');
        }
	},
	mounted() {
		this.initView();
		//加载ifc名称缓存
		if (this.defaultBim && this.defaultBim !== "") {
			let guids = this.defaultBim.split(";");
			this.loadBim(guids);
		}

		document.oncontextmenu = function() {
			return false;
        };
        this.reciveMessage();
	},
	beforeDestroy() {
		this.destroyView();
		document.oncontextmenu = function() {
			return true;
        };
    
	}
};
</script>

<style scoped>
.bimDiv {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#bim {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.toolbarDiv {
	position: absolute;
    /* background: #ffffff;  */
	left: 50%;
	bottom: 10px;
	margin: 0px 0px 0px -70px; /*50%为自身尺寸的一半*/
	width: 140px;
}
.loading_bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.9);
	z-index: 99;
}
.loading {
	position: absolute;
	/* background-color: #ffff; */
	left: 50%;
	top: 50%;
	margin: -100px 0 0 -140px; /*50%为自身尺寸的一半*/
	width: 280px;
	color: #606266;
	z-index: 100;
}

.testDiv {
    /* background: red; */
	position: absolute;
	/* background: #ffffff; */
	right: 10px;
	top: 10px;
	width: 230px;
}
</style>
<style>
.tipTable {
    width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border-left: 1px solid #888;
	border-top: 1px solid #888;
}

.tipTable th,
.tipTable td {
	border-right: 1px solid #888;
	border-bottom: 1px solid #888;
	padding: 5px 15px;
}

.tipTable th {
	font-weight: bold;
	background: #ccc;
}
</style>