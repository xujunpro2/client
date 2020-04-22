<template>
  <div class="menus-wrapper">
    <menu-toggle menuHeader="Basic">
      <div class="cell-menu">
        <div class="cell-menu__el"  draggable="true" @dragstart="dragstartHandler($event,'aa')">
          <svg-icon icon-class="preview" style="font-size: 24px;  color: rgba(0,0,0,.87)" />
          <span>haha</span>
        </div>
        <div class="cell-menu__el" >
          <svg-icon icon-class="preview" style="font-size: 24px;  color: rgba(0,0,0,.87)" />
          <span>haha</span>
        </div>
      </div>
    </menu-toggle>

   
  </div>
</template>


<script>

import MenuToggle from '@/components/editor/common/MenuToggle'
export default {
  name: 'elements-menu',
  components: { MenuToggle },
  data: function () {
    return {

    }
  },
  computed: {
    
  },
  methods: {
    dragstartHandler (e, item) {
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'all'
    //   var json = JSON.stringify(this.initItem(item));
    //   console.info(json);
    //   e.dataTransfer.setData('text/plain', JSON.stringify(this.initItem(item)))
    },

    addItemToStage (e, item) {
      
    },

    initItem (item) {
      return { zIndex: 'auto', top: 0, left: 0, bottom: 'auto', right: 'auto', ...item }
    },


  }
}
</script>


<style scoped>
.menus-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: calc(100% - 58px);
  width: 100%;
  position: absolute;
  overflow-y: auto;
}

.cell-menu {
  width: 100%;
  height: 100%;
  display: grid;
  margin: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(1px, 72px);
}

.cell-menu__el {
  width: 79px;
  cursor: pointer;
  padding-top: 1em;
  color: rgba(0,0,0,.87);
  text-align: center;
  border-radius: 2px;
  background-color: transparent;
  transition: all 0.20s cubic-bezier(0.4, 0, 0.2, 1);
}
.cell-menu__el:hover{
  background-color: rgba(0,0,0,.08);
}
.cell-menu__el span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
  padding: 0 8px;
}
</style>
