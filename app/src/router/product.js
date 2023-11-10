// import { defineAsyncComponent } from "vue"


export default[
    {
        path: '/product',
        name:'product',
        meta: {layout: 'Default'},
        component: () => import('../pages/ProductPage.vue'),
    },
    {
        path: '/product/:id',
        meta: {layout: 'Default'},
        component: () => import('../components/Product/TheProductProfile.vue')
    } 
]