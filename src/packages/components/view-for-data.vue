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
        <data-options class="data-options" :attr="attrs" :type="chartType" @change="settingChange"></data-options>
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
    data () {
      return {
        attrs: [], // 表格中的属性名及prop
        chartType: '', // 图表类型
        componentName: 'y-bar',
        formatData: {}
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
      },
      settingChange (value, attr, col) {
        switch(this.chartType) {
          case 'bar':
            if (value) {
              this.coordinateAxisFormat(value, attr, col)
            } else {
              this.removeCoordinateAxisFormat(value, attr, col)
            }
            break
        }
      },
      coordinateAxisFormat (value, attr, col) {
        let dimensions = []
        let source = []
        dimensions.push(attr.prop)
        this.data.map((item, index) => {
          for (let i in item) {
            if (i === attr.prop) {
              let tempObj = {}
              tempObj[i] = item[i]
              source.push(tempObj)
            }
          }
        })
        switch (col.prop) {
          case 'x':
            console.log('formatdata', this.data)
            if (Object.keys(this.formatData).length) {
              dimensions.push(...this.dimensions)
              source.forEach((item, index) => {
                source[index] = { ...item, ...this.source[index] }
              })
            }
            this.$set(this.formatData, 'dimensions', dimensions)
            this.$set(this.formatData, 'source', source)
            console.log('this.formatData', this.formatData)
            break
          case 'y':
            if (!Object.keys(this.formatData).length) {
              this.formatData.dimensions = dimensions
              this.formatData.source = source
            }
            this.formatData.dimensions.push(...dimensions)
            this.formatData.source.forEach((item, index) => {
              this.$set(this.formatData.source, index, { ...item, ...source[index] })
              // item[attr.prop] = source[index][attr.prop]
            })
            console.log('this.formatData', this.formatData)
            break
        }
      },
      removeCoordinateAxisFormat (value, attr, col) {
        console.log('this.removeCoordinateAxisFormat', this.formatData)
        let dimensions = []
        let source = []
        switch (col.prop) {
          case 'x':
            break
          case 'y':
            dimensions = this.formatData.dimensions.filter(item => item !== attr.prop)
            this.formatData.source.forEach((item, index) => {
              for (let value in item) {
                if (value === attr.prop) {
                    delete item[value]
                }
              }
            })
            this.$set(this.formatData, 'dimensions', dimensions)
            break
        }
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
