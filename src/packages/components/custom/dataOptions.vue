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
        <el-checkbox v-if="index" ref="checkbox"  :disabled="attrCol.prop === tablehead.disabled" @change="(value) => checkboxChange(value, attrCol, head)"></el-checkbox>
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
           prop: 'attr'
          }, {
            label: 'x轴',
            prop: 'x'
          },{
            label: 'y轴',
            prop: 'y'
          }, {
            label: '堆叠项',
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
    }

  },
  watch: {
    type(val) {
      if (val) {
        this.formatMergeHead()
      }
    }
  },
  created () {
  },
  methods: {
    // 根据图表类型合并表头及属性
    formatMergeHead () {
      this.tablehead = this.tableHeads.filter(item => item.type.includes(this.type))[0]
    },
    checkboxChange (value, attr, col) {
      this.$emit('change', value, attr, col)
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