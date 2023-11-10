<template>
    <div class="newproduct">
        <div class="newproduct-blockimg">
            <div class="newproduct-photo">
                <div class="newproduct-img">
                    <img src="" alt="img">
                </div>
            </div>
            <div class="newproduct-photo small">
                <div class="newproduct-photomer">
                    <div class="newproduct-img">
                        <img src="" alt="img">
                    </div>
                </div>
            </div>
            <TheTimeBlock/>
        </div>
        
        <div class="newproduct-blockinfo">
            <TheNewProduct/>
            <my-button @click="saveNewProduct">Сохранить</my-button>
            <my-button @click="closeNewProduct">Отмена</my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from '@/components/UI/MyButton.vue';

    import TheNewProduct from './TheNewProduct.vue';
    import TheTimeBlock from '@/components/TheTimeBlock.vue'
    import {saveNewProduct, save, closeNewProduct, startTime} from '@/general/product'
    export default{
        components:{
            MyButton, TheNewProduct, TheTimeBlock
        },
        setup(){

            return{
                save,
                startTime,
                closeNewProduct,

                saveNewProduct
            }
        }
    }
</script>

<style scoped>
    .newproduct{
        /* padding: 20px; */
        position: absolute;
        width: 1150px;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-gap: 20px;
        gap: 20px;
        background: #fff;
    }
    .newproduct-blockimg{
        display: flex;
        flex-direction: column;
    }
    .newproduct-photo{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        border: 3px dotted #000;
        border-radius: 5px;
        transition: .2s;
        cursor: pointer;
        opacity: .5;
    }
    .newproduct-photo.small{
        width: 120px;
        height: 80px;
    }
    .newproduct-photo:first-child{
        height: 250px;
    }

</style>