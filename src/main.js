import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import {ValidationProvider} from 'vee-validate'
import {ValidationObserver} from 'vee-validate'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
import VueSwal from 'vue-swal'

const datepickerOptions = {}

Vue.use(BootstrapVue)
Vue.use(VueSwal)
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://10.120.73.120:3000/';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
