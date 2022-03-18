<template>
  <div>
    <el-form :inline="true" :model="formInline"  label-position='left' label-width="30px" class="demo-form-inline">
      <el-form-item label="上">
        <el-input v-model="formInline.up" placeholder="上边距"></el-input>
      </el-form-item>
      <el-form-item label="下">
        <el-input v-model="formInline.down" placeholder="下边距"></el-input>
      </el-form-item>
      <el-form-item label="左">
        <el-input v-model="formInline.left" placeholder="左边距"></el-input>
      </el-form-item>
      <el-form-item label="右">
        <el-input v-model="formInline.right" placeholder="右边距"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'YpaddingStyle',
  data() {
    return {
      formInline: {}
    }
},
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