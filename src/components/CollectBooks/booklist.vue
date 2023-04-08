<template>
  <div>
    <div style="height: 50px;"></div>
    <div style="width: 100%;padding:0 10px;height:500px;">
      <setofbook :booklist="this.booklist_list"></setofbook>
    </div>

  </div>
</template>

<script>
  import setofbook from '@/components/My/setofbook.vue'
  export default {
    components:{
      setofbook
    },
    data() {
      return {
        booklist_list: [{
          title: '壬寅年长佩文学年度作品赏析1',
          class: '原创区年榜作品',
          user: '文学城运营官',
          numberdata: '52本·0评论·2.1K收藏',
          books:[{
            url:'front7.jpg',
            name:'猫冬',
            BookCP:'CP000007'
          },{
            url:'front8.jpg',
            name:'倒霉版封寝日记',
            BookCP:'CP000008'
          }]
        }, {
          title: '壬寅年长佩文学年度作品赏析1',
          class: '原创区年榜作品',
          user: '文学城运营官',
          numberdata: '52本·0评论·2.1K收藏',
          books:[{
            url:'front5.png',
            name:'猫冬',
            BookCP:'CP000007'
          },{
            url:'front6.jpg',
            name:'倒霉版封寝日记',
            BookCP:'CP000008'
          },{
            url:'front9.jpg',
            name:'倒霉版封寝日记',
            BookCP:'CP000008'
          }]
        }]
      }
    },
    created() {
      // console.log(this.booklist_list);
    }
  }
</script>

<style>
</style>
