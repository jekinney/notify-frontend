import Vue from 'vue'
import Vuex from 'vuex'

import list from '../app/list/state'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        list
    }
})