<template>
    <div class="buy">
        <div class="buy-header">
            <my-input placeholder="Введите название товара"/>
            <my-button>Найти</my-button>
            <my-button>Оформить скупку</my-button>
        </div>
    </div>
</template>

<script>
    import MyInput from '@/components/UI/MyInput.vue';
    import MyButton from '@/components/UI/MyButton.vue';

    export default{
        components:{
            MyInput, MyButton
        }
    }   
</script>

<style>
    .buy{
        padding: 20px;
        background: #fff;
    }
    .buy-header{
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 20px;
    }
</style>