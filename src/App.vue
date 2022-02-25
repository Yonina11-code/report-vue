<template>
  <div id="app" class="flex-row">
    <nav-items @selectMenu='selectMenu'></nav-items>
    <div class="flex-1 flex-row">
      <div id="main" class="flex-1" style="height:400px;"></div>
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
      <div class="flex">
        <y-pie :options="Options.pie" :data="Data.pie"></y-pie>
        <y-line :options="Options.line" :data="Data.line"></y-line>
        <y-bar :options="Options.bar" :data="Data.line"></y-bar>
        <y-scatter :options="Options.scatter" :data="Data.line"></y-scatter>
        <y-map :options="Options.map" :data="Data.map"></y-map>
        <y-auto-chart :data="Data.formatData"></y-auto-chart>
      </div>
    </div>

  </div>
</template>

<script>
import navItems from './components/navItems'
import Options from '@/const/index'
import Data from  '../examples/index.js'
export default {
  name: 'App',
  components: {
    navItems
  },
  data: () => {
    return {
      Data: Data,
      Options: Options
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
.flex {
  display: flex;
  flex-wrap: wrap
}
</style>
