<template>
  <div :ref="'line'+id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-line',
  mixins: [mixins],
  data() {
    return {
      exDefault: {
        series: [
          {
            type: 'line',
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