<template>
    <div class="bimDiv">
		<canvas id="bim"></canvas>
        <div id="info">
            <div>Selected ID:<span id = "id" ></span></div>
            <div>Framerate (FPS): <span id="fps"></span></div>
            <div><input type="file" id="input" accept=".bimi" @change="onChange"/></div>
        </div>
    </div>
</template>

<script>
import { xViewer, xState } from "@/assets/js/bim/bim";
import viewerHelper from "@/utils/viewHelper";
export default {
  name: 'home',
  data() {
		return {
            bimId: -1,
		};
	},
  methods: {
       initView(){
           document.oncontextmenu=function(){return false};
            let viewer = new xViewer("bim");
            viewerHelper.setViewer(viewer);
            viewer.on("error",error=>{
                 console.error(error.message);
            });
            viewer.on("loaded", model => {
				this.bimId = model.id;
				viewer.start();
			});
            viewer.on("pick", function(arg){
                var span = document.getElementById("id");
                if (span){
                    span.innerHTML = arg.id;
                }
            });
            viewer.on("fps", function(fps){
                var span = document.getElementById("fps");
                if (span){
                    span.innerHTML = fps;
                }
            });
			viewer.on("dblclick", args => {
				var id = args.id;
				if (id) {
					viewer.resetStates();
					viewer.zoomTo(id);
					viewer.setCameraTarget(id);
					//viewer.setState(xState.HIGHLIGHTED, [id]);
				}
			});
        },
        onChange(){
            if (!input.files) return;

	        var file = input.files[0];
	        if (!file) return;
            let viewer = viewerHelper.getViewer();
            if(viewer)
            {
                this.unloadView();
                viewer.load(file);
            }
        },

        
        unloadView(){
            if (this.bimId != -1) 
            {
                let viewer = viewerHelper.getViewer();
                if (viewer) 
                {
                    viewer.stop(this.bimId);
                    viewer.unload(this.bimId);
                }
		    }
        }
  },
  mounted() {
      this.initView();
	}
}
</script>
<style scoped>
.bimDiv {
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
#info 
{
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 10px;
    z-index: 2; 
    background: white;
}

</style>

