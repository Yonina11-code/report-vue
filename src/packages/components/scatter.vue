<template>
  <div :ref="'scatter'+id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-scatter',
  mixins: [mixins],
  data() {
    return {
      exDefault: {
        series: [
          {
            type: 'scatter',
          }
        ],
        yAxis: {
          type: 'value',
        },  // 类目轴
        xAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            interval: 0,
            rotate: 20
          },
        }// 数值轴
        }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>