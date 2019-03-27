import Vue from 'vue'
import AppComponent from './App.vue'
import VueQrcodeReader from "vue-qrcode-reader"
import VueQrcode from '@chenfengyuan/vue-qrcode'



import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = require('jquery')

Vue.use(VueQrcodeReader);
Vue.component(VueQrcode.name, VueQrcode);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(AppComponent),
}).$mount('#app')
