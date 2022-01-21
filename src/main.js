import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import '@/style/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
// import reports from './components/index'
// Vue.use(reports)
new Vue({
  render: h => h(App),
}).$mount('#app')
