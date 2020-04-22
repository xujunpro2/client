import Vue from 'vue'
import App from './App.vue'  //./表示当前相对路径  @/表示src目录
import router from './router'
import store from './store/'

import '@/icons' // svg icon

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/globe.css'
Vue.use(ElementUI, { size: 'small'});

//阻止浏览器控制台显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

