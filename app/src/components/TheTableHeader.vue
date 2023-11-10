<template>
    <div class="table-header">
        <slot></slot>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .table-header{
        border-top: 1px solid #ebe9f1;
        border-bottom: 1px solid #ebe9f1;
        background-color: #f3f2f7;
        display: grid;
        /* grid-template-columns: 160px 167px repeat(5,113px) 1fr; */
        grid-template-columns: 70px 80px 80px 100px 100px repeat(2,120px) 1fr repeat(3,80px);
        padding: 10px 20px;
        align-items: center;
        gap: 15px;
    }
</style>