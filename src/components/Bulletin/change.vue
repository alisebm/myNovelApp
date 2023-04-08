<template>
  <div class="bottom">
    <div class="button">
      <span class="glyphicon glyphicon-share"></span>
      <span>全部</span>
    </div>
    <div class="button" @click="dataChange">
      <span class="glyphicon glyphicon-refresh"></span>
      <span>换一换</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    props:["f3list"],
    methods:{
      dataChange(){
        console.log("切换数据");
        
      }
    }
  }
</script>

<style>
  .bottom{
    width:100%;
    height:50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .bottom .button{
    flex:1;
    text-align: center;
    height:70%;
    margin:0 10px;
    line-height: 35px;
    background: #f6f6f6;
    border-radius: 12px;;
  }
</style>
