<template>
  <div>
    <div style="height:40px;width:100%;"></div>
    <!-- 顶部title -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <div style="display: inline-block;" @click="goBack()" class="top-reback">
        <span class="glyphicon glyphicon-menu-left"></span>
      </div>
      <h4><b>新鲜上架</b></h4>
    </div>
    <!-- 所有书籍目录 -->
    <div style="margin:0 5px;">
      <ul class="new-books">
        <router-link :to="'bookcontent/'+item.BookCP" tag="li" class="box" v-for="(item,index) in all" :key="index">
          <div class="cover" style="">
            <img :src="require('@/assets/images/'+item.book_cover+'')" />
          </div>
          <div class="new-msg" style="position:relative;padding:5px 0;">
            <span style="font-size: 16px;">
              {{item.bookname}}
            </span>
            <br />
            <span style="font-size: 14px;color:#7f7f7f;">
              {{item.sample_prof}}
            </span>
            <br />
            <span class="author">
              {{item.author}}
            </span>
            <ul class="tags">
              <li class="tagli" v-for="(v,i) in item.sample_tags" :key="i">
                <span>{{v}}</span>
              </li>
            </ul>
          </div>
        </router-link>
      </ul>
    </div>
    <div style="text-align: center;">已经到底了哦</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        all: [
         /* {
            url: require("@/assets/images/front6.jpg"),
            name: "吃一口浪漫",
            profile: "完蛋了，我超级无敌地想你啊！",
            author: "贰两肉",
            tag: ["综合", "轻松", "9万"]
          },
          {
            url: require("@/assets/images/front7.jpg"),
            name: "你听我话",
            profile: "病秧子x酷哥，竹马竹马",
            author: "笼中月",
            tag: ["竹马竹马", "HE", "12万"]
          },
          {
            url: require("@/assets/images/front8.jpg"),
            name: "我只要你",
            profile: "哑巴x温柔",
            author: "李书锦",
            tag: ["综合", "轻松", "14万"]
          },
          {
            url: require("@/assets/images/front9.jpg"),
            name: "少年行",
            profile: "少年们的爱恨情仇",
            author: "盐盐yany",
            tag: ["综合", "架空", "50万"]
          },
          {
            url: require("@/assets/images/front10.jpg"),
            name: "天地逆旅",
            profile: "浪迹天涯，谈谈恋爱",
            author: "慕禾",
            tag: ["综合", "HE", "92万"]
          },
          {
            url: require("@/assets/images/front11.jpg"),
            name: "我一个人睡觉会害怕",
            profile: "你不会让我一个人睡的，对吧？",
            author: "落回",
            tag: ["都市", "年下", "19万"]
          },
          {
            url: require("@/assets/images/front12.jpg"),
            name: "赛博玫瑰",
            profile: "清纯仿生人在线分配",
            author: "nightfall",
            tag: ["科幻", "强强", "87万"]
          },
          {
            url: require("@/assets/images/front13.jpg"),
            name: "凤凰饲养手册",
            profile: "作者：一条高大威猛的龙",
            author: "云深情浅",
            tag: ["奇幻", "甜宠", "6万"]
          },
          {
            url: require("@/assets/images/front14.jpg"),
            name: "否极泰怎么还没来",
            profile: "人生啊不就是起起落落落落落落落落",
            author: "灵境",
            tag: ["灵异", "搞笑", "39万"]
          }*/
        ]
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      getBookData() {
        this.$axios.get("http://localhost:8080/myserv2/getBookDataList",{params:{flag:"all"}}).then(result => {
        // this.$axios.post("http://localhost:8080/myserv2/getBookDataList").then(result => {
          this.all=result.data;
        })
      }
    },
    created() {
      this.getBookData();
    }
  }
</script>

<style>
  .top-title h4 {
    display: inline-block;
  }
</style>
