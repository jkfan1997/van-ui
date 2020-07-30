import Vue from 'vue'
import App from './App.vue'

import VanUI from '../packages'

Vue.config.productionTip = false
Vue.use(VanUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
