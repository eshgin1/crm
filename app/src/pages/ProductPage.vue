<template>
    <div class="product">
        <MyFilter/>
        <div class="product-catalog">
            <div class="product-panel">
                <my-input 
                    placeholder="Введите название товара"
                    v-model="productName"
                    />
                <my-button>Найти</my-button>
                <my-button @click='showAddProductComponent = true'>Добавить товар</my-button>
                <my-button>Печать</my-button>
            </div>
            <div class="product-wrapper">
                <TheProductItem 
                    v-for="(product, i) in filterArr"
                    :key="i"
                    :title="product.title"
                    :price="product.price"
                    @click="$router.push(`/product/${product.title}`)"
                />
            </div>
        </div>
        <transition>
            <AddProduct v-show="showAddProductComponent"/>
        </transition>
    </div>
</template>

<script>
    import MyButton from '@/components/UI/MyButton.vue';
    import MyInput from '@/components/UI/MyInput.vue';
    import AddProduct from '@/components/Product/AddProduct.vue';
    import MyFilter from '@/components/Product/TheFilter.vue'

    import {productName, filterArr, showAddProductComponent} from '@/general/product'
    import TheProductItem from '@/components/Product/TheProductItem.vue';
    
    export default{
        components:{
            MyButton, MyInput, MyFilter, AddProduct,
            TheProductItem
        },
        setup(){
            return {
                filterArr,
                showAddProductComponent, 
                productName,
            }
        }
    }
</script>

<style scoped>
    .product{
        padding: 15px;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 20px;
    }
    .product-filter{
        padding: 10px;
        background: #fff;
    }
    .product-panel{
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        grid-gap: 20px;
        gap: 20px;
    }
    .product-wrapper{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>