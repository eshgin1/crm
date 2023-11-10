// import { defineAsyncComponent } from "vue"


export default{
    path: '/buy',
    name:'buy',
    meta: {layout: 'Default'},
    component: () => import('../pages/BuyPage.vue')
}