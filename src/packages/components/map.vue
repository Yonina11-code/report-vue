<template>
  <div :ref="id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
const china = require('../const/china.json')
import '../const/china.js'
export default {
  name: 'y-map',
  mixins: [mixins],
  data() {
    return {
      exDefault: {
        height: 600,
        width: 800,
        series: [
        ]
      }
    }
  },
  methods: {
    formatData (data) {
      // 在地图上生成散点图，value 需要经纬度加value
      let res = []
      let mapData = this.data[this.options.mapData]
      for (let item of data) {
        const name =[...mapData[item.name]]
        if (name) {
          name.push(item.value)
          res.push({
            name: item.name,
            value: name
          })
        }
      }
      return res
    },
    draw () {
      let myChart = this.$echarts.init(this.$refs[`${this.id}`], null, {
        width: this.formatOptions.width,
        height: this.formatOptions.height,
      })
      let scatterData = this.data[this.options.scatterData]
      this.formatOptions.series.forEach(item => {
        item.data = this.formatData(scatterData)
      })
      myChart.setOption(this.formatOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>