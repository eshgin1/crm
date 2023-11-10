<template>
    <div class="new-client">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style>
    .new-client{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        background: rgb(0 0 0/85%);
        z-index: 99999;
    }
</style>