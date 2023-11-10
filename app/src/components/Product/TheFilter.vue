<template>
    <div class="filter">
        <div class="filter-header">
            <div class="filter-title">Фильтры</div>
            <my-button @click="clearFilter">Очистить</my-button>
        </div>
        <div class="filter-main">
            <div class="filter-subtitle">Категория товара</div>
            <select v-model="filterParametrValue.select">
                <option>Выбрать</option>
                <option v-for="(item, i) in productCategoryArr" :key="i">{{ item }}</option>
            </select>
            <div class="filter-block">
                <div class="filter-subtitle">Нахождения</div>
                <div class="filter-item">
                    <input type="checkbox" value="Пальмиро Тольяти" v-model="filterParametrValue.locations">
                    <div class="filter-location">Пальмиро Тольяти</div>
                </div>
                <div class="filter-item">
                    <input type="checkbox" value="Военная" v-model="filterParametrValue.locations">
                    <div class="filter-location">Военная</div>
                </div>
                <div class="filter-item">
                    <input type="checkbox" value="Березовая" v-model="filterParametrValue.locations">
                    <div class="filter-location">Березовая</div>
                </div>
            </div>
            <div class="filter-block">
                <div class="filter-subtitle">Статус</div>
                <div class="filter-item">
                    <input type="checkbox" value="новый" v-model="filterParametrValue.statuts">
                    <div class="filter-location">Новый</div>
                </div>
                <div class="filter-item">
                    <input type="checkbox" value="распродажа" v-model="filterParametrValue.statuts">
                    <div class="filter-location">Распродажа</div>
                </div>
                <div class="filter-item">
                    <input type="checkbox" value="бронь" v-model="filterParametrValue.statuts">
                    <div class="filter-location">Бронь</div>
                </div>
            </div>
            <div class="filter-block">
                <div class="filter-subtitle">Состояние</div>
                <div class="filter-item">
                    <input type="checkbox" value="Новая" v-model="filterParametrValue.statets">
                    <div class="filter-location">Новая</div>
                </div>
                <div class="filter-item">
                    <input type="checkbox" value="Б/У" v-model="filterParametrValue.statets">
                    <label for="checkbox">Б/У</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyButton from '@/components/UI/MyButton.vue';
    import { filterParametrValue, productCategoryArr, clearFilter} from '@/general/product';
    export default{
        components:{
            MyButton
        },
        setup(){
            return{
                filterParametrValue,
                productCategoryArr,
                clearFilter
            }
        }
    }
</script>

<style>
    .filter{
        padding: 20px;
        background: #fff;
    }
    .filter-header{
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
    }
    .filter-title{
        font-size: 17px;
        font-weight: 600;
    }
    .filter-block{
        margin-top: 15px;
    }
    .filter-item{
        display: flex;
    }
</style>