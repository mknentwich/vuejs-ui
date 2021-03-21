import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import "@fontsource/roboto/100.css" 
import "@fontsource/roboto/300.css" 
import "@fontsource/roboto/400.css" 
import "@fontsource/roboto/500.css" 
import "@fontsource/roboto/700.css" 
import "@fontsource/roboto/900.css" 

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueMeta)