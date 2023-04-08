<template>
  <div style="padding:12px;">
    <!-- 搜索框 -->
    <search></search>
    <!-- 轮播图 -->
    <slider :slidelist="slidelist"></slider>
    <!-- 快速分类 -->
    <moreclass :cttlist="cttlist"></moreclass>
    <!-- 公告栏 -->
    <bulletin></bulletin>
    <!-- 瀑布流 -->
    <fall1 :f1list="f1list"></fall1>
    <fall2 :f2list="f1list"></fall2>
    <!-- 底部抬高 -->
    <div style="height:60px;width:100%;"></div>
  </div>
</template>

<script>
  import search from '@/components/Recom/search.vue'
  import slider from '@/components/Recom/slider.vue'
  import moreclass from '@/components/Recom/moreclass.vue'
  import fall1 from '@/components/Waterfall/fall1.vue'
  import fall2 from '@/components/Waterfall/fall2.vue'
  import bulletin from '@/components/Bulletin/bulletin.vue'
  export default {
    components: {
      search,
      slider,
      moreclass,
      fall1,
      fall2,
      bulletin
    },
    data() {
      return {
        slidelist: [
          require("@/assets/images/1.jpeg"),
          require("@/assets/images/2.png"),
          require("@/assets/images/3.jpeg"),
          require("@/assets/images/4.jpeg"),
          require("@/assets/images/5.jpeg")
        ],
        f1list: [
          /*
          {url:require("@/assets/images/front4.jpg"),name:"沧海明月",author:"池也池池池池池"},
          {url:require("@/assets/images/front5.png"),name:"信息素说你不单纯啊啊啊",author:"池也池"},
          {url:require("@/assets/images/front6.jpg"),name:"吃一口烂漫",author:"贰两肉"},
          {url:require("@/assets/images/front7.jpg"),name:"你听我话",author:"笼中月"},
          {url:require("@/assets/images/front8.jpg"),name:"我只要你",author:"李书锦"},
          {url:require("@/assets/images/front9.jpg"),name:"少年行",author:"盐盐yany"},
          {url:require("@/assets/images/front10.jpg"),name:"天地逆旅",author:"慕禾"},
          {url:require("@/assets/images/front11.jpg"),name:"我一个人睡觉会害怕",author:"落回"}
        */
        ],
        cttlist: [{
            text: "古代",
            icon: "icon-shanzi",
            url: ""
          },
          {
            text: "现代",
            icon: "icon-dianshiji",
            url: ""
          },
          {
            text: "幻想",
            icon: "icon-xinggui",
            url: ""
          },
          {
            text: "悬疑",
            icon: "icon-MBEfenggechangyongtubiao-sousuo",
            url: ""
          },
          {
            text: "榜单",
            icon: "icon-meihua",
            url: "/ranklist"
          }
        ]
      }
    },
    methods: {
      getBookData() {
        this.$axios.get("http://localhost:8080/myserv2/getBookDataList", {
          params: {
            flag: "all"
          }
        }).then(result => {
          //this.$axios.post("http://localhost:8080/myserv2/getBookDataList").then(result => {
          // console.log("reault.data");
          // console.log(result.data);
          this.f1list = result.data;
        })
      },
      getCollectedBooks() {
        let user = JSON.parse(localStorage.getItem('user') || '[]');

        this.$axios({
          url: "http://localhost:8080/myserv2/getCollectedBook",
          method: "get",
          params: {
            userid: user.userid,
            flag: 'collected'
          }
        }).then((result) => {
          // 存入本地
          console.log("存入本地");
          for (let i = 0; i < result.data.length; i++) {
            result.data[i].collect = false;
          }
          console.log(result.data);
          localStorage.setItem('cbks', JSON.stringify(result.data));
          let collectedbooklist = JSON.parse(localStorage.getItem('cbks' || '[]')); //这里的cmts是localstorage的内容，如果是第一次存，那就是空的，如果不是，就从cmts中取出来
          this.$store.dispatch('bookshelf/setValue', collectedbooklist);
        }).catch(err => console.log(err));
      },
    },
    created() {
      this.getBookData();
      this.getCollectedBooks();
    }
  }
</script>

<style>

</style>
