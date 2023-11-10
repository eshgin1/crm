<template>
    <div class="client"
        v-for="(client, i) in clientData"
        :key="i"    
        v-show="client.name === $router.currentRoute.value.params.id"
        >
        <div class="client-tabs">
            <button 
                class="client-tab"
                v-for="(component, i) in componentArr"
                :key="i"
                :class="{active: countTabs === i}"
                @click="countTabs = i"
                
                >{{ component.title }}
            </button>
        </div>
        <component :client="client" :is="componentArr[countTabs].comp"></component>

    </div>
</template>

<script>
    import MyInput from '../UI/MyInput.vue';
    import MyButton from '../UI/MyButton.vue';
    import TheDeposit from '@/components/Deposit/TheDeposit.vue';
    import TheBuySearch from '../Buy/TheBuySearch.vue';
    import ClientProfile from '@/components/Client/ClientProfile.vue'
    import ClientPokupka from '@/components/Client/ClientPokupka.vue'
    import ClientInformation from '@/components/Client/ClientInformation.vue'
    import { clientData, itemClick, clientsEditorTitles, countTabs } from '@/general/clients';

    export default{
        
        components: {
            MyInput, TheDeposit, MyButton,
            TheBuySearch, ClientProfile, ClientPokupka, ClientInformation
        },
        setup(){
            
            const componentArr = [
                {title: 'Данные клиента', comp: ClientProfile},
                {title: 'Залоги', comp: TheDeposit},
                {title: 'Скупка', comp: TheBuySearch},
                {title: 'Покупки', comp: ClientPokupka},
                {title: 'Информация', comp: ClientInformation}
            ]
            
            return{
                countTabs,
                clientData,

                componentArr,
                itemClick,
                clientsEditorTitles
            }
        }
    }
</script>

<style>
    .client{
        padding: 20px;
        background: #ffff;
    }
    .client-tabs{
        display: grid;
        width: max-content;
        grid-auto-flow: column;
        grid-gap: 10px;
        gap: 10px;
        align-items: center;
    }
    .client-tab{
        padding: 15px 10px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: center;
        grid-gap: 10px;
        gap: 10px;
        border-radius: 5px;
        border: 1px solid rgb(206 206 206/22%);
        /* width: max-content; */
        font-size: 11px;
        text-transform: uppercase;
        color: gray;
        transition: .2s;
        cursor: pointer;
    }
    .client-tab.active{
        background: #1495ba;
        color: #fff;
    }
    .client-content{
        margin-top: 20px;
    }
    /* .client-panel{
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
    } */
    /* .client-btns{
        display: flex;
        gap: 10px;
    } */
    /* .client-circle{
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
    } */
    /* .input.client-input{
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
    } */
    .buy-header{
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 20px;
    }
</style>