import { computed, reactive, ref } from "vue";

const applicatEditorTitles = ['Взять на заметку', 'Одобрить', 'Оформить', 'Отказать', 'Не отвечает', 'Отказал']

const applicatDataLombard = [
    {status: 'новая', time: '01.01.01', employee: 'alex', where: 'site', phone: '+79999999999', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'aaaaa', where: 'site', phone: '+79999999999', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'bbbb', where: 'site', phone: '+79999999999', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'cccc', where: 'site', phone: '+79999999999', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'dddd', where: 'site', phone: '+79999999999', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'aleffffx', where: 'site', phone: '+79999999999', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'alegggggx', where: 'site', phone: '+79999999999', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'wwwwww', where: 'site', phone: '+79999999999', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'qqqqq', where: 'site', phone: '+79999999999', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'eeee', where: 'site', phone: '+79999999999', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'tttt', where: 'site', phone: '+79999999999', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'aaaaa', where: 'site', phone: '+79999999999', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},

]

const applicatDataShop = [
    {status: 'новая', time: '01.01.01', employee: 'alex', where: 'site', phone: '+79999999999', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'aaaaa', where: 'site', phone: '+8888888', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'bbbb', where: 'site', phone: '+666666', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'cccc', where: 'site', phone: '+5555555', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'dddd', where: 'site', phone: '+4444444', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'aleffffx', where: 'site', phone: '+333333', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'alegggggx', where: 'site', phone: '+222222', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'wwwwww', where: 'site', phone: '+1111111', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'qqqqq', where: 'site', phone: '+00000000', name: 'андрей', type: 'оценка', product: 'телефон', sum: '10000', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'eeee', where: 'site', phone: '+222222', name: 'дима', type: 'скупка', product: 'ноут', sum: '5555', photo: 'без фото'},
    {status: 'новая', time: '01.01.01', employee: 'tttt', where: 'site', phone: '+4444444', name: 'сергей', type: 'оценка', product: 'велосипед', sum: '7000', photo: 'без фото'},
    {status: 'на оценке', time: '01.01.01', employee: 'aaaaa', where: 'site', phone: '+111111', name: 'татьяна', type: 'скупка', product: 'кольцо', sum: '3000', photo: 'без фото'},
]

const forPagination = reactive({
    currentAplicat: 0,
    page: 1,
    limit: 4
})


let totalPage = ref(applicatDataLombard.length / forPagination.limit)

// tabs
const btns = reactive({
    activeBtnLombard: true,
    activeBtnShop: false
})

const showListAplicatLombard = () => {
    btns.activeBtnLombard = true
    btns.activeBtnShop = false
}
const showListAplicatShop = () => {
    btns.activeBtnLombard = false
    btns.activeBtnShop = true
}

// editor
const openEditor = (i) => {
    forPagination.currentAplicat = i + 1
}

// page
const nextPage = () => {
    if(forPagination.page < totalPage.value){
        forPagination.page++
    }
}

const prevPage = () => {
    if(forPagination.page > 1){
        forPagination.page--
    }
}

const applicatArrLombard = computed(() => {
    return applicatDataLombard.slice((forPagination.page - 1) * forPagination.limit, forPagination.page * forPagination.limit)
})

const applicatArrShop = computed(() => {
    return applicatDataShop.slice((forPagination.page - 1) * forPagination.limit, forPagination.page * forPagination.limit)
})



export{
    applicatArrLombard,
    applicatArrShop,
    applicatEditorTitles,

    forPagination,
    totalPage, 
    btns,

    openEditor, 
    nextPage, 
    prevPage,
    showListAplicatShop,
    showListAplicatLombard
}