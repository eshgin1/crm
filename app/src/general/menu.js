import { computed } from 'vue'
import { auth } from '@/logics/user/store'

const menu = [
    {path: 'scan', name: 'Сканировать QR код', svg: '/icons/scan.svg',role:['admin']},
    {path: 'application', name: 'Заявки', svg: '/icons/application.svg',role:['admin','manager']},
    {path: 'clients', name: 'Клиенты', svg: '/icons/clients.svg',role:['admin']},
    {path: 'deposit', name: 'Залоги', svg: 'icons/deposit.svg',role:['admin']},
    {path: 'buy', name: 'Скупка', svg: '/icons/buy.svg',role:['admin']},
    {path: 'product', name: 'Товары', svg: 'icons/product.svg',role:['admin']},
    {path: 'message', name: 'Сообщение от клиентов', svg: 'icons/message.svg',role:['admin']},
    {path: 'statistics', name: 'Статистика', svg:'icons/statistics.svg',role:['admin']},
    {path: 'rassilka', name: 'Рассылки', svg: '/icons/rassilki.svg',role:['admin']},
    {path: 'archive', name: 'Архив заявок', svg: '/icons/archive.svg',role:['admin']},
    {path: 'task', name: 'Задачи', svg: '/icons/task.svg',role:['admin']},
    {path: 'setting', name: 'Настройки', svg: '/icons/setting.svg',role:['admin']},
    {path: 'exit', name: 'Выход', svg: '/icons/exit.svg',role:['admin']}
]

const menuuser = computed(() => {
    return menu.filter(x => {
        return x.role.indexOf(auth.role) !== -1
    })
})


export { menuuser };