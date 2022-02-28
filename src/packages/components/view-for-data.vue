<template>
  <div class="view-content flex-row">
    <nav-items class="main-menu" @selectMenu='selectMenu'></nav-items>
    <div class="flex-1">
      <el-tabs  tab-position="">
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
      </el-tabs>
      <!-- <div class="flex-1 flex-row"> -->
      <div id="main" class="flex-1 flex-row" style="height:400px;">
        <data-options class="data-options" :attr="attrs" :type="chartType"></data-options>
        <component :is="componentName" :data="formatData"></component>
      </div>
      <!-- </div> -->
    </div>

  </div>
</template>
<script>
import navItems from './custom/navItems'
import dataOptions from './custom/dataOptions'
  export default {
    name: 'view-for-data',
    components: {
      navItems,
      dataOptions
    },
    props: {
      options: {
        required: true,
        type: [Object, Array]
      },
      data: {
        type: [Object, Array],
        required: true
      }
    },
    computed: {
      formatData: () => {
        return {
          source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        }
      },
    },
    data () {
      return {
        attrs: [], //表格中的属性名及prop
        chartType: '', // 图表类型
        componentName: 'y-bar'
      }
    },
    created () {
      this.getAttributes()
    },
    methods: {
      selectMenu(index) {
        console.log('index', index)
        this.chartType = index
      },
      getAttributes () {
        this.attrs = this.options.map(item => {
          return {
            label: item.label,
            prop: item.prop
          }
        })
      }
    }
  }

</script>
<style>
.main-menu {
  padding-top: 40px;
}
.data-options {
  width: 50%;
  height: auto;
}
</style>
