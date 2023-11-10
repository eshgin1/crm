<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
    
  </div>
</template>

<script>
  import { computed } from 'vue' // вычисляемое свойство
  import AuthLayout from './layouts/AuthLayout.vue'
  import DefaultLayout from './layouts/DefaultLayout.vue'
  import { useRoute } from 'vue-router'
  export default {
    name: 'App',

    setup(){
      const r = useRoute() //  используется для получения текущего маршрута.
      const layout = computed(() => (r.meta.layout || 'Auth')+'Layout' )
      // console.log(r.path)
      return {layout}
      
    },
    components: {AuthLayout, DefaultLayout}
  
  }
</script>

<style>
  #app{
    background:#f8f8f8;
  }
</style>
