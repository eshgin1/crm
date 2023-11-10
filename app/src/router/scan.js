// import { defineAsyncComponent } from "vue"


export default{
    path: '/scan',
    name:'scan',
    meta: {layout: 'Default'},
    component: () => import('../pages/ScanPage.vue') 
}