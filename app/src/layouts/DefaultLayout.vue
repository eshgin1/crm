<template>
    <div class="default">
        <TheSideBar/>
        <ThePanel/>
        <div class="page">
            <router-view/>
        </div>
    </div>
</template>

<script>
import ThePanel from '../components/ThePanel.vue';
import TheSideBar from '../components/TheSideBar.vue'
    export default{
        data(){
            return{
                arrPage:[],
                currentPage: 2
            }
        },
        components:{
            ThePanel, TheSideBar
        }
    }
</script>

<style scoped> 
    .default{
        padding: 20px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        gap: 20px;
        
    }
</style>