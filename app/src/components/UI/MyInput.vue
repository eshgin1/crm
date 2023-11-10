<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
    export default{
        props:{
            modelValue: [String, Number]
        },
        methods:{
            updateInput(event){
                this.$emit('update:modelValue', event.target.value) // особый шаблон
            }
        }
    }
</script>

<style scoped>
    .input{
        margin-top: 5px;
        padding: 10px 10px;
        border: 1px solid #d8d6de;
        border-radius: 5px;
        /* background: none; */
        font-size: 13px;
        box-shadow: 0 2px 8px 0 rgb(34 41 47/14%)
    }
</style>