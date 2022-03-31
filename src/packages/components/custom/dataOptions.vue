<template>
  <div>
      <el-row class="grid-content bg-purple flex-row-center">
        <el-col :span="4" v-for="(head, index) in tablehead.heads" :key="index">
          {{head.label}}
        </el-col>
      </el-row>
    <el-row v-for="(attrCol, attrIndex) in attr" :key="attrIndex">
      <el-col :span="4">
        <div>{{attrCol.label}}</div>
      </el-col>
      <el-col :span="4" v-for="(head, index) in tablehead.heads" :key="index+type">
        <el-checkbox v-if="index" ref="checkbox"  :disabled="computedDisabled(attrCol, attrIndex,index)" @change="(value) => checkboxChange(value, attrCol, head)"></el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'dataOptions',
  props: {
    attr: {
      type: Array
    },
    type: String
  },
  data() {
    return {
      checkboxValue: false,
      tableHeads: [
        {
          type: ['bar', 'line', 'scatter'],
          heads: [{
           label: '字段',
           disabled: false,
           prop: 'attr'
          }, {
            label: 'x轴',
            disabled: false,
            prop: 'x'
          },{
            label: 'y轴',
            disabled: false,
            prop: 'y'
          }, {
            label: '堆叠项',
            disabled: false,
            prop: 'stack'
          }
          ]
        },
        {
          type: ['pie'],
          heads: [
            {
              label: '字段',
              prop: 'attr'
            },
            {
              label: '类目',
              prop: 'category'
            },
            {
              label: '比较项',
              prop: 'compare'
            }
          ]
        },{
          type: ['map'],
          disabled: 'address',
          heads: [
            {
              label: '字段',
              prop: 'attr'
            },
            {
              label: '散点',
              prop: 'scatter'
            },
            // {
            //   label: '比较项',
            //   prop: 'compare'
            // }
          ]
        }
      ],
      tablehead: [], // 当前图形的表头
      twoDimension: []
    }

  },
  watch: {
    type(val) {
      if (val) {
        this.twoDimension = []
        this.formatMergeHead()
      }
    }
  },
  computed: {
    computedDisabled () {
      return  (attrCol, attrIndex, index) => {
        if (this.tablehead && this.twoDimension) {
          return attrCol.prop === this.tablehead.disabled || (this.twoDimension[attrIndex][index].disabledX || this.twoDimension[attrIndex][index].disabledY)
        }
        return false
    }
    }
  },
  created () {
  },
  methods: {
    // 根据图表类型合并表头及属性
    formatMergeHead () {
      this.tablehead = this.tableHeads.filter(item => item.type.includes(this.type))[0]
      this.generatorTwoDimension()
    },
    checkboxChange (value, attr, col) {
      this.$emit('change', value, attr, col)
      this.handleCheckbox(value, attr, col)
    },
    handleCheckbox (value, attrCol, col) {
      const attr = this.attr
      const heads = this.tablehead.heads
      const twoDimension = this.twoDimension
      const rowIndex = this.attr.findIndex(item => item.prop === attrCol.prop) // 所在行

      if (col.prop === 'x') {
        //  选择某属性为x轴时，所在的row, col都不可选
        const colIndex = this.tablehead.heads.findIndex(item => item.prop === col.prop)
        const curTemp = twoDimension[rowIndex][colIndex]
        twoDimension[rowIndex].map((item, index) => {
          if (curTemp.prop !== item.prop) {
            return item.disabledX = value
          }
        })
        twoDimension.map((items, indexs) => {
          for (let i = 0; i < items.length; i++) {
            if (i === colIndex && indexs !== rowIndex) {
              return items[i].disabledX = value
            }
          }
        })
        console.log('twoDimension', twoDimension)
        this.$set(this.twoDimension, 'twoDimension', twoDimension)
      } else if (col.prop === 'y'){
        // 选择y轴时，其所在的行x轴不可选
        const colIndex = this.tablehead.heads.findIndex(item => item.prop === 'x') // x轴所在列
        this.$set(this.twoDimension[rowIndex][colIndex], 'disabledY', value)
      }
    },
    generatorTwoDimension () {
      this.attr.forEach((row, rowIndex) => {
        let rows = []
        this.tablehead.heads.forEach((col, colIndex) => {
          rows.push({
            prop: `${row.prop}-${col.prop}`,
            disabledX: false,
            disabledY: false
            })
        })
        this.twoDimension.push(rows)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-row {
    height: 40px;
    line-height: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-row:nth-of-type(2n) {
    background-color: #FAFAFA
  }
</style>