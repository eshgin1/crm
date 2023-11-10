<template>
    <div class="rassilka">
        <div class="search-block">
            <div class="search-title">Рассылка всем клиентам</div>
            <div class="search-panel">
                <div class="search-item">
                    <div class="search-subtitle">Поиск по телефону</div>
                    <my-input v-model="searchPhone"/>
                </div>
                <div class="search-item">
                    <div class="search-subtitle">Текст сообщения</div>
                    <my-input v-model="text"/>
                </div>
                <div class="search-item">
                    <div class="search-subtitle">Способ отправки</div>
                    <div class="search-btns">
                        <my-button @click="sendMessage">отправить смс</my-button>
                        <my-button>отправить push</my-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="rassilka-phones">
            <div class="rassilka-block" v-for="(client, i) in sortArr" :key="i">
                <div class="rassilka-phone">{{ client.phone }}</div>
                <div class="rassilka-checkbox">
                    <input type="checkbox" v-model="checked" :value="client.phone">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from 'vue';

    import MyInput from '@/components/UI/MyInput.vue';
    import MyButton from '@/components/UI/MyButton.vue';
    import { clientData } from '@/general/clients';
    
    export default{
        components:{
            MyInput, MyButton
        },
        data(){
            const checked = ref([])
            const searchPhone = ref('+7')
            const text = ref('')

            const sendMessage = () => {
                if(checked.value){
                    checked.value.forEach(e => {
                        console.log('сообщение: ' + text.value +  ' отправленно на номера :' + e)
                    })
                }
                text.value = ''
                checked.value = []
            }

            const sortArr = computed(() => {
                return clientData.value.filter(e => {
                    if(e.phone.indexOf(searchPhone.value) != -1){
                        return e
                    }
                })
            })
            
            return{
                searchPhone,
                text,
                checked,

                sortArr,

                sendMessage
            }
        }
    }
</script>

<style scoped>
    .search-block{
        padding: 10px 20px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 4px 24px 0 rgb(34 41 47/10%)
    }
    .search-panel{
        margin-top: 10px;
        display: grid;
        grid-template-columns: 260px repeat(2,1fr);
        grid-gap: 20px;
        gap: 20px;
    }
    .search-item{
        display: grid;
    }
    .rassilka-phones{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
    .rassilka-block{
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        background: #fff;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 10px;
        gap: 10px;
        align-items: center;
    }
</style>