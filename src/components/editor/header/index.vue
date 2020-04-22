<template>
  <div class="headegg" >
    <svg-icon icon-class="preview" style="font-size: 48px;  color: #36a3f7" />
    <label class="sysLabel">VUE-DATAV</label>
    <div class="spacer"></div>
    <action-bar></action-bar>
  </div>
</template>


<script>

import ActionBar from './ActionBar'

export default {
  name: 'headegg',
  components: { ActionBar },
  data: function () {
    return {
     
    }
  },

  methods: {
   
  }
}
</script>


<style scoped>

.headegg {
  z-index: 1000;
  height: 64px;
  width: calc(100% - 240px);
  color: #606266;
  padding: 0 25px 0 25px;
  margin-right: 240px;
  border: none;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  box-sizing: border-box;
  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);

  transition-duration: .2s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-property: max-height,box-shadow;
}
.not-scrolled {
  box-shadow: none;
}

/* IN DEVICES SMALLER THAN 1024px -> NO DRAWER (so remove margins) */
@media screen and (max-width: 1024px) {
  .headegg {
    margin: 0px;
    width: 100%;
  }
}

.home-btn {
  margin-right: 25px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: transparent;
  outline: none;
}

.sysLabel{
    width:150px;margin-left:10px
}
.spacer {
  width: 70%;
}


</style>
