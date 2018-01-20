// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import store from './store'
import router from './router'

window.axios = axios.create({
    baseURL: 'http://package.test/api/'
    //baseURL: 'https://laravelopers.com/api/v1'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
