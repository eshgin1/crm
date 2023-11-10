<template>
    <div class="time">
        <div class="time-block">
            <div class="time-title">Начало продажи:</div>
            <div class="time-title">{{startTime}}</div>
        </div>
        <div class="time-block">
            <div class="time-title">Дней в продаже:</div>
            <div class="time-title">0</div>
        </div>
        <div class="time-block">
            <div class="time-title">Просмотров на сайте</div>
            <div class="time-title">0</div>
        </div>
        <div class="time-autosale">Автоматическая продажа</div>
    </div>
</template>

<script>
    import { startTime } from '@/general/product';

    export default{
        setup(){
            return{
                startTime
            }
        }
    }
</script>
    
<style>

</style>