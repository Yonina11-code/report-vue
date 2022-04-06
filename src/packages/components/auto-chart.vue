<template>
  <div ref="auto">

  </div>
</template>
<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'y-auto-chart',
  mixins: [mixins],
  data() {
    return {
    }
  },
  mounted () {
    this.draw()
  },
  watch: {
    options: {
      handler (val) {
        console.log('auto-chart', val)
        if (val) {
          this.draw()
        }
      },
      deep: true
    }
  },
  methods: {
    draw () {
      if (!this.options) {
        this.$message('暂无可用配置项及数据')
        return
      }
      const { width, height } = this.options.canvas || this.options
      let myChart = this.$echarts.init(this.$refs.auto, null, {
        width: width,
        height: height,
      })
      myChart.setOption(this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>