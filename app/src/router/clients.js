// import { defineAsyncComponent } from "vue"


export default[
    {
        path: '/clients',
        name:'clients',
        meta: {layout: 'Default'},
        component: () => import('../pages/ClientsPage.vue') 
    },
    {
        path: '/clients/:id',
        meta: {layout: 'Default'},
        component: () => import('../components/Client/ClientCart.vue'),
         
    },

]