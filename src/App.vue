<template>
  <div id="app" class="flex-row">
    <nav-items @selectMenu='selectMenu'></nav-items>
    <div class="flex-1 flex-row">
      <div id="main" class="flex-1" style="height:400px;"></div>
      <!-- <y-pie :options="pieOption" :data="Data.pie"></y-pie> -->
      <y-line :options="pieOption" :data="Data.line"></y-line>
      <!-- <el-tabs  tab-position="right">
        <el-tab-pane label="数据设置"></el-tab-pane>
        <el-tab-pane label="基本设置"></el-tab-pane>
        <el-tab-pane label="标题"></el-tab-pane>
        <el-tab-pane label="坐标轴"></el-tab-pane>
        <el-tab-pane label="图例"></el-tab-pane>
        <el-tab-pane label="提示"></el-tab-pane>
        <el-tab-pane label="工具"></el-tab-pane>
        <el-tab-pane label="序列"></el-tab-pane>
        <el-tab-pane label="高级"></el-tab-pane>
        <el-tab-pane label="扩展插件"></el-tab-pane>
      </el-tabs> -->
    </div>

  </div>
</template>

<script>
import navItems from './components/navItems'
import pieOption from '@/const/pie'
import Data from  '/examples/data/index.js'
export default {
  name: 'App',
  components: {
    navItems
  },
  data: () => {
    return {
      Data: Data,
      pieOption: pieOption
    }
  },
  methods: {
    selectMenu(index) {
      console.log('index', index)
    }
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
