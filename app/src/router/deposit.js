// import { defineAsyncComponent } from "vue"


export default{
    path: '/deposit',
    name:'deposit',
    meta: {layout: 'Default'},
    component: () => import('../pages/DepositPage.vue')
}