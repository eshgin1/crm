// import { defineAsyncComponent } from "vue"


export default{
    path: '/statistics',
    name:'statistics',
    meta: {layout: 'Default'},
    component: () => import('../pages/StatisticsPage.vue')
}