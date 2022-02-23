<!--  -->
<template>
  <div :ref="'pie'+id">

  </div>
</template>

<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-pie',
  mixins: [mixins],
  data () {
    return {
      exDefault: {
        series: [
          {
            type: 'pie'
          }
        ]
      }
    }
  },
  methods: {
    draw () {
      let myChart = this.$echarts.init(this.$refs[`pie${this.id}`], null, {
        width: this.formatOptions.width,
        height: this.formatOptions.height,
      })
      myChart.setOption(this.formatOptions)
    }
  }
}
</script>

<style  scoped>

</style>
