<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import redoundo from '@/mixins/redoundo'
import { mapMutations } from 'vuex'
export default {
    name: 'app',
    mixins: [redoundo],
    mounted: function () {
        this.initializeState()
    },
    methods: {
        ...mapMutations(['initializeState']),
    }
}
</script>

<style lang="scss">


html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0px;
}

#app {
  height: 100%;
  background-color: #eee;
}

</style>
