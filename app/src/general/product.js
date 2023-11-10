import { computed, reactive, ref } from "vue"

let productName = ref('')


const filterParametrValue = reactive({
    select: 'Выбрать',
    statets: [],
    statuts: [],
    locations: []
})

const dataForInputsNewProduct = reactive({
    status: '',
    location:'',
    state: '',
    title: '',
    price: '',
    category: '',
    zakupka: '',
    descr: '',
    deffect: ''
})



let save = ref(false)
const startTime = ref(new Date().toLocaleDateString('en-US'))
const showAddProductComponent = ref(false)


const productCategoryArr = ['телефоны','украшения','бытовая техника','телевизоры', 'строительные материалы']

const productArr = ref([
    {title: 'iphone 10', status: 'новый', category: 'телефоны', location: 'Березовая', price: 2000, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'браслет', status: 'распродажа', category: 'украшения', location: 'Военная', price: 3000, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'микроволновка', status: 'бронь', category: 'бытовая техника', location: 'Военная', price: 1500, img: '', state: 'Б/У', zakupka: '', deffect: ''},
    {title: 'samsung', status: 'распродажа', category: 'телевизоры', location: 'Березовая', price: 8000, img: '', state: 'Б/У', zakupka: '', deffect: ''},
    {title: 'перфоратор', status: 'новый', category: 'строительные материалы', location: 'Пальмиро Тольяти', price: 4000, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'велосипед', status: 'распродажа', category: 'спортивные товары', location: 'Пальмиро Тольяти', price: 500, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'LG', status: 'новый', category: 'телевизоры', location: 'Березовая', price: 3200, img: '', state: 'Б/У', zakupka: '', deffect: ''},
    {title: 'redmi 11', status: 'бронь', category: 'телефоны', location: 'Пальмиро Тольяти', price: 1800, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'цепочка', status: 'новый', category: 'украшения', location: 'Березовая', price: 1000, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'кольцо', status: 'бронь', category: 'украшения', location: 'Березовая', price: 4400, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'инстурументы', status: 'новый', category: 'строительные материалы', location: 'Военная', price: 2200, img: '', state: 'Новая', zakupka: '', deffect: ''},
    {title: 'болгарка', status: 'бронь', category: 'строительные материалы', location: 'Пальмиро Тольяти', price: 3000, img: '', state: 'Б/У', zakupka: '', deffect: ''},
    {title: 'sony', status: 'новый', category: 'телевизоры', location: 'Пальмиро Тольяти', price: 4000, img: '', state: 'Б/У', zakupka: '', deffect: ''},
    {title: 'стиральная машина', status: 'бронь', category: 'бытовая техника', location: 'Военная', price: 2500, img: '', state: 'Новая', zakupka: '', deffect: ''},
])


const clearFilter = () => {
    filterParametrValue.locations = []
    filterParametrValue.statuts = []
    filterParametrValue.statets = []
    filterParametrValue.select = 'Выбрать'
}

const saveNewProduct = () => {
    let obj = {
        title: dataForInputsNewProduct.title,
        status: dataForInputsNewProduct.status,
        category: dataForInputsNewProduct.category,
        location: dataForInputsNewProduct.location,
        price: dataForInputsNewProduct.price,
        img: '',
        state: dataForInputsNewProduct.state,
        zakupka: dataForInputsNewProduct.zakupka,
        deffect: dataForInputsNewProduct.deffect,
    }

    productArr.value.push(obj)
    showAddProductComponent.value = false
    dataForInputsNewProduct.title = ''
    dataForInputsNewProduct.status = ''
    dataForInputsNewProduct.price = ''
    dataForInputsNewProduct.state = ''
    dataForInputsNewProduct.category = ''
    dataForInputsNewProduct.zakupka = ''
    dataForInputsNewProduct.location = ''
    dataForInputsNewProduct.descr = ''
}

const closeNewProduct = () => {
    showAddProductComponent.value = false

    dataForInputsNewProduct.title = ''
    dataForInputsNewProduct.status = ''
    dataForInputsNewProduct.price = ''
    dataForInputsNewProduct.state = ''
    dataForInputsNewProduct.category = ''
    dataForInputsNewProduct.zakupka = ''
    dataForInputsNewProduct.location = ''
    dataForInputsNewProduct.descr = ''
}

const filterArr = computed(() => {
    let data = []

    if(filterParametrValue.statets.length){
        data = productArr.value.filter(el => {
            if(filterParametrValue.statets.indexOf(el.state) != -1){
                if(el.title.indexOf(productName.value) > -1){
                    return el
                }
            }
        })
        
    }else{
        data = productArr.value.filter(el => el.title.indexOf(productName.value) > -1)
    }

    if(filterParametrValue.statuts.length){
        data = data.filter(el => {
            if(filterParametrValue.statuts.indexOf(el.status) != -1){
                if(el.title.indexOf(productName.value) > -1){
                    return el
                }
            }
        })
    }

    if(filterParametrValue.locations.length){
        data = data.filter(el => {
            if(filterParametrValue.locations.indexOf(el.location) != -1){
                if(el.title.indexOf(productName.value) > -1){
                    return el
                }
            }
        })
    }

    if(filterParametrValue.select){
        data = data.filter(el => {
            if(filterParametrValue.select === 'Выбрать') return el
            if(filterParametrValue.select.indexOf(el.category) != -1){
                return el
            }
            
        })
    }
    
    return data

})

export{
    filterArr,
    productArr,
    productCategoryArr,
    showAddProductComponent,
    filterParametrValue,
    dataForInputsNewProduct,
    productName,
    startTime,
    save,
    
    clearFilter,
    saveNewProduct,
    closeNewProduct,
    
}