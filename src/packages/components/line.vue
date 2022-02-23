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
            type: 'line'
          }
        ],
        xAxis: {

        },
        yAxis: {

        }
        }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>