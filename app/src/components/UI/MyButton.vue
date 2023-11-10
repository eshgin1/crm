<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default{
    }
</script>

<style scoped>
    .button{
        padding: 20px;
        border: none;
        border-radius: 5px;
        background: #1495ba;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
    }
    
</style>