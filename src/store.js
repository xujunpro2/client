import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //可以通过this.$store.state.XX操作
    state: {
        token:null,
        api:null
    },
    //mutations是暴露给外部通过this.$store.commit('SET_USER',参数)调用改变store的接口,注意这是同步函数
    //通常我们喜欢用大写定义mutations
    //特别关注的是mutations只能传递一s个参数
    mutations: {
        
    },
    //this.$store.dispatch('setNewName',参数);
    actions: {
       
    }
})