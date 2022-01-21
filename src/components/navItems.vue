<template>
  <el-menu class="el-menu-vertical-demo"  :collapse="true" @select="selectMenu">
    <el-menu-item index="1">
      <img class="themeIcon" src="../assets/columar.svg"/>
      <span slot="title">柱状图</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
    }
},
methods: {
  selectMenu (key, keypath) {
    console.log('', key, keypath)
    this.$emit('selectMenu', key, keypath)
  }
}
}
</script>

<style lang="scss" scoped>
</style>