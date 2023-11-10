<template>
    <div class="product-item">
        <img src="" alt="img">
        <div class="product-title">{{ title }}</div>
        <div class="product-price">{{ price }}</div>
    </div>
</template>

<script>
    export default{
        props:{
            title: {
                type: String
            },
            price: {
                type: Number
            }
        },
        setup(){
            // console.log(props)
            // const {title} = props.title
            // const {price} = props.price
            
            return{
                
                // title,
                // price,
            }
        }
    }
</script>

<style>
    .product-item{
        background: #fff;
        border-radius: 8px;
        padding: 10px;
        text-align: center;
        transition: .2s;
        cursor: pointer;
        box-shadow: 0 4px 24px 0 rgb(34 41 47/10%);
    }
</style>