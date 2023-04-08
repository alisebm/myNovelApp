<template>
  <div>
    <!-- 顶部title -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <div style="display: inline-block;" @click="goBack()" class="top-reback">
        <span class="glyphicon glyphicon-menu-left"></span>
      </div>
      <h4><b><slot></slot></b></h4>
      <span @click="CreateFinish()" style="position:fixed;top:10px;right:20px;color: #FF8000;" v-show="$route.meta.tool">完成</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      CreateFinish(){
        alert('创建完成！');
      }
    }
  }
</script>

<style>
</style>
