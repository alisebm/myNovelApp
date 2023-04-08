<template>
  <div>
    <toptitle>章节详情</toptitle>
    <div style="height: 40px;"></div>
    <!-- <a href="D:/vuedemo/myapp2/src/assets/BookTxt/读者和主角绝逼是真爱.txt">阅读</a> -->
    <div style="padding: 10px;font-size: 16px;" v-html="content">

    </div>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue'
  export default {
    components:{toptitle},
    data() {
      return {
        bookcp:this.$route.params.BookCP,
        content:'活动结束卡拉返还甲方和接口接口是',
        txtURL: ''
      }
    },
    methods: {
      getBookTxt() {
        this.txtURL = '@/assets/BookTxt/读者和主角绝逼是真爱.txt',
        this.$axios({
          url:'http://localhost:8080/myserv2/getBookDataList',
          method:"get",
          params:{flag:'readbook',bookcp:this.bookcp,chapternum:1}
        }).then((result)=>{
          console.log(result.data)
          this.content = result.data[0].content;
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    created() {
      this.getBookTxt();
    }
  }
</script>

<style>
  iframe {
      border: 1px solid black;
      width: 100%;
  }
</style>
