import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { createHead } from '@unhead/vue/client'

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const app = createApp(App);
const head = createHead();

app.use(vuetify);
app.use(router);
app.use(store);
app.use(head)

app.mount('#app');