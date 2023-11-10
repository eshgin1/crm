import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// const {MongoClient} = require('mongodb')
// console.log(MongoClient)
// import { MongoClient } from 'mongodb'
// const client = new MongoClient
// console.log(client)

createApp(App).use(router).mount('#app')
