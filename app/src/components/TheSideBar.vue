<template>
    <div class="sidebar">
        <div class="logo">
            <img src="" alt="logo" class="img">
            <div class="title">Выездной ломард</div>
        </div>
        <ul class="sidebar-list">
        
            <!-- <div class="sidebar-item"
                // Другой способ реализации
                v-for="(item , i) in menuuser"
                :key="'id' + i" 
                :class="{active: currentEl === i+1}" 
                @click.prevent="activeEl(i), $router.push(`/${item.path}`)">
                <img :src="item.svg" alt="icon" class="icon">
                <span>{{ item.name }}</span>
            </div> -->
            <router-link :to='`/${item.path}`' 
                class="sidebar-item"
                v-for="(item , i) in menuuser"
                :key="'id' + i" 
                :class="{active: currentEl === i+1}" 
                @click.prevent="activeEl(i)">
                <img :src="item.svg" alt="icon" class="icon">
                <span>{{ item.name }}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import { menuuser } from '@/general/menu'
    import {ref} from 'vue'
    export default{
        setup() {
            const currentEl = ref(2)
            const activeEl = (i) => {
                currentEl.value = i+1
                // emit('numEl', currentEl.value)
                }

                return {menuuser,activeEl, currentEl}
            }
    }
</script>

<style scoped>
    .sidebar{
        padding: 15px;
        display: flex;
        flex-direction: column;
        background:#fff;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .logo{
        display: flex;
        align-items:center
    }
    .title{
        margin-left: 10px;
        font-size: 20px;
    }
    .sidebar-list{
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .sidebar-item{
        padding: 10px;
        display: flex;
        align-items:center;
        text-decoration: none;
        font-size: 17px;
        cursor: pointer;
    }
    .sidebar-item.active{
        background: #32adde;
        color: #fff;
        box-shadow: 0 0 10px 1px rgb(31 153 188/42%);
    }
    .icon{
        width: 35px;
    }
    span{
        margin-left: 10px;
    }
</style>