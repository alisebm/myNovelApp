<template>
  <div style="position: relative;">
    <span class="glyphicon glyphicon-search" style="position:absolute;top:9px;left:10px;"></span>
    <input placeholder="搜索" class="search_text" />
    <span @click="goCalendar()" class="iconfont icon-icon" id="clander" url="#"></span>
  </div>
</template>

<script>
  export default{
    methods:{
      goCalendar(){
        this.$router.push('/signIn');
      }
    }
  }
</script>

<style>
  .search_text {
    width: 86%;
    height: 32px;
    border: 1px solid #000000;
    border-radius: 10px;
    padding-left: 30px;
  }

  #clander {
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: -2px;
  }
</style>
