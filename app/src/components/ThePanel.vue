<template>
    <div class="panel">
        <div class="panel-info">
            <div class="icon notification">
                <router-link to="/application" class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <span class="num">0</span>
                </router-link>
            </div>
            <div class="icon bag">
                <router-link to="/product">
                    <svg data-v-a58fee00="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><circle data-v-a58fee00="" cx="9" cy="21" r="1"></circle><circle data-v-a58fee00="" cx="20" cy="21" r="1"></circle><path data-v-a58fee00="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span class="num num-blue">0</span>
                </router-link>
            </div>
            <div class="cashbox">
                <div class="cashbox-title">Касса: <span class="cashbox-num">0</span></div>
            </div>
        </div>
        
        <div class="panel-info">
            <div class="icon switch">
                <input type="checkbox" class="checkbox">
                <label for="switch" class="checkbox-label"></label>
            </div>
            <div class="icon message">
                <router-link to="/message">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><path data-v-1134b199="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline data-v-1134b199="" points="22,6 12,13 2,6"></polyline></svg>
                    <span class="num num-green">0</span>
                </router-link>
            </div>
            <div class="icon taimer">
                <router-link to="/task">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span class="num num-green">0</span>
                </router-link>
            </div>
            <div class="user">
                <div class="user-name">Эшгин</div>
                <div class="user-jop">Разработчик</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .panel{
        width: 90%;
        /* width: 900px; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        background: #fff;
        margin: 0 auto;
        border-radius: 5px;
        padding: 20px;
    }
    .panel-info{
        display: flex;
        align-items:center;
    }
    .link{
        position: relative;
    }
    .icon{
        position: relative;
        margin-left: 25px;
    }
    .svg{
        width: 25px;
    }
    .num{
        position: absolute;
        padding: 1px;
        top: -17px;
        left: 10px;
        background: red;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 17px;
    }
    .num-blue{
        top: -7px;
        background: blue;
    }
    .num-green{
        top: -7px;
        background: green;
    }
    .cashbox{
        margin-left: 20px;
    }
    .cashbox-title{
        color:grey;
        font-size: 20px;
        font-weight: 400;
    }
    .cashbox-num{
        font-weight: 700;
        color: blue;
    }
    .checkbox{
        width: 25px;
    }
    .checkbox-label::after{
        
    }
    .user{
        margin-left: 20px;
    }
</style>