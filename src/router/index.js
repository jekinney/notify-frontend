import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import ListHome from '@/app/list/pages/Index'
import ListCreate from '@/app/list/pages/Create'

import MessageShow from '@/app/message/pages/Show'
import MessageEdit from '@/app/message/pages/Edit'
import MessageHome from '@/app/message/pages/Index'
import MessageCreate from '@/app/message/pages/Create'

import EmailCreate from '@/app/email/pages/Create'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/list',
            name: 'ListHome',
            component: ListHome
        },
        {
            path: '/list/create',
            name: 'ListCreate',
            component: ListCreate
        },
        {
            path: '/message',
            name: 'MessageHome',
            component: MessageHome
        },
        {
            path: '/message/show/:messageId',
            name: 'MessageShow',
            component: MessageShow
        },
        {
            path: '/message/edit/:messageId',
            name: 'MessageEdit',
            component: MessageEdit
        },
        {
            path: '/message/create',
            name: 'MessageCreate',
            component: MessageCreate
        },
        {
            path: '/email/create',
            name: 'EmailCreate',
            component: EmailCreate
        },
    ]
})
