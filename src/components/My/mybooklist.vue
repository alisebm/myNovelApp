<template>
  <div>
    <toptitle>
      <template>我的书单</template>
    </toptitle>
    <booklist></booklist>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue'
  import booklist from '@/components/CollectBooks/booklist.vue'
  export default{
    components:{toptitle,booklist}
  }
</script>

<style>
</style>
