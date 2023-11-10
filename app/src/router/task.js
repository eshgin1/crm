// import { defineAsyncComponent } from "vue"


export default{
    path: '/task',
    name:'task',
    meta: {layout: 'Default'},
    component: () => import('../pages/TaskPage.vue') 
}