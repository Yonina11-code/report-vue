<template>
  <div>
    <el-radio-group v-model="value">
      <el-radio :label="dic.value" v-for="(dic, index) in dicData" :key="index" border>
        {{dic.label}}
      </el-radio>
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: 'Yradio',
  props: {
    value: {
      type: [Number, String]
    },
    dicData: {
      type: [Array, Object]
    }
  },
  data () {
    return {
    }
},
}
</script>

<style lang="scss" scoped>
</style>