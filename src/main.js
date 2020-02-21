import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import { Datetime } from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import './registerServiceWorker'
import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.use(VueMq)
Vue.use(Datetime)

new Vue({
  render: h => h(App)
}).$mount('#app')
