<template>
  <div class="action-bar__wrapper">
    <button class="action-btn" @click="zoomIn" :disabled="!canZoomIn">
         <svg-icon icon-class="zoom_in" style="font-size: 24px;" :color="canZoomIn ? '#fff' : 'rgba(255,255,255,.5)'"/>
    </button>

    <div class="zoom-value">{{Math.round(zoom * 100) + '%'}}</div>

    <button class="action-btn" @click="zoomOut" :disabled="!canZoomOut">
      <svg-icon icon-class="zoom_out" style="font-size: 24px;" :color="canZoomOut ? '#fff' : 'rgba(255,255,255,.5)'"/>
    </button>
  </div>
</template>


<script>


const MAX_ZOOM = 2.5
const MIN_ZOOM = 0.5

export default {
  name: 'zoom-menu',
  props: ['zoom'],
  computed: {
    canZoomIn () { return this.zoom < MAX_ZOOM },
    canZoomOut () { return this.zoom > MIN_ZOOM }
  },
  methods: {
    zoomIn () { this.$emit('zoomChange', Math.round((this.zoom + 0.1) * 10) / 10) },
    zoomOut () { this.$emit('zoomChange', Math.round((this.zoom - 0.1) * 10) / 10) }
  }
}
</script>


<style scoped>
.action-bar__wrapper {
  width: 48px;
  z-index: 1000;
  display: block;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.78);
  border-radius: 50px;
  opacity: 0.25;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.action-bar__wrapper:hover {
  opacity: 1;
}

.action-btn {
  height: 36px;
  width: 36px;
  min-width: 28px;
  min-height: 28px;
  padding: 1px;
  margin: 6px 0;
  border-radius: 100%;

  background-color: transparent;
  border: 0px none;
  user-select: none;
  outline: none;
}
.action-btn:hover {
  background-color: rgba(238, 238, 238, 0.038);
}
.action-btn:active {
  background-color: rgba(238, 238, 238, 0.38);
}
.action-btn * {
  vertical-align: middle;
}

.zoom-value {
  text-align: center;
  color: #fff;
  font-size: small;
}
</style>
