<template>
  <div :ref="id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
const china = require('../const/china.json')
const logLat = require('../const/chinaCity.json')
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
      },
      formatMap: []
    }
  },
  methods: {
    formatData (data) {
      if (!(data instanceof Array)) return
      console.log('data', data)
      // 在地图上生成散点图，value 需要经纬度加value
      let res = []
      let mapData = this.formatMap
      for (let item of data) {
        let mapIndex = logLat.findIndex(map => map.name === item.name)
        console.log(mapIndex)
        let name = []
        if (mapIndex !== -1) {
          console.log('mapIndex', logLat[mapIndex])
          name =[logLat[mapIndex].log, logLat[mapIndex].lat]
        } else {
          name = ['', '']
        }
        name.push(item.value)
        res.push({
          name: item.name,
          value: name
        })
      }
      return res
    },
    draw () {
       this.myChart = this.$echarts.init(this.$refs[`${this.id}`], null, {
        width: this.formatOptions.width,
        height: this.formatOptions.height,
      })
      let scatterData = this.formatData(this.data)
      // this.formatOptions.dataset = scatterData
      this.formatOptions.series && this.formatOptions.series.forEach(item => {
        item.data = scatterData
      })
      console.log('this.data', this.formatOptions)
      this.myChart.setOption(this.formatOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>