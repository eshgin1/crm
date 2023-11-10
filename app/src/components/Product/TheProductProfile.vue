<template>
    
    <div class="profile" 
    v-for="(product, i) in filterArr"
    :key="i"
    v-show="product.title === $router.currentRoute.value.params.id" > <!-- <div>Проблема с id</div> -->
        <div class="profile-block">
            <TheTimeBlock/>
        </div>
        <div class="profile-block">
            <div class="profile-titles">
                <div class="profile-title">Категория товара: {{ product.title }}</div>
                <div class="profile-title">Стоимость (руб): {{ product.price }}</div>
                <div class="profile-title">Закупка (руб): {{ product.zakupka }} </div>
                <div>Тут картина</div>
                <div class="profile-title">Статус: {{ product.status }}</div>
                <div class="profile-title">Состояние: {{ product.state }}</div>
                <div class="profile-title">Деффекты: {{ product.deffect }}</div>
                <div class="profile-title">Место находения: {{ product.location }}</div>
            </div>
            <div class="profile-btns">
                <my-button>Изменить</my-button>
                <my-button>Продать</my-button>
                <my-button>Бронировать</my-button>
                <my-button>Удалить</my-button>
            </div>
        </div>
    </div>
</template>

<script>
    import TheTimeBlock from '../TheTimeBlock.vue';
    import MyButton from '../UI/MyButton.vue';
    import { filterArr } from '@/general/product';
    export default{
        components:{
            TheTimeBlock, MyButton
        },
        setup(){
            return{
                filterArr
            }
        }
    }
</script>

<style scoped>
    .profile{
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-gap: 20px;
        gap: 20px;
        background: #fff;
    }
    .profile-title{
        margin-bottom: 10px;
        font-size: 20px;
    }
    .profile-btns{
        margin-top: 20px;
    }
</style>