import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=> import('@/views/Home'),
    },
    {
        path: '/edit',
        component: () => import('@/views/Edit'),
    }
  ]
})
