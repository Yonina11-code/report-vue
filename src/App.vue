<template>
  <div id="app">
    <!-- <div class="flex-1 flex-row"> -->
      <!-- <div id="main" class="flex-1" style="height:400px;"></div> -->
    <view-for-data :options="Options" :data="Data"></view-for-data>
    <!-- <y-map :data="mapData" :options="mapObj"></y-map> -->
    <!-- </div> -->

  </div>
</template>

<script>
import Options from '../examples/initTable/config.js'
import Data from  '../examples/initTable/table.js'
import pieData from '/examples/data/pie.js'
import mapData from '/examples/data/map.js'
import mapObj from '@/const//map.js'
export default {
  name: 'App',
  data: () => {
    return {
      Data: Data,
      Options: Options,
      pieData: pieData,
      mapData: mapData,
      mapObj: mapObj
    }
  },
  methods: {
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
