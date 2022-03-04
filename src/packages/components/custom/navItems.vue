<template>
<el-row>
  <el-menu class="el-menu-vertical-demo"  :default-active="activeIndex"  @select="selectMenu" v-if="menus">
    <el-menu-item  v-for="(menu, index) in menus" :key="index" :index="menu.type">
      <!-- <img class="themeIcon" src="../../assets/columar.svg"/> -->
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </el-menu-item>
  </el-menu>
</el-row>

</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          name: '柱状图',
          icon: 'iconfont icon-cq-duiditzhuzhuangtu',
          type: 'bar'
        },
        {
          name: '折线图',
          icon: 'iconfont icon-zhexiantu',
          type: 'line'
        },
        {
          name: '散点图',
          icon: 'iconfont icon-cq-sandiantu',
          type: 'scatter'
        },
        {
          name: '饼图',
          icon: 'iconfont icon-cq-piechat',
          type: 'pie'
        },
        {
          name: '地图',
          icon: 'iconfont icon-cq-map-area',
          type: 'map'
        }
      ],
      activeIndex: 'bar',
    }
  },
  created () {

  },
  watch: {
    activeIndex: {
      handler(val) {
        this.$emit('selectMenu', val)
      },
      immediate: true
    }
  },
  methods: {
    selectMenu (key, keypath) {
      console.log('', key, keypath)
      this.activeIndex = key
    },

  }
}
</script>

<style  scoped>
.el-menu-vertical-demo{
  width: 100px;
  min-height: 400px;
}
</style>