// import columnar from "./columnar"
import echarts from 'echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import pie from "./components/pie.vue"
import line from './components/line.vue'
import bar from './components/bar.vue'
import scatter from './components/scatter.vue'
import map from './components/map.vue'
import autoCharts from './components/auto-chart.vue'

const components = [
  // columnar,
  pie,
  line,
  bar,
  scatter,
  map,
  autoCharts
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
  line,
  bar,
  install
}