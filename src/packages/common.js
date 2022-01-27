// 使用render函数渲染：
/**
 * 官方解释：
 * 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。
 * 该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode
 */
import echartsLib from 'echarts/lib/echarts'
import dataEmpty from '@/components/data-empty'
import loading from '@/components/loading'
import { debounce, getType, isArray, isObject } from 'utils-lite'
import { STATIC_PROPS, DEFAULT_THEME, DEFAULT_COLORS, ECHARTS_SETTINGS } from './constants'
import numerify from 'numerify'
import setAnimation from './modules/animation'
import setMark from './modules/mark'
import setExtend from './modules/extend'

export default {
  _numerify: numerify,
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
  watch: {
    data: {
      handler (v) {
        if (v) {
          this.changeHandler()
        }
      },
      deep: true
    },
    settings: {
      deep: true,
      handler (v) {
        if (v.type && this.echartsLib) this.chartHandler = this.echartsLib[v.type]
        this.changeHandler()
      }
    },
    width: 'nextTickResize',
    height: 'nextTickResize',
    events: {
      handler: 'createEventProxy',
      deep: true
    },
    theme: {
      handler: 'themeChange',
      deep: true
    },
    themeName: 'themeChange',
    resizeable: 'resizeableHandler'
  },
  computed: {
    canvasStyle () {
      return {
        width: this.width,
        height: this.height,
        position: 'relative'
      }
    },
    chartColor () {
      return this.colors || (this.theme && this.theme.color) || DEFAULT_COLORS
    }
  },
  created () {
    // TODO
    this.echarts = null
    this.registeredEvents = [] // 注册事件集合
    this._once = {}
    this._store = {}
    this.resizeHandler = debounce(this.resize, this.resizeDelay) // 重置页面操作
    this.changeHandler = debounce(this.dataHandler, this.changeDelay) // 数据改变时的操作
    this.addWatchToProps() // 将props添加watch
  },
  mounted () {
    this.init() // dom加载完成，初始化
  },
  beforeDestroy () {
    this.clean() // 将要离开页面时，销毁页面的监听事件
  },
  methods: {
    dataHandler () {
      if (!this.chartHandler) return
      let data = this.data
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        echarts: this.echarts,
        color: this.chartColor,
        tooltipFormatter: this.tooltipFormatter,
        _once: this._once
      }
      if (this.beforeConfig) data = this.beforeConfig(data)
      let options = this.chartHandler(columns, rows, this.settings, extra)
      if (options) {
        if (typeof options.then === 'function') {
          options.then(this.optionsHandler)
        } else {
          this.optionsHandler(options)
        }
      }
    },
    optionsHandler (options) {
      // legend图例，展现了不同系列的标记、颜色和名字
      if (this.legendPosition && options.legend) {
        options.legend[this.legendPosition] = 10
        if (~['left', 'right'].indexOf(this.legendPosition)) {
          options.legend.top = 'middle'
          options.legend.orient = 'vertical'
        }
      }
      // 主题色
      options.color = this.chartColor
      //
      ECHARTS_SETTINGS.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      // animation
      if (this.animation) setAnimation(options, this.animation)
      // marks: 标记点
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = options.series
        if (isArray(series)) {
          series.forEach(item => { setMark(item, marks)})
        } else if (isObject(series)) {
          setMark(series, marks)
        }
      }
      if (this.extend) setExtend(options, this.extend)
    },
    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        // ~按位非：对数值取反并减1
        if (!~watchedVariable.indexOf(prop) && !~STATIC_PROPS.indexOf(prop)) {
          const opts = {}
          if (~['[object Object]', '[object Array]'].indexOf(getType(this.$props[prop]))) {
            opts.deep = true
          }
          this.$watch(prop, () => {
            this.changeHandler()
          }, opts)
        }
      })
    },
    init () {
      if (this.echarts) return
      const themeName = this.themeName || this.theme || DEFAULT_THEME
      this.echarts = echartsLib.init(this.$refs.canvas, themeName, this.initOptions)
      if (this.data) this.changeHandler()
      this.createEventProxy() // 调用事件代理
      if (this.resizeable) this.addResizeListener()
    },
    createEventProxy () {
      // 只要用户使用on方法绑定的时间都做一层代理
      // 是否真正执行相应的事件方法取决于该方法是否仍然存在events中
      // 实现events的动态响应
      const self = this
      const keys = Object.keys(this.events || {})
      keys.length && keys.forEach(ev => {
        if (this.registeredEvents.indexOf(ev) === -1) {
          this.registeredEvents.push(ev)
          this.echarts.on(ev, (function (ev) {
            return function (...args) {
              if (ev in self.events) {
                self.events[ev].apply(null, args)
              }
            }
          })(ev))
        }
      })
    },
    addResizeListener () {
      // 页面重置时，重置图表
      window.addEventListener('resize', this.resizeHandler)
      this._once.onresize = true
    },
    clean () {
      if (this.resizeable) this.removeResizeListener()
      this.echarts.dispose()
    },
    removeResizeListener () {
      window.removeEventListener('resize', this.resizeHandler)
      this._once.onresize = false
    },
    //
    nextTickResize () {
      // 等待页面更新完成重置
      this.$nextTick(this.resize)
    },
    // 更改主题
    themeChange (theme) {
      this.clean()
      this.echarts = null
      this.init()
    }
  }
}