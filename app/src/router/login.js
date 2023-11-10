// import { defineAsyncComponent } from "vue"


export default{
    path: '/',
    name: 'login',
    meta: {layout: 'Auth'},
    component: () => import('../pages/LoginPage.vue') 
}