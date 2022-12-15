import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

axios.defaults.baseURL = 'https://api-vu-dev.topresult.com.br/VitrineUrbana/'
axios.defaults.headers.common['debug'] = false
axios.defaults.headers.common['k'] = '63a9f0ea7bb98050796b649e85481845'
axios.defaults.headers.common['a'] = 'VUDEV'
axios.defaults.headers.common['u'] = '1'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
