<template>
    <div class="deposit">
        <div class="deposit-wrapper">
            <button class="deposit-btn">Добавить залог</button>
            <div class="deposit-titles">
                <div class="deposit-title">
                    <img src="" alt="icon">
                    <div class="deposit-text">Все залоги</div>
                </div>
                <div class="deposit-title">
                    <img src="" alt="icon">
                    <div class="deposit-text">Активные</div>
                </div>
                <div class="deposit-title">
                    <img src="" alt="icon">
                    <div class="deposit-text">Выкупленные</div>
                </div>
                <div class="deposit-title">
                    <img src="" alt="icon">
                    <div class="deposit-text">Просроченные</div>
                </div>
            </div>
            <div class="deposit-total">
                <div class="deposit-sum">Общая сумма: <span>0 руб</span></div>
                <div class="deposit-sum">Количество <span>0</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        setup(){
            return{

            }
        }
    }
</script>

<style>
    .deposit{
        width: 220px;
        height: 100%;
        min-height: 100vh;
        background: #fff;
        border: 1px solid rgb(206 206 206/22%);
        border-radius: 5px;
        padding: 20px;
    }
    .deposit-btn{
        width: 100%;
    }
    .deposit-title{
        margin-top: 15px;
        display: flex;
        gap: 10px;
        font-size: 18px;
    }
    .deposit-total{
        margin-top: 10px;
        padding: 5px;
        border-radius: 5px;
        background: #ea5455;
    }
    .deposit-sum{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }
</style>