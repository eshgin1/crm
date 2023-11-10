import {reactive} from 'vue'

const auth = reactive({
    user:null,
    role:'admin'
})

export {
    auth
}