import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import element from 'element-ui'
// import qdInput from "qd-plugins"
// import qdPlugins from "./packages"
Vue.config.productionTip = false
// Vue.use( qdInput)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')