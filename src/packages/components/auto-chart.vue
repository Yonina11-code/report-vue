<template>
  <div :ref="'auto'">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-auto-chart',
  props: {
    data: [Object, Array]
  },
  data() {
    return {
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      let myChart = this.$echarts.init(this.$refs.auto, null, {
        width: this.data.width,
        height: this.data.height,
      })
      myChart.setOption(this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>