// 使用render函数渲染：
/**
 * 官方解释：
 * 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。
 * 该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode
 */
import dataEmpty from '@/components/data-empty'
import loading from '@/components/loading'
export default {
  render (h) {
    return h('div', {

    }, [
      h(dataEmpty, {
        style: { display: this.dataEmpty ? '' : 'none' }
      }),
      h(loading, {
        style: { display: this.loading ? '' : 'none' }
      }),
      this.$slots.default
    ])
  },
  props: {
    // 初始数据
    data: { type: [Object, Array],default () { return {} } },
    // 额外的配置项
    settings: { type: Object, default () { return {} } },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '200px' },
    beforeConfig: { type: Function }, // 前置配置
    afterConfig: { type: Function }, // ?
    afterSetOption: { type: Function }, // ?
    afterSetOptionOnce: { type: Function }, // ?
    events: { type: Object }, // 事件
    grid: { type: [Object, Array] }, //
    colors: { type: Array },
    tooltipVisible: { type: Boolean, default: true}, // ?
    legendVisible: { type: Boolean, default: true }, //
    legendPosition: { type: String },
    markLine: { type: Object },
    markArea: { type: Object },
    markPoint: { type: Object},
    visualMap: { type: [Object, Array]},
    dataZoom: { type: [Object, Array]},
    toolbox: { type: [Object, Array]},
    initOptions: { type: Object, default () { return {} } }, // 初始配置
    title: [Object, Array], // 组件标题
    legend: [Object, Array],
    xAxis: [Object, Array], // x轴
    yAxis: [Object, Array],
    radar: Object,
    tooltip: Object,
    axisPointer: [Object, Array],
    brush: [Object, Array],
    geo: [Object, Array],
    timeline: [Object, Array],
    graphic: [Object, Array],
    series: [Object, Array],
    backgroundColor: [Object, Array], // 背景色
    textStyle: [Object, Array], // 文字风格
    animation: Object, // 旋转角度
    theme: Object, //
    themeName: String, // 主题名字
    loading: Boolean, // 是否显示加载
    dataEmpty: Boolean, // 文字为空时是否显示'无数据'
    extend: Object,
    judgeWidth: { type: Boolean, default: false }, // ?
    widthChangeDelay: { type: Number, default: 300 },
    tooltipFormatter: { type: Function },
    resizeable: { type: Boolean, default: true }, // 是否可重置
    resizeDelay: { type: Number, default: 200 }, // 重置的延迟时间
    changeDelay: { type: Number, default: 0}, //
    setOptionOpts: { type: [Boolean, Object], default: true },
    cancelResizeCheck: Boolean,
    notSetUnchange: Array,
    log: Boolean
  },
  created () {
    // TODO
    this.echarts = null
  }
}