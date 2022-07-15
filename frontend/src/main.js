import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createStore } from 'vuex'
const store = createStore({})


createApp(App).use(store).mount('#app')
