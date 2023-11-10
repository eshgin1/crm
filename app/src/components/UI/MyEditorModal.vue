<template>
    <div class="editor-wrapper">
        <slot></slot>
    </div>

</template>

<script>
    export default{
        props:{
            currentPerson: {
                type: Number
            },
            indexPerson:{
                type: Number
            }
        }
    }
</script>

<style>
    .editor-wrapper{
        padding: 20px;
        position: absolute;
        /* width: 100%; */
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        background: #1495ba;
    }

</style>