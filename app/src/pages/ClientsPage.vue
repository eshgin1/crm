<template>
    <div class="clients">
        <div class="item filter">
            <div class="filter-title">Фильтры</div>
            <div class="filter-wrapper">
                <div class="filter-block">
                    <div class="surname">Фамилия</div>
                    <my-input
                    placeholder="Напишите фамилию"
                    v-model="clientPersonData.surnameClient"     
                    />
                </div>
                <div class="filter-block">
                    <div class="phone">Номер телефона</div>
                    <my-input 
                        type="text" 
                        class="input" 
                        v-model="clientPersonData.phoneClient"/>
                </div>
                <div class="filter-block">
                    <div class="passport">Паспорт</div>
                    <my-input type="text" class="input" placeholder="серия номер"/>
                </div>
            </div>
        </div>
        <div class="item btn">
            <my-button @click="openModal">Добавить клиента</my-button>
        </div>

        <transition name="modal">
            <my-modal v-show="viewModal">
                <div class="new-client-wrapper">
                    <div class="new-client-title">Новый клиент</div>
                    <div class="new-client-block">
                        <div class="new-client-info">Фамилия Имя</div>
                        <my-input 
                            class="new-client-input" 
                            type="text"
                            v-model="clientPersonData.newClientName"
                            />
                    </div>
                    <div class="new-client-block">
                        <div class="new-client-info">Номер телефона</div>
                        <my-input 
                            class="new-client-input"
                            type="tel"
                            v-model="clientPersonData.newClientPhone"
                            />
                    </div>
                    <div class="new-client-btns">
                        <my-button @click="addNewClient">Добавить</my-button>
                        <my-button @click="closeModal" class="btn-red">Отмена</my-button>
                    </div>
                </div>
            </my-modal>
        </transition>

        <div class="item table">
            <the-table-header class="table-header-small">
                <div class="table-title">клиент</div>
                <div class="table-title">телефон</div>
                <div class="table-title">активных залогов</div>
                <div class="table-title">выкупленных залогов</div>
                <div class="table-title">просроченных залогов</div>
                <div class="table-title">всего залогов</div>
                <div class="table-title">доверие</div>
                <div class="table-title">действие</div>
            </the-table-header>
            <div class="table-list">
                <div class="table-person"
                    v-for="(person, i) in sortClients"
                    :key="person.name"
                    
                    >
                        <div class="table-name">{{ person.name }}</div>
                        <div class="table-phone">{{ person.phone }}</div>
                        <div class="table-active">{{ person.activeDeposit }}</div>
                        <div class="table-inactive">{{ person.inactiveDeposit }}</div>
                        <div class="table-outtime">{{ person.outTimeDeposit }}</div>
                        <div class="table-total">{{ person.totalDeposit }}</div>
                        <div class="table-doverie">{{ person.doverie + '%' }}</div>
                        <MyButtonForAction @click="openEditor(i)"/>
                        <transition name="editor">
                            <my-editor-modal v-if="currentPerson === i + 1">
                                <router-link 
                                    class="editor-item" 
                                    :to="`/clients/${person.name}`"
                                    v-for="(item, i) in clientsEditorTitles" 
                                    :key="i"
                                    @click="openComponent(item)"
                                    >  
                                    <img src="" alt="logo">
                                    <div class="editor-title">{{ item }}</div>
                                </router-link>
                                <div class="editor-close" @click="currentPerson = 0">X</div> 
                            </my-editor-modal>
                        </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyButton from '../components/UI/MyButton.vue'
    import MyInput from '../components/UI/MyInput.vue'
    import MyModal from '../components/UI/MyModal'
    import TheTableHeader from '@/components/TheTableHeader.vue'
    import MyButtonForAction from '@/components/UI/MyButtonForAction.vue'
    import MyEditorModal from '@/components/UI/MyEditorModal.vue'

    import { clientData, addNewClient, clientPersonData,sortClients, clientsEditorTitles,openComponent } from '@/general/clients'
    import {ref} from 'vue'
    export default{
        components:{
            MyButton, MyInput, MyModal, TheTableHeader, MyButtonForAction, MyEditorModal
        },
        setup(){
            // modal window
            const viewModal = ref(false)
            let currentPerson = ref(0)

            const openModal = () => {
                viewModal.value = true
            }
            const closeModal = () => {
                viewModal.value = false
            }

            const openEditor = (i) => {
                currentPerson.value = i + 1
            }

            return{
                viewModal,
                openModal,
                closeModal,
                openEditor,
                clientPersonData,

                currentPerson,
                clientData,
                addNewClient,

                sortClients,

                clientsEditorTitles,

                openComponent
            }
        }
        
    }
</script>

<style scoped>
    .item{
        padding: 10px;
        background: #fff;
        box-shadow: 0 4px 24px 0 rgb(34 41 47/10%);
    }
    .filter-title{
        font-size: 20px;
    }
    .filter-wrapper{
        margin-top: 10px;
        display: grid;
        grid-auto-flow: column;
        gap: 40px;
    }
    .filter-block{
        display: flex;
        flex-direction: column;
    }

    .btn{
        display: flex;
        justify-content: right;
        margin-top: 20px;
    }
    .btn-red{
        background: rgb(181, 12, 12);
    }

    .table{
        padding: 0;
    }
    .table-header-small{
        grid-template-columns: 160px 167px repeat(5,113px) 1fr;
    }

    .table-person{
        padding: 20px;
        display: grid;
        grid-template-columns: 160px 167px repeat(5,113px) 1fr;
        align-items: center;
        gap: 15px;
    }

    .new-client-wrapper{
        display: grid;
        align-items: center;
        justify-items: center;
        background: #fff;
        padding: 50px;
        grid-gap: 20px;
        gap: 20px;
        border-radius: 5px;
    }
    .modal-enter-active,
    .modal-leave-active{
        transition: opacity 0.5s ease;
    }
    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
    }

    .editor-title{
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .editor-item{
        display: flex;
    }
    .editor-close{
        cursor: pointer;
    }
    .editor-enter-active,
    .editor-leave-active{
        /* left: 50%; */
        transition: all 0.5s ease;
    }
    .editor-enter-from,
    .editor-leave-to {
        transform: translateX(5%);
        opacity: 0;
    }

</style>
