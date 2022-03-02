
import defaultOptions from './default.js'
export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    id: {
      type: [String, Number],
      default: 0
    },
    data: {
      type:  [Array, Object],
      default: () => []
    }
  },
  data: () => {
    return {
      formatOptions: {},
      myChart: null
    }
  },
  watch: {
    data: {
      handler (val, old) { // 数据更新，相应的视图也要更新
        this.formatOptions = {}
        this.myChart && this.myChart.dispose()
        this.formatOptionsFunc() // 格式化数据
        this.draw()
      },
      deep: true
    },
    options: {
      handler (val, old) {
        this.formatOptions = {}
        this.myChart && this.myChart.dispose()
        this.formatOptionsFunc() // 格式化数据
        this.draw()
      },
      deep: true
    }
  },
  mounted () {
    this.formatOptionsFunc() // 格式化数据
    this.draw()
  },
  methods: {
    formatOptionsFunc () {
      if (!Object.keys(this.data).length) return
      // 将options中的属性拆解出来，与defaulOptions中的值进行合并
      let totalOptions = { ...defaultOptions, ...this.exDefault, ...this.options }
      this.formatOptions.dataset = this.data
      Object.keys(totalOptions).forEach(key => {
        if (totalOptions[key] instanceof Array) { // 合并数组配置项
          let tempArray = []
          totalOptions[key].forEach((items, index) => {
            tempArray.push(Object.assign({}, defaultOptions[key] && defaultOptions[key][0], this.exDefault[key] && this.exDefault[key][0], this.options && this.options[key] && this.options[key][index]))
          })
          this.formatOptions[key] = tempArray
        } else if (totalOptions[key] instanceof Object) { // 合并对象配置项
          console.log('', this.options)
          // 此处使用扩展运算符会出错，例：obj === undefined, ...obj[key]---error
          this.formatOptions[key] = Object.assign({}, defaultOptions && defaultOptions[key], this.exDefault && this.exDefault[key], this.options && this.options[key])
        } else {
          this.formatOptions[key] = this.options && this.options[key] || this.exDefault && this.exDefault[key] || defaultOptions && defaultOptions[key]
        }
      })
      console.log('this.formatOptions', this.formatOptions)
      // 如果没有配置series
      if (!this.options || !this.options.series) {
        // 返回的数据是多行多列的，若有xy轴则要对应的生成多个系列
        const { xAxis, yAxis, dataset } = this.formatOptions
        if (xAxis && yAxis ) {
          if (!dataset) return
          if (!dataset.dimensions && xAxis.type === 'category') { // 数据格式为[[]]
            // 以x轴为类目，则系列个数是总列数-1
            for (let i = 2; i < dataset.source && dataset.source[0].length; i++) { // 原先有一个默认
              this.formatOptions.series.push({ ...this.exDefault.series[0]})
            }
          } else {
            for (let i = 2; i < dataset.dimensions.length; i++) {
              this.formatOptions.series.push({ ...this.exDefault.series[0]})
            }
          }
        } else {
          // 合并series
          this.options && this.options.series && this.options.series.forEach((item, index) => {
            this.formatOptions.series.push({ ...this.exDefault.series[0]})
          })
          if (!this.formatOptions.series) {
            this.formatOptions.series = this.series
          }
        }
      }
    },
    draw () {
      this.myChart = this.$echarts.init(this.$refs[`${this.exDefault.series[0].type}${this.id}`], null, {
        width: this.formatOptions.width,
        height: this.formatOptions.height,
      })
      console.log('draw', this.formatOptions)
      this.myChart.setOption(this.formatOptions)
    }
  }
}