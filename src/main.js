import Vue from 'vue'
import App from './App.vue'
import { Datetime } from 'vue-datetime'
import vueHeadful from 'vue-headful'
import 'vue-made-with-love'

import 'vue-datetime/dist/vue-datetime.css'
import './registerServiceWorker'
import './assets/scss/style.scss'
import 'vue-made-with-love/dist/vue-made-with-love.css'

Vue.component('vue-headful', vueHeadful)

Vue.config.productionTip = false

Vue.use(Datetime)

new Vue({
  render: h => h(App)
}).$mount('#app')
