<template>
  <div style="border:1px solid black;border-radius: 12px;width:120px;height:200px;background: white;z-index:1000">
    <ul class="second_map">
      <!-- <router-link tag="li" to="/operatebook">管理书架</router-link> -->
      <li class="operate_bookshelf" style="border-radius: 12px;" @click="handle()">管理书架</li>
      <li class="operate_bookwall">图墙模式</li>
      <li class="operate_activeorder">最近更新排序</li>
      <li class="operate_readorder" style="border:1px solid #f9f9f9">最近阅读排序</li>
      <li class="operate_collectorder" style="border-radius: 12px;">最新收藏排序</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      handle(){
        this.$router.push('/operatebook');
      }
    }
  }
</script>

<style>
  .second_map{
    text-align: center;
    background: #fafafa;
    border-radius: 12px;
    height:100%;
    width:100%;
  }
  .second_map li{
    height:20%;
    line-height: 40px;
    background: white;
  }
</style>
