import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
