<template>
    <div class="newproduct-input">
        <div class="newproduct-subtitle">Название товара:</div>
        <input type="text" v-model="dataForInputsNewProduct.title">
        <div class="newproduct-subtitle">Стоимость (руб):</div>
        <input type="text" v-model="dataForInputsNewProduct.price">
        <div class="newproduct-subtitle">Закупка (руб):</div>
        <input type="text" v-model="dataForInputsNewProduct.zakupka">
        <div class="newproduct-subtitle">Описание:</div>
        <input type="text" v-model="dataForInputsNewProduct.descr">
    </div>
    <div class="newproduct-select">
        <div class="newproduct-subtitle">Cтатус</div>
        <select v-model="dataForInputsNewProduct.status">
            <option value="новый">новый</option>
            <option value="распродажа">распродажа</option>
            <option value="бронь">бронь</option>
        </select>

        <div class="newproduct-subtitle">Состояние</div>
        <select v-model="dataForInputsNewProduct.state">
            <option value="Новая">Новая</option>
            <option value="Б/У">Б/У</option>
        </select>

        <div class="newproduct-subtitle">Категория товара</div>
        <select v-model="dataForInputsNewProduct.category">
            <option value="телефоны">телефоны</option>
            <option value="украшения">украшения</option>
            <option value="бытовая техника">бытовая техника</option>
            <option value="телевизоры">телевизоры</option>
            <option value="строительные материалы">строительные материалы</option>
        </select>

        <div class="newproduct-subtitle">Место нахождения</div>
        <select v-model="dataForInputsNewProduct.location">
            <option value="Березовая">Березовая</option>
            <option value="Военная">Военная</option>
            <option value="Пальмиро Тольяти">Пальмиро Тольяти</option>
        </select>
    </div>
</template>

<script>
    // import MyInput from '../UI/MyInput.vue';
    import {dataForInputsNewProduct} from '@/general/product';
    export default{
        components:{
            // MyInput
        },
        setup(){
            return{
                dataForInputsNewProduct
            }
        }
    }
</script>

<style scoped>
    .newproduct-block{
        /* width: 100%; */
    }
</style>