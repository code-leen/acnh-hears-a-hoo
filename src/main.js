import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bugs from './bug-data.js'
import fish from './fish-data.js'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let data = {
  bugData: bugs,
  fishData: fish,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
