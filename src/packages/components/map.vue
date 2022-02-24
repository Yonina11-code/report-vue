<template>
  <div :ref="'map'+id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
const china = require('../const/china.json')
export default {
  name: 'y-map',
  mixins: [mixins],
  data() {
    return {
      exDefault: {
        height: 600,
        width: 600,
        series: [
          {
            type: 'map',
            map: 'china',
          }
        ]
        }
    }
  },
  created () {
    this.$echarts.registerMap('china', china)
  },
  methods: {
    formatOptionsFunc () {
      const mapData = this.data[this.options.mapData]
      let scatterData = this.data[this.options.scatterData]
      let totalOptions = { ...this.exDefault, ...this.options }
      this.formatOptions.dataset = this.formatData(scatterData)
      Object.keys(totalOptions).forEach(key => {
        if (totalOptions[key] instanceof Array) { // 合并数组配置项
          let tempArray = []
          totalOptions[key].forEach((items, index) => {
            tempArray.push(Object.assign({},  this.exDefault[key] && this.exDefault[key][0], this.options[key] && this.options[key][index]))
          })
          this.formatOptions[key] = tempArray
        } else if (totalOptions[key] instanceof Object) { // 合并对象配置项
          this.formatOptions[key] = { ...this.exDefault[key], ...this.options[key] }
        } else {
          this.formatOptions[key] = this.options[key] || this.exDefault[key]
        }
      })
      console.log('this.formatOptions', this.formatOptions)
    },
    formatData (data) {
      let res = []
      let mapData = this.data[this.options.mapData]
      console.log('data', data)
      for (let item of data) {
        console.log('i', item)
        console.log('dataItem', item)
        var fromCoord = mapData[item.name]
        var toCoord = mapData[item.name]
        if (fromCoord && toCoord) {
          res.push({
            fromName: item.name,
            toName: item.name,
            coords: [fromCoord, toCoord],
          })
        }
      }
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
</style>