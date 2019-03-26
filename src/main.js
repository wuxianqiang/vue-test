import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import config from './store'

Vue.use(Vuex)
let store = new Vuex.Store(config)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
