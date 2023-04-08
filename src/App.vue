<template>
  <div style="font-family: 楷体;">
    <router-view />
    <!-- <router-view>的作用：
     就比如说App.vue是根组件，在它的<template>标签里使用<router-view>，
     而且配置好路由的情况下，就能在浏览器上显示子组件的效果； -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>

  import NavBottom from '@/components/NavBottom.vue'
  export default {
    components:{
      NavBottom
    }
  }
</script>
<style>

</style>
