<template>
    <my-button
        class="aplicat-btn" 
        :class="{active: btns.activeBtnLombard}"
        @click="showListAplicatLombard">Ломбард</my-button>
    <my-button
        class="aplicat-btn"
        :class="{active: btns.activeBtnShop}"
        @click="showListAplicatShop">Магазин</my-button>

    <div class="table">
        <the-table-header>
            <div class="table-title">статус</div>
            <div class="table-title">дата</div>
            <div class="table-title">товаровед</div>
            <div class="table-title">откуда</div>
            <div class="table-title">телефон</div>
            <div class="table-title">имя</div>
            <div class="table-title">тип</div>
            <div class="table-title">товар</div>
            <div class="table-title">сумма</div>
            <div class="table-title">фото</div>
            <div class="table-title">действие</div>
        </the-table-header>
        <div class="table-list">
            <div v-if="btns.activeBtnShop">
                <div 
                    class="table-data"
                    v-for="(item, i) in applicatArrShop" :key="i">
                    
                    <div class="table-item">{{ item.status }}</div>
                    <div class="table-item">{{ item.time }}</div>
                    <div class="table-item">{{ item.employee }}</div>
                    <div class="table-item">{{ item.where }}</div>
                    <div class="table-item">{{ item.phone }}</div>
                    <div class="table-item">{{ item.name }}</div>
                    <div class="table-item">{{ item.type }}</div>
                    <div class="table-item">{{ item.sum }}</div>
                    <div class="table-item">{{ item.photo }}</div>
                    <div class="table-item">{{ item.action }}</div>
                    <MyButtonForAction @click="openEditor(i)"/>
                    <transition name="editor">
                        <my-editor-modal class="editor-wrapper-applicat" v-if="forPagination.currentAplicat === i + 1" >
                            <the-editor-item v-for="(item, i) in applicatEditorTitles" :key="i">
                                <img src="" alt="logo">
                                <div class="editor-title">{{ item }}</div>
                            </the-editor-item>
                            <div class="editor-close" @click="forPagination.currentAplicat = 0">X</div>
                        </my-editor-modal>
                    </transition>
                </div>
                <div class="pages">
                    <my-button v-if="forPagination.page > 1" @click="prevPage">Назад</my-button>
                        <div class="page">{{ forPagination.page }} из {{ totalPage }}</div>
                    <my-button @click="nextPage">Вперед</my-button>
                </div>
            </div>
            <div v-if="btns.activeBtnLombard">
                <div 
                    class="table-data"
                    v-for="(item, i) in applicatArrLombard" :key="i">

                    <div class="table-item">{{ item.status }}</div>
                    <div class="table-item">{{ item.time }}</div>
                    <div class="table-item">{{ item.employee }}</div>
                    <div class="table-item">{{ item.where }}</div>
                    <div class="table-item">{{ item.phone }}</div>
                    <div class="table-item">{{ item.name }}</div>
                    <div class="table-item">{{ item.type }}</div>
                    <div class="table-item">{{ item.sum }}</div>
                    <div class="table-item">{{ item.photo }}</div>
                    <div class="table-item">{{ item.action }}</div>
                    <MyButtonForAction @click="openEditor(i)"/>
                    <transition name="editor">
                        <my-editor-modal class="editor-wrapper-applicat" v-if="forPagination.currentAplicat === i + 1" >
                            <the-editor-item v-for="(item, i) in applicatEditorTitles" :key="i">
                                <img src="" alt="logo">
                                <div class="editor-title">{{ item }}</div>
                            </the-editor-item>
                            <div class="editor-close" @click="forPagination.currentAplicat = 0">X</div>
                        </my-editor-modal>
                    </transition>
                </div>
                <div class="pages">
                    <my-button v-if="forPagination.page > 1" @click="prevPage">Назад</my-button>
                        <div class="page">{{ forPagination.page }} из {{ totalPage }}</div>
                    <my-button @click="nextPage">Вперед</my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyButton from '@/components/UI/MyButton.vue';
    import TheTableHeader from '@/components/TheTableHeader.vue';
    import MyButtonForAction from '@/components/UI/MyButtonForAction.vue'
    import MyEditorModal from '@/components/UI/MyEditorModal.vue';
    import TheEditorItem from '@/components/TheEditorItem.vue'

    import {applicatArrLombard, forPagination, totalPage, openEditor, nextPage, prevPage, applicatEditorTitles, showListAplicatShop, showListAplicatLombard, btns, applicatArrShop} from '@/general/application'
    export default{
        components:{
            MyButton, TheTableHeader, MyButtonForAction, MyEditorModal, 
            TheEditorItem
        },
        setup(){

            return {
                applicatArrLombard,
                applicatArrShop,
                applicatEditorTitles,

                openEditor,
                nextPage,
                prevPage,

                showListAplicatShop,
                showListAplicatLombard,
                btns, 
                forPagination,
                totalPage,
            }
        }
        
    }
</script>

<style scoped>
    .table{
        margin-top: 20px;
    }
    .table-data{
        padding: 20px;
        display: grid;
        grid-template-columns: 70px 80px 80px 100px 100px repeat(2,120px) 1fr repeat(3,80px);
        align-items:center;
        gap: 15px;
    }
    .aplicat-btn{
        background: #b4b3b3;
    }
    .active{
        background: #1495ba;
    }
    .btn-white{
        background: #ffff;
    }
    
    .editor-title{
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .editor-wrapper-applicat{
        grid-template-columns: repeat(7, 1fr);
    }
    .editor-close{
        cursor: pointer;
    }
    .editor-enter-active,
    .editor-leave-active{
        transition: all 0.5s ease;
    }
    .editor-enter-from,
    .editor-leave-to {
        transform: translateX(5%);
        opacity: 0;
    }
    .pages{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;
    }
    .page{
        font-size: 20px;
    }
</style>