<!--  -->
<template>
  <div :id="pie"+id>

  </div>
</template>

<script>
export default {
    props: {
        id: [Number, String]
    },
  data () {
    return {
    }
  },
  created () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(`pie${this.id}`))
  }
}
</script>

<style  scoped>

</style>
