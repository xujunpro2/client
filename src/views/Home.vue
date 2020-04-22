<template>
    <div class="layout-container">
        <div class="edit-view">
            <headegg></headegg>
            <drawer></drawer>
            <main id="main" role="main" @scroll="scrollFunction">
                <mainegg></mainegg>
            </main>
        </div>
    </div>
</template>

<script>
import Headegg from '@/components/editor/header'
import Drawer from '@/components/editor/drawer'
import Mainegg from '@/components/editor/main'

export default {
    name: "Home",
    components: { Headegg,Drawer, Mainegg},
	data() {
		return {
			notScrolled: true
		};
	},
	methods: {
        scrollFunction (e) 
        {
            this.notScrolled = (e.target.scrollTop === 0)
        },
	},
	beforeDestroy() {
	
	}
};
</script>

<style scoped>
.layout-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.edit-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}
#main {
  height: 100%;
  position: relative;
  display: inline-block;
  overflow-y: auto;
  overflow-x: auto;
  flex-grow: 1;
  margin-right: 240px;
}

</style>