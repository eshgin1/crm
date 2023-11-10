// import { defineAsyncComponent } from "vue"


export default{
    path: '/message',
    name:'message',
    meta: {layout: 'Default'},
    component: () => import('../pages/MessagePage.vue') 
}