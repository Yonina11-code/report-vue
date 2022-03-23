<template>
  <div>
    <el-form :inline="true" :model="formInline"  label-position='left' label-width="30px" class="demo-form-inline">
      <el-form-item label="上">
        <el-input v-model.number="formInline.top" placeholder="上边距"></el-input>
      </el-form-item>
      <el-form-item label="下">
        <el-input v-model.number="formInline.bottom" placeholder="下边距"></el-input>
      </el-form-item>
      <el-form-item label="左">
        <el-input v-model.number="formInline.left" placeholder="左边距"></el-input>
      </el-form-item>
      <el-form-item label="右">
        <el-input v-model.number="formInline.right" placeholder="右边距"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import formMixins from '../../mixins/form.js'
export default {
  name: 'YpaddingStyle',
  mixins: [formMixins],
  data() {
    return {
      formInline: {}
    }
  },
  watch: {
    formInline: {
      handler (val, oldVal) {
        this.$emit('saveValue', val)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-form-inline {
  display: flex;
  align-items: center;
  justify-content: center;
}
/deep/.el-input{
  width: 100px;
}
</style>