import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, /**严格模式：不能直接修改state里的值，只能通过mutation来设置 */
    state,
    getters,
    actions,
    mutations
})