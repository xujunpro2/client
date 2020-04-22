<template>
    <div class="action-bar__wrapper">

        <button class="action-btn" :disabled="!canUndo" @click="$root.$emit('undo')">
            <svg-icon icon-class="undo" style="font-size: 24px;  color: #36a3f7" />
        </button>

        <button class="action-btn" :disabled="!canRedo" @click="$root.$emit('redo')">
            <svg-icon icon-class="redo" style="font-size: 24px;  color: #36a3f7" />
        </button>

        <button class="action-btn">
            <svg-icon icon-class="preview" style="font-size: 24px;  color: #36a3f7" />
        </button>

        <div class="separator"></div>

        <button class="action-btn">
            <svg-icon icon-class="delete" style="font-size: 24px;  color: #36a3f7" />
        </button>

        <!--文件菜单-->
        <el-dropdown>
            <span class="el-dropdown-link">
                <button class="action-btn">
                    <svg-icon icon-class="folder" style="font-size: 24px;  color: #36a3f7" />
                </button>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>打开</el-dropdown-item>
                <el-dropdown-item>关闭</el-dropdown-item>
                
            </el-dropdown-menu>
        </el-dropdown>

        <button class="action-btn">
            <svg-icon icon-class="download" style="font-size: 24px;  color: #36a3f7" />
        </button>
        <div class="separator"></div>

         <button class="action-btn">
            <svg-icon icon-class="gh_logo" style="font-size: 32px;  color: #36a3f7" />
        </button>
    </div>
</template>


<script>

export default {
  name: 'action-bar',
  data: function () {
    return {
      fileValue: null,
      canUndo: true,
      canRedo: true
    }
  },
  computed: {
   
 
  },
  methods: {
    
  }
}
</script>


<style scoped>
.action-bar__wrapper {
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  box-sizing: border-box;
}

.action-btn {
  height: 36px;
  width: 36px;
  min-width: 28px;
  min-height: 28px;
  padding: 1px;
  margin: 0 6px;
  border-radius: 100%;

  background-color: transparent;
  border: 0px none;
  user-select: none;
  outline: none;
  cursor: pointer;
}
.action-btn:hover {
  background-color: rgba(43, 106, 115, 0.038);
}
.action-btn:active {
  background-color: rgba(43, 106, 115, 0.38);
}
.action-btn * {
  vertical-align: middle;
}

.mdc-menu {
  background-color: #fff;
  transform-origin: right top 0 !important;
  top: 0px !important;
  right: 0px;
  left: auto !important;
}
.mdc-menu-item input {
  display: none;
}

.separator {
  width: 1px;
  height: 16px;
  margin: 0 6px;
  background-color: rgba(0, 0, 0, 0.12);
}

.syncing {
  animation:spin 1s linear infinite;
}
@keyframes spin { 100% { transform:rotate(360deg); }}

</style>
