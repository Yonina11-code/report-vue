
import defaultOptions from './default.js'
export default {
  props: {
    options: Object,
    id: {
      type: [String, Number],
      default: 0
    },
    data: [Array, Object]
  },
  data: () => {
    return {
      formatOptions: {}
    }
  },
  mounted () {
    this.formatOptionsFunc() // 格式化数据
    this.draw()
  },
  methods: {
    formatOptionsFunc () {
      // 将options中的属性拆解出来，与defaulOptions中的值进行合并
      let totalOptions = { ...defaultOptions, ...this.options }
      Object.keys(totalOptions).forEach(key => {
        console.log('key', key, totalOptions[key] instanceof Array)
        if (totalOptions[key] instanceof Object) {
          this.formatOptions[key] = { ...defaultOptions[key], ...this.options[key] }
        } else if (totalOptions[key] instanceof Array) {
          let tempArray = []
          totalOptions[key].forEach((items, index) => {
            tempArray.push({ ...defaultOptions[key][0], ...this.options[key][index]})
          })
          this.formatOptions[key] = tempArray
        } else {
          this.formatOptions[key] = this.options[key] || defaultOptions[key]
        }
      })
      this.formatOptions.dataset = this.data
      console.log('this.formatOptions', this.formatOptions)
    }
  }
}