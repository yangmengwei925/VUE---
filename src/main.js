import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'
// import router from './krouter'
// import store from './kstore'
import store from './store'
import router from './router'

import '@/icons'
import './permission'
import vPermission from "./directives/permission";

Vue.directive("permission", vPermission);
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
// Vue.prototype.$create = create
Vue.use(create)

// 3.挂载router实例，why？
new Vue({
  // 挂载，目的是什么？让我们可以在插件中访问到Router实例
  router,

  store,
  render: h => h(App)
}).$mount('#app')
