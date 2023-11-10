// import { defineAsyncComponent } from "vue"


export default{
    path: '/archive',
    name:'archive',
    meta: {layout: 'Default'},
    component: () => import('../pages/ArchivePage.vue') 
}