<template>
  <div :ref="'bar'+id">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-bar',
  mixins: [mixins],
  data() {
    return {
      exDefault: {
        series: [
          {
            type: 'bar',
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
  created () {
    console.log('y-bar')
  }
}
</script>

<style lang="scss" scoped>
</style>