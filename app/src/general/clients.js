import { computed, reactive, ref } from "vue";

let clientPersonData = reactive({
    newClientName: '',
    newClientPhone: '+7',
    surnameClient: '',
    phoneClient: ''
})

const clientData = ref([
    {name: 'иванов иван', phone: '+79999999', activeDeposit: 0, inactiveDeposit: 0, outTimeDeposit: 0, totalDeposit: 0, doverie: 0, action: '***'},
    {name: 'петров петр', phone: '+75555555', activeDeposit: 0, inactiveDeposit: 0, outTimeDeposit: 0, totalDeposit: 0, doverie: 0, action: '***'},
    {name: 'семенов семен', phone: '+76666666', activeDeposit: 0, inactiveDeposit: 0, outTimeDeposit: 0, totalDeposit: 0, doverie: 0, action: '***'},
])

const clientsEditorTitles = ['Посмотреть клиента', 'Посмотреть залоги', 'Посмотреть скупку', 'Добавить залог', 'Редактировать']


let itemClick = ref('')
let countTabs = ref(0)

const openComponent = (item) => {
    itemClick.value = item
    clientsEditorTitles.forEach((e, i) => {
        if(e === itemClick.value){
            countTabs.value = i
        }
    })
}


const addNewClient = () => {
    let newClientObj = {
        name: clientPersonData.newClientName,
        phone: clientPersonData.newClientPhone,
        activeDeposit: 0, 
        inactiveDeposit: 0, 
        outTimeDeposit: 0, 
        totalDeposit: 0, 
        doverie: 0, 
        action: '***'
    }
    clientData.value.push(newClientObj)

}

const sortClients = computed(() => {
    return clientData.value.filter(el => {
        if(el.name.indexOf(clientPersonData.surnameClient)> -1 && el.phone.indexOf(clientPersonData.phoneClient)> -1){
            return el
        } 
    })
    
})


export{
    clientData, 
    clientsEditorTitles,
    sortClients,

    addNewClient, 
    clientPersonData,

    openComponent,
    itemClick,
    countTabs
    
}