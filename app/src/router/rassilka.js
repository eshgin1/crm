// import { defineAsyncComponent } from "vue"


export default{
    path: '/rassilka',
    name:'rassilka',
    meta: {layout: 'Default'},
    component: () => import('../pages/RassilkaPage.vue') 
}