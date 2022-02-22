// import columnar from "./columnar"
import echarts from 'echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import pie from "./components/pie.vue"

const components = [
  // columnar,
  pie
]

function install (Vue) {
  console.log('window', echarts, window)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // columnar,
  pie,
  install
}