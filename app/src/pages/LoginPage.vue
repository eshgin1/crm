<template>
    <div class="login">
            <div class="logo">
                <img class="img" src="" alt="logo">
                <div class="title">Выездной ломбард в Екатеринбурге</div>
            </div>
            <form class="form">
                <input class="input" type="text" placeholder="Логин">
                <input class="input" type="password" placeholder="Пароль">
            </form>
            <router-link to="/application" class="btn">Войти</router-link>
        </div>
</template>

<script>
    export default{
        layout: 'AuthLayout'
    }
</script>

<style>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        padding: 20px;
        border-radius: 40px;
        background: #fff;
        box-shadow: 0 22px 90px 0 rgba(18.000000000000014,27.999999999999975,109,.13);
        width: 270px;
    }
    .logo{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
        gap: 10px;
    }
    .title{
        text-align: center;
        font-size: 20px;
    }
    .form{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .input{
        margin-top: 15px;
        padding: 10px 5px;
        text-align: center;
        border: 1px solid #cecece;
        border-radius: 5px;
    }
    .btn{
        margin-top: 20px;
        border: none;
        background: #323836;
        color: #fff;
        border-radius: 5px;
        padding: 15px 60px;
        cursor: pointer;
        transition: .2s;
    }
</style>