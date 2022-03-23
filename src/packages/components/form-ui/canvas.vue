<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="宽度">
        <el-input-number v-model="canvas.width" :min="min"></el-input-number>
      </el-form-item>
      <el-form-item label="高度">
        <el-input-number v-model="canvas.height" :min="min"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'YCanvas',
  props: {
    value: [String, Object, Array]
  },
  data() {
    return {
      canvas: {
        width: 700,
        height: 500
      },
      min: 0
    }
  },
  watch: {
    canvas: {
      handler (val, old) {
        this.$emit('saveValue', val)
        return
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>