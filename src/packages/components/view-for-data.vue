<template>
  <div class="view-content flex-row">
    <nav-items class="main-menu" @selectMenu='selectMenu'></nav-items>
    <div class="flex-1">
      <el-tabs  tab-position="">
        <el-tab-pane v-for="(tab, tabIndex) in tabs" :key="tabIndex" :label="tab.label">
          <div id="main" class="flex-1 flex-row" >
          <component
            :is="tab.components"
            class="data-options"
            :attr="attrs"
            :type="chartType"
            :options="tab.options"
            @change="settingChange"
            @setOptions="handleSetOptions"
          ></component>
          <component :is="componentName" :data="formatData" :options="formatOptions"></component>
        </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>
<script>
import navItems from './custom/navItems'
import dataOptions from './custom/dataOptions'
import mapObj from '@/const/map.js'
import baseSettings from './custom/baseSettings'
import titleSetting from './custom/titleSetting'
import axisSettings from './custom/axisSettings'
import formSettings from './custom/formSettings'
import formOptions from '../const/settingsOption/index.js'
  export default {
    name: 'view-for-data',
    components: {
      navItems,
      dataOptions,
      titleSetting,
      axisSettings,
      formSettings
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
        formatData: {},
        formatOptions: {},
        tabs: [
          {
            label: '数据设置',
            components: dataOptions
          },
          {
            label: '基本设置',
            components: formSettings,
            options: formOptions.baseSetting
          },
          {
            label: '标题',
            components: titleSetting
          },
          {
            label: '坐标轴',
            components: axisSettings,
            options: formOptions.axisSetting
          },
          {
            label: '图例',
            components: formSettings,
            options: formOptions.legendSetting
          },
          {
            label: '提示',
            components: formSettings,
            options: formOptions.tipsSetting
          },
          {
            label: '工具栏',
            components: formSettings,
            options: formOptions.toolboxSetting
          },
          // {
          //   label: '高级',
          //   components: baseSettings
          // },
          // {
          //   label: '扩展插件',
          //   components: baseSettings
          // }
        ]
      }
    },
    watch: {
      chartType (val) {
        this.formatData = {}
        this.formatOptions = {}
      }
    },
    created () {
      this.getAttributes()
    },
    methods: {
      // 配置setOption选项
      handleSetOptions (options) {
        console.log('options', options)
        Object.keys(options).forEach(key => {
          let flag = Object.keys(this.formatOptions).includes(key)
          if (!flag) {
            this.$set(this.formatOptions, key, options[key])
          } else {
            // 还是个对象
            console.log(this.formatOptions[key])
            if (typeof this.formatOptions[key] === 'object') {
              // options[key] 也肯定是个对象
                Object.keys(options[key]).forEach(subKey => {
                  this.$set(this.formatOptions[key], subKey, options[key][subKey])
                })
            } else {
              this.$set(this.formatOptions, key, options[key])
            }
          }
        })
      },
      // objectAssign ()
      selectMenu (index) {
        this.chartType = index
        this.componentName = `y-${index}`
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
          case 'line':
          case 'pie':
          case 'scatter':
            if (value) {
              this.coordinateAxisFormat(value, attr, col)
            } else {
              this.removeCoordinateAxisFormat(value, attr, col)
            }
            break
          case 'map':
            const scatterData = this.getAddressDatas()
            if (value) {
              this.addScatterInMap(value, attr, col, scatterData)
            } else {
              this.removeScatterInMap(value, attr, col, scatterData)
            }
        }
      },
      // 添加坐标轴
      coordinateAxisFormat (value, attr, col) {
        const dimensions = []
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
          case 'category':
            // 如果之前有删除
            if (this.formatData.dimensions && !this.formatData.dimensions[0]) {
              this.$set(this.formatData.dimensions, 0, attr.prop)
              let deleteObj = Object.keys(this.formatData.source[0])[0]
              this.formatData.source.forEach((item, index) => {
                for (let i in item) {
                  if (i === deleteObj) {
                    delete item[i] // 删除掉之前的x轴字段
                  }
                }
              })
            } else {
              if (Object.keys(this.formatData).length) {
                dimensions.push(...this.dimensions)
              }
              this.$set(this.formatData, 'dimensions', dimensions)
            }
            source.forEach((item, index) => {
              source[index] = Object.assign({}, item, this.formatData.source && this.formatData.source[index])
            })
            this.$set(this.formatData, 'source', source)
            break
          case 'y':
          case 'compare':
            if (!Object.keys(this.formatData).length) {
              this.formatData.dimensions = dimensions
              this.formatData.source = source
            }
            this.formatData.dimensions.push(...dimensions)
            this.formatData.source.forEach((item, index) => {
              this.$set(this.formatData.source, index, { ...item, ...source[index] })
            })
            break
          case 'stack':
            let stacks = []
            let dimensionsTemp = this.formatData.dimensions
            if (!this.formatOptions.series) {
              for (let i = 1; i < dimensionsTemp.length; i++) {
                if (dimensionsTemp[i] === attr.prop) {
                  stacks.push({ type: this.chartType, stack: 'stack' })
                } else {
                  stacks.push({ type: this.chartType })
                }
              }
              this.$set(this.formatOptions, 'series', stacks)
            } else {
              for (let j = 1; j < dimensionsTemp.length; j++) {
                if (dimensionsTemp[j] === attr.prop) {
                  this.$set(this.formatOptions.series[j - 1], 'stack', 'stack')
                }
              }
            }
            break
        }
      },
      // 移除坐标轴
      removeCoordinateAxisFormat (value, attr, col) {
        let dimensions = []
        let source = []
        switch (col.prop) {
          case 'x':
          case 'category':
            this.formatData.source.forEach((item, index) => {
              for (let value in item) {
                if (value === attr.prop) {
                    item[value] = ''
                }
              }
            })
            this.$set(this.formatData.dimensions, 0, '')
            break
          case 'y':
          case 'compare':
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
          case 'stack':
            break
        }
      },
      // 获取数据中每条数据的地区点
      getAddressDatas () {
        // 规定地区为name
        let scatterData = this.data.map(item => {
          return { name: item.address }
        })
        // this.$set(this.formatOptions, 'scatterData', scatterData)
        return scatterData

      },
      // 在地图上添加散点
      addScatterInMap (value, attr, col, scatter) {
        this.data.forEach((data, index) => {
          scatter[index].value = data[attr.prop]
        })
        this.formatData = scatter
        this.formatOptions = mapObj
      },
      // 在地图上移除散点
      removeScatterInMap (value, attr, col, scatter) {
        this.formatData = []
        this.formatOptions = {}
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
