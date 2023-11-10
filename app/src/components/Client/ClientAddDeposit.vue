<template>
    <div class="add-deposit">
        <div class="add-deposit-arrow">></div>
        <div class="add-deposit-img">
            <img src="" alt="photo">
        </div>
        <div class="add-deposit-wrapper">
            <div class="add-deposit-block">
                <input type="image" src="" alt="">
            </div>
            <div class="add-deposit-block add-deposit-block-data">
                <div class="add-deposit-input">
                    <div class="input-title">Наименование товара</div>
                    <input type="text">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Категория товара</div>
                    <select>
                        <option :value="category" v-for="(category, i) in productCategoryArr" :key="i">{{ category }}</option>
                    </select>
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Сумма оценки товара (руб)</div>
                    <input type="text">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Тариф</div>
                    <select></select>
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Тип товара</div>
                    <select>
                        <option value=""></option>
                    </select>
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Срок(дней)</div>
                    <input type="text">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Дефекты</div>
                    <input type="text">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Стоимость на продажу(руб)</div>
                    <input type="text">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Дата</div>
                    <input type="data">
                </div>
                <div class="add-deposit-input">
                    <div class="input-title">Описание</div>
                    <input type="text">
                </div>

                <!-- <div class="add-deposit-input" v-for="item in addDepositArr">
                    <div class="input-title">{{ item.title }}</div>
                    <my-input/>
                </div> -->
                <!-- <div class="add-deposit-btns">
                    <my-button class="button button-green">Оформить залог</my-button>
                    <my-button class="button button-red">Отменить залог</my-button>
                </div> -->
            </div>
            
        </div>
        
    </div>
</template>

<script>
    // import { ref } from 'vue';
    // import MyInput from '../UI/MyInput.vue';
    // import MyButton from '../UI/MyButton.vue';
    import { productCategoryArr } from '@/general/product';
    export default{
        components:{
            // MyInput, MyButton
        },
        setup(){
            // const addDepositArr = ref([
            //     {title: 'Наименование товара', value: ''},
            //     {title: 'Категория товара', value: ''},
            //     {title: 'Cумма оценки (руб.)', value: ''},
            //     {title: 'Тариф', value: ''},
            //     {title: 'Тип товара', value: ''},
            //     {title: 'Срок (дней)', value: ''},
            //     {title: 'Дефекты', value: ''},
            //     {title: 'Стоимость на продажу (руб.)', value: ''},
            //     {title: 'Дата', value: ''},
            //     {title: 'Описание', value: ''},
            // ])
            return{
                // addDepositArr,
                productCategoryArr
            }
        }
    }
</script>

<style>
    .add-deposit{
        padding: 10px 40px;
        position: fixed;
        top: 0;
        left: 300px;
        right: 0;
        height: 100vh;
        background: #1495ba;
    }
    .add-deposit-wrapper{
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-gap: 30px;
        gap: 30px;
    }
    .add-deposit-block-data{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 20px;
        gap: 20px;
    }
    .input-title{
        color: #fff;
    }
    .button.button-green{
        background: green;
    }
    .button.button-red{
        background: red;
    }
</style>