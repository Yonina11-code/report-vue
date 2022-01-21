import 'echarts/lib/chart/bar' // 引入echartsbar组件
import { bar } from './main'  // 引入bar专有模块
import Core from '../common' // 引入公共模块

export default Object.assign({}, Core, {
  name: 'column',
  data () {
    this.chartHandler = bar
    return {}
  }
})
