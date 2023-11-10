<template>
    <div class="auth">
        <router-view/>
        <!-- <div class="wrapper">
            <div class="logo">
                <img class="img" src="" alt="logo">
                <div class="title">Выездной ломбард в Екатеринбурге</div>
            </div>
            <form class="form">
                <input class="input" v-model="valueInputName" type="text" placeholder="Логин">
                <input class="input" v-model="valueInputPassword" type="password" placeholder="Пароль">
            </form>
            <button class="btn">Войти</button>
        </div> -->
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    .auth{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background: linear-gradient(100deg,#1495ba,#33a5ce)
    }

</style>