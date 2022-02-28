<template>
  <div>
    <div v-for="(head, index) in tableHeads" :key="index">
      <div v-if="head.type === type">
        <el-row class="grid-content bg-purple flex-row-center">
          <el-col :span="4" v-for="col in head.heads" :key="col.label">{{col.label}}</el-col>
        </el-row>
        <el-row v-for="(attrCol, attrIndex) in formatAttr" :key="attrIndex">
          <el-col :span="4" v-for="(col, colIndex) in attrCol" :key="colIndex">
            <div v-if="!colIndex">{{col.label}}</div>
            <el-checkbox v-else></el-checkbox>
          </el-col>

        </el-row>
      </div>
    </div>
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
      tableHeads: [
        {
          type: 'bar',
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
        }
      ],
      formatAttr: []
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
      this.formatAttr = this.attr.map(attr => {
        let temp = [attr]
        this.tableHeads.map(tableHead => {
          if (tableHead.type === this.type) {
            temp.push(...tableHead.heads.filter((item, index) => index !== 0))
          }
        })
        return temp
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