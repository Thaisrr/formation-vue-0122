import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/index'
import store from "./store/index";

const app = createApp(App);
app.use(routers); // Pour lui passer les plugins
app.use(store);

// A la fin
app.mount('#app');
