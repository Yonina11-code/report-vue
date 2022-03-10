<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="宽度">
        <el-input-number v-model="width" :min="min"></el-input-number>
      </el-form-item>
      <el-form-item label="高度">
        <el-input-number v-model="height" :min="min"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'YCanvas',
  props: {
    value: [String]
  },
  data() {
    return {
      width: '',
      height: '',
      min: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>