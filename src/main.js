import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import './assets/tailwind.css';


const app = createApp(App);
app.component('Icon', Icon);
app.mount('#app')
