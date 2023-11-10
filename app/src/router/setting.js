// import { defineAsyncComponent } from "vue"


export default{
    path: '/setting',
    name:'setting',
    meta: {layout: 'Default'},
    component: () => import('../pages/SettingPage.vue') 
}