// import { defineAsyncComponent } from "vue"


export default{
    path: '/application',
    name:'application',
    meta: {layout: 'Default'},
    component: () => import('../pages/ApplicationPage.vue') 
}