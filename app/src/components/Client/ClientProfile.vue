<template>
    <div class="client-profile">
        <div class="client-panel">
            <div class="client-block">
                <img src="" alt="фото">
                <div class="client-name" v-if="client">{{ client.name }}</div>
                <div class="client-btns">
                    <button class="client-tab active">Изменить данные</button>
                    <button class="client-tab">Добавить залог</button>
                </div>
            </div>
            <div class="client-block">
                <div class="client-circle">
                    <p>0 %</p>
                </div>
                <div class="client-stat">
                    <div class="client-stat-item">
                        <div class="client-stat-text">Всего залогов<span>{{ client.totalDeposit }}</span></div>
                    </div>
                    <div class="client-stat-item">
                        <div class="client-stat-text">Просроченых залогов<span>{{ client.outTimeDeposit }}</span></div>
                    </div>
                    <div class="client-stat-item">
                        <div class="client-stat-text">Общая сумма залогов<span>{{ client.totalDeposit }}</span></div>
                    </div>
                    <div class="client-stat-item">
                        <div class="client-stat-text">Выкупленных залогов<span>{{ client.inactiveDeposit }}</span></div>
                    </div>
                    <div class="client-stat-item">
                        <div class="client-stat-text">Сейчас в залоге<span>{{ client.activeDeposit }}</span></div>
                    </div>
                    <div class="client-stat-item">
                        <div class="client-stat-text">Выплачено процентов<span>0</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="client-info">
            <div class="client-info-item" v-for="(item, i) in infoTitles" :key="i">
                <div class="client-info-title">{{ item.title }}</div>
                <my-input :type="item.typeInput" class="client-input"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyInput from '../UI/MyInput.vue';

    export default {
        props:{
            client:{
                type: Object
            }
        },
        components:{
            MyInput
        },
        setup(){
            const infoTitles = [
                {title: 'Телефон', typeInput: 'text'},
                {title: 'Фамилия', typeInput: 'text'},
                {title: 'Имя', typeInput: 'text'},
                {title: 'Отчество', typeInput: 'text'},
                {title: 'Дата рождения', typeInput: 'date'},
                {title: 'Город', typeInput: 'text'},
                {title: 'Адрес прописки', typeInput: 'text'},
                {title: 'Адрес проживания', typeInput: 'text'},
                {title: 'Тип документа', typeInput: 'text'},
                {title: 'Серия номер', typeInput: 'text'},
                {title: 'Кем выдан', typeInput: 'text'},
                {title: 'Дата выдачи', typeInput: 'date'},
                {title: 'Код подразделения', typeInput: 'text'},
                {title: 'Дата регистрации', typeInput: 'date'},
                {title: 'Электронная почта', typeInput: 'text'},
            ]
            return{
                infoTitles
                
            }
        }
    }
</script>

<style>
    .client-panel{
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        grid-gap: 20px;
        gap: 20px;
    }
    .client-block{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 10px;
        gap: 10px;
        align-items: center;
    }
    .client-btns{
        display: flex;
        gap: 10px;
    }
    .client-circle{
        width: 100px;
        height: 100px;
        display: grid;
        align-items: center;
        justify-items: center;
        color: #fff;
        font-weight: 600;
        border-radius: 50%;
        background: #1495ba;
    }
    .client-stat{
        display: grid;
        grid-template-columns: 200px 200px;
        grid-gap: 10px;
        gap: 10px;
        align-items: center;
    }
    .client-stat-text{
        display: flex;
        justify-content: space-between;
    }
    .input.client-input{
        border: none;
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid #bababa;
    }
    .client-info{
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 20px;
        gap: 20px;
        align-items: center;
    }
</style>