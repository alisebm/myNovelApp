<template>
  <div style="background: #f9f9f9;height: auto;">
    <!-- 顶部返回操作栏 -->
    <div class="myhome_toptitle" style="display: flex;text-align: center;line-height: 30px;">

      <span class="myhome_reback" @click="goBack()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </span>

      <span class="myhome_more">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
        </svg>
      </span>

      <span class="myhome_display">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bag"></use>
        </svg>
      </span>
    </div>

    <!-- 用户信息 -->
    <div class="myhome_usermsg">
      <div style="width: 20%;height:60px;">
        <img class="myhome_userimg" src="../../assets/images/front10.jpg" />
      </div>
      <span class="myhome_username"><b>{{username}}</b></span>
      <p class="myhome_userprof">哈喽哈喽o(*￣▽￣*)o</p>
      <div style="width:100%;position: absolute;bottom: 10px;">
        <span style="color: #7f7f7f;">关注</span>
        <span><b>3</b></span>
      </div>
    </div>

    <!-- 收藏作品 -->
    <ul class="myhome_collect">
      <li class="myhome_first">
        <!-- 收藏作品 -->
        <span class="title">
          <b>收藏作品</b>
          <span>10</span>
        </span>
        <collectlist :collectlist="this.collectlist1"></collectlist>
      </li>

      <li class="myhome_first">
        <!-- 订阅作品 -->
        <span class="title">
          <b>订阅作品</b>
          <span>10</span>
        </span>
        <collectlist :collectlist="this.collectlist1"></collectlist>
      </li>

      <li class="myhome_first">
        <!-- 书单 -->
        <span class="title">
          <b>书单</b>
          <span>10</span>
          <span style="position: absolute; right: 0;" class="iconfont icon-arrow"></span>
        </span>
        <setofbook :booklist="this.booklist_list"></setofbook>
      </li>

      <li class="myhome_first">
        <!-- 成就墙 -->
        <span class="title"><b>成就墙</b></span>
        <achievement></achievement>
      </li>

      <span style="display:inline-block;width:100%;text-align: center;color: #7F7F7F;">加载中...</span>
    </ul>
  </div>
</template>

<script>
  import collectlist from '@/components/My/collectlist'
  import setofbook from '@/components/My/setofbook.vue'
  import achievement from '@/components/My/achievement'
  export default {
    components: {
      collectlist,
      setofbook,
      achievement
    },
    data() {
      return {
        username: '',
        userid:'',
        collectlist1: [{
          BookCP: 'CP000001',
          book_cover: 'front9.jpg',
          bookname: '倒霉版封寝日记',
          author: '不执灯'
        }, {
          BookCP: 'CP000002',
          book_cover: 'front10.jpg',
          bookname: '自带bgm的男人',
          author: '不猫'
        }, {
          BookCP: 'CP000003',
          book_cover: 'front8.jpg',
          bookname: '猫冬',
          author: '清明谷雨'
        }, {
          BookCP: 'CP000001',
          book_cover: 'front9.jpg',
          bookname: '倒霉版封寝日记',
          author: '不执灯'
        }, {
          BookCP: 'CP000002',
          book_cover: 'front10.jpg',
          bookname: '自带bgm的男人',
          author: '不猫'
        }, {
          BookCP: 'CP000003',
          book_cover: 'front8.jpg',
          bookname: '猫冬',
          author: '清明谷雨'
        }],
        booklist_list: [{
          url: 'front12.jpg',
          title: '壬寅年长佩文学年度作品赏析1',
          class: '原创区年榜作品',
          user: '文学城运营官',
          numberdata: '52本·0评论·2.1K收藏'
        }]
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      getUserName() {
        let user = JSON.parse(localStorage.getItem('user' || '[]'));
        console.log(user);
        this.username = user.username;
        this.userid = user.userid;
      },
      getCollectedBookList(){
        this.$axios({
          url:"http://localhost:8080/myserv2/getCollectedBook",
          method:"get",
          params:{flag:'collected',userid:this.userid}
        }).then((result)=>{
          this.collectlist1 = result.data;
        })
      }
    },
    mounted() {
      this.getUserName();
      this.getCollectedBookList();
    }
  }
</script>

<style>
  .myhome_toptitle {
    width: 100%;
    height: 160px;
    background-image: url(../../assets/images/background2.png) !important;
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding: 10px;
    position: relative;
  }

  .myhome_toptitle span {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: rgba(178, 178, 178, 0.6);
    font-size: 20px;
    color: white;
  }

  .myhome_toptitle .myhome_more {
    position: absolute;
    right: 10px;
  }

  .myhome_toptitle .myhome_display {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .myhome_usermsg {
    width: 100%;
    height: 120px;
    display: flex;
    position: relative;
    padding: 10px;
    background: white;
  }

  .myhome_usermsg .myhome_userimg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    top: -20px;
  }

  .myhome_usermsg .myhome_username {
    position: absolute;
    top: 4px;
    left: 20%;
    font-size: 18px;
  }

  .myhome_usermsg .myhome_userprof {
    width: 94%;
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    position: absolute;
    left: 0;
    top: 40px;
    color: #7F7F7F;
    border-bottom: 1px solid gainsboro;
  }

  .myhome_collect {
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px;
    background: white;
  }

  .myhome_collect .myhome_first {
    height: auto;
  }

  .myhome_collect .myhome_first .title {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    position: relative;
  }
</style>
