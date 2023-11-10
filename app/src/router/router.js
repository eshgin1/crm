import {createRouter, createWebHistory} from 'vue-router'

import applicationRoute from './application'
import archiveRoute from './archive'
import buyRoute from './buy'
import clientsRoute from './clients'
import depositRoute from './deposit'
import loginRoute from './login'
import messageRoute from './message'
import productRoute from './product'
import rassilkaRoute from './rassilka'
import scanRoute from './scan'
import settingRoute from './setting'
import statisticsRoute from './statistics'
import taskRoute from './task'


const routes = [
    applicationRoute,
    archiveRoute,
    buyRoute,
    ...clientsRoute,
    depositRoute,
    loginRoute,
    messageRoute,
    ...productRoute,
    rassilkaRoute,
    scanRoute,
    settingRoute,
    statisticsRoute,
    taskRoute
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router

// const routes = [
//     {
//         path: '/',
//         name: 'login',
//         meta: {layout: 'Auth'},
//         component: () => import('../pages/LoginPage.vue') 
//     },
//     {
//         path: '/application',
//         name:'application',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/ApplicationPage.vue') 
//     },
//     {
//         path: '/archive',
//         name:'archive',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/ArchivePage.vue') 
//     },
//     {
//         path: '/buy',
//         name:'buy',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/BuyPage.vue') 
//     },
//     {
//         path: '/clients',
//         name:'clients',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/ClientsPage.vue') 
//     },
//     {
//         path: '/deposit',
//         name:'deposit',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/DepositPage.vue') 
//     },
//     {
//         path: '/message',
//         name:'message',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/MessagePage.vue') 
//     },
//     {
//         path: '/product',
//         name:'product',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/ProductPage.vue'),
//         children:[{
//             path: '1',
//             component: () => import('@/components/Product/TheProductProfile.vue')
//         }] 
//     },
//     {
//         path: '/rassilka',
//         name:'rassilka',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/RassilkaPage.vue') 
//     },
//     {
//         path: '/scan',
//         name:'scan',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/ScanPage.vue') 
//     },
//     {
//         path: '/setting',
//         name:'setting',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/SettingPage.vue') 
//     },
//     {
//         path: '/statistics',
//         name:'statistics',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/StatisticsPage.vue') 
//     },
//     {
//         path: '/task',
//         name:'task',
//         meta: {layout: 'Default'},
//         component: () => import('../pages/TaskPage.vue') 
//     },
    
// ]

// const router = createRouter({
//     routes,
//     history: createWebHistory(process.env.BASE_URL)
// })

// export default router