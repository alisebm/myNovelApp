<template>
  <div>
    <transition name="fade">
      <div class="bg-cover" v-show="showCover"></div>
    </transition>
    <div id="lightbody" :class="[readOnly===true?'form-onlyRead':'']">
      <div class="bookcontent" style="position:relative;background: #F6F6F6;">
        <div style="height:40px;width:100%;"></div>
        <!-- 顶部title -->
        <div class="top-title" :style="style" :class="['homeNav', { color: color }]">
          <div style="display: inline-block;" @click="goBack()" class="top-reback">
            <span class="glyphicon glyphicon-menu-left"></span>
          </div>
          <h4 v-show="title">{{book.bookname}}</h4>
          <div id="book-icon">
            <span id="book-share" class="glyphicon glyphicon-share-alt"></span>
            <span id="book-operate" class="glyphicon glyphicon-option-horizontal"></span>
          </div>
        </div>
        <!-- 书籍详细信息 -->
        <div class="book-detail" :style="'height:'+book_detail_height">
          <div class="book-head">
            <img style="display:inline-block;" :src="getPath(book.book_cover)" />
            <div style="color:gray">
              <h4 style="color:#000000;">{{book.bookname}}</h4>
              <p>{{book.author}} ></p>
              <p>{{book.state}}|{{book.booksize}}万字|{{book.popularity}}万人气</p>
              <p>
                <ul style="display: inline;">
                  <li style="display: inline;margin:0 3px;" v-for="(item,index) in book.sample_tags" :key="index"><span>{{item}}</span></li>
                </ul> {{book.BookCP}}
              </p>
            </div>
          </div>
          <div class="book-presen">
            <ul class="book-data">
              <li>
                <span>{{book.collected}}</span><br />
                <span class="celebrity" style="background:#fff7f5;color:#f38b90;">
                  <svg class="icon" aria-hidden="true" :style="collectstyle">
                    <use xlink:href="#icon-aixin_shixin"></use>
                  </svg>
                  {{collecttext}}
                </span>
              </li>
              <li>
                <span>{{book.seastars}}</span><br />
                <span class="celebrity" style="background: #eefefb;color:#10c9c1;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                  </svg>
                  海星
                </span>
              </li>
              <li>
                <span>{{book.comments}}</span><br />
                <span class="celebrity" style="background: #efffff;color:#49c4f0;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                  </svg>
                  评论
                </span>
              </li>
              <li>
                <span>{{book.donation}}</span><br />
                <span class="celebrity" style="background: #fffbef;color:#fbad69;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jinbi"></use>
                  </svg>
                  赞赏
                </span>
              </li>
            </ul>
            <p style="color:gray;font-size:12px;text-align: center;background: #ebebeb;padding:4px;margin:0 10px;border-radius: 12px;">{{book.sample_prof}}</p>
            <div v-html="profile" @click="moreDown" :style="prostyle" style="line-height:24px;overflow: hidden;">
              <!-- 新文预收：修界背锅侠/魔界小白花 cp945876<br />

              连载推广：ABO甜宠cp814848<br />

              ＊＊＊<br />

              “沈宓疯了。”<br />

              自从闻濯回京，几乎打哪儿都能听到这句混账话，他打定了念头不相信，却没忍住派人前去试探——<br />

              结果第一回登门，沈宓当众一头跳了塘；<br />

              第二回登门，沈宓抠烂了自己的双眼；<br />

              第三回登门，沈宓差点把自己撞个稀巴烂；<br />

              第四回登门，闻濯终于也跟着他一起疯了……<br />

              【小剧场】<br />

              沈宓：“座下何人？”<br />

              闻濯：“你的闻娇娇。”<br />

              沈宓：“言辞放浪，满口胡言！”<br />

              闻濯：“胡言与否…总得你亲自尝了才知道。”<br />

              沈宓：我是高贵猫猫，只舔干净毛毛。<br />

              ……<br />

              闻濯：人总是会反复爱上自己的白月光，我也不想的，可那是我心心念念的的白月光啊！<br />

              【阅读提示】：<br />

              毒舌猫系诱受/又疯又宠忠犬攻<br />

              沈宓×闻濯（宓mi四声）<br />

              he。<br />

              每早八点更新。<br />

              别忘了点个关注哦~<br />

              ————<br />

              早期作品推广广告：<br />

              cp657621（同类型权谋/傲娇将军爱上我）<br />

              cp667403（日常校园文/一见钟情的罗曼史）<br />

              cp657461（无限流恐怖/游戏bug是我的忠犬）<br />

              雷点和文笔不敢保证，慎点！<br /> -->
              <!-- {{book.book_profile}} -->
            </div>
            <ul style="margin:0 16px;font-size: 12px;color:gray;">
              <li style="display: inline;margin:0 3px;" id="littletag" v-for="(item,index) in book.detailtags" :key="index">
                <span>{{item}}</span>
              </li>
            </ul>
            <hr style="margin:10px 0;" />
            <div style="height: 30px;display: flex;">
              <b style="margin:0 16px;">查看目录</b>
              <span style="display:inline-block;width: 200px;height:24px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{book.endchapter}}</span>
              <span style="position:absolute;right:16px;">13小时前></span>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="book-comments" @click="opencomments();stopMove()">
          <div style="margin-bottom: 10px;"><b style="margin:0 6px;">评论区</b><span style="position:absolute;right:16px;"><b>></b></span></div>
          <comlist :comlist="comlist" :comlength="comlength" :bookcp="BookCP"></comlist>
        </div>

      </div>
      <!-- <fall2></fall2> -->
      <div style="height:60px;width:100%;"></div>
      <!-- 立即阅读 -->
      <div class="book-read">
        <ul>
          <router-link tag="li" :to="'/download/'+this.BookCP" style="color:#ff8000">
            批量下载
          </router-link>
          <router-link tag="li" :to="'/readbook/'+this.BookCP" style="background: #ff8000;color:white;">
            立即阅读
          </router-link>
          <li @click="CollectBook()" style="color:#ff8000">
            {{collectbtn}}
          </li>
        </ul>
      </div>
    </div>
    <!-- 组件 -->
    <transition name="fade">
      <allcomts @refresh="loadComments()" v-show="comtshow" class="comments" :comlist="comlist" :comlength="comlengthx"
        :bookcp="BookCP"></allcomts>
    </transition>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';
  import fall2 from '@/components/Waterfall/fall2.vue'
  import allcomts from '@/components/BookDetails/allcomts.vue'
  import comlist from '@/components/Waterfall/commenlist.vue'
  export default {
    components: {
      fall2,
      allcomts,
      comlist
    },
    data() {
      return {
        BookCP: this.$route.params.BookCP,
        //这个是获取参数，相当于BookCP是从路由中取出来的
        book: [],
        profile: "",
        title: false,
        style: {
          backgroundColor: ""
        },
        collectstyle: {
          color: ""
        },
        collecttext: "",
        collectbtn: "",
        collectValue: false,
        color: false,
        scrollTop: 0,
        prostyle: {
          padding: "14px",
          height: "140px",
          moreValue: 0
        },
        book_detail_height: "460px",
        comlist: [
          /*{user:"池也池",time:"10-09",text:"哈哈哈哈哈哈哈哈哈哈哈"},
          {user:"池也池",time:"10-09",text:"哈哈哈哈哈哈哈哈哈哈哈"},
          {user:"池也池",time:"10-09",text:"哈哈哈哈哈哈哈哈哈哈哈"},
          {user:"池也池",time:"10-09",text:"哈哈哈哈哈哈哈哈哈哈哈"},
          {user:"池也池",time:"10-09",text:"哈哈哈哈哈哈哈哈哈哈哈"}
          */
        ],
        comtshow: false,
        moreComt: 0,
        readOnly: false,
        showCover: false,
        comlength: 3,
        comlengthx: 10000
      }
    },
    computed: mapState({
      collectBookList: state => state.bookshelf.booklist,
      // collectshowflag:state=>state.bookshelf.collectshowflag
    }),
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      getDetailsServlet() {
        this.$axios({
          url: "http://localhost:8080/myserv2/getBookDataList",
          method: "get",
          params: {
            bookcp: this.BookCP,
            flag: "alone"
          }
        }).then((result) => {
          this.book = result.data[0];
          this.profile = this.book.book_profile;
          // console.log(this.book);
        }).catch(err => console.log(err))
      },
      getPath(path) {
        return path ? require('@/assets/images/' + path) : '';
      },
      CollectOrNot() {
        console.log("??" + JSON.stringify(this.collectBookList));
        let collectValue = false;
        this.collectBookList.forEach((item, index) => {
          if (item.BookCP == this.BookCP) {
            // console.log("这本书编号："+this.BookCP);
            // console.log("遍历书号:"+item.BookCP);
            collectValue = true;
          }
        });
        // console.log(collectValue);
        if (collectValue) {
          this.collectstyle.color = "#f38b90";
          this.collecttext = "已收藏";
          this.collectbtn = "取消收藏";
        } else {
          this.collectstyle.color = "white";
          this.collecttext = "收藏";
          this.collectbtn = "收藏本文";
        }
        return collectValue;
      },
      CollectBook() {
        let user = JSON.parse(localStorage.getItem('user') || '[]');

        console.log("点击时" + this.collectValue);
        if (this.collectValue) {
          this.$store.commit('bookshelf/decrease');
          this.$store.dispatch('bookshelf/popBook', this.BookCP);
          this.collectstyle.color = "white";
          this.collecttext = "收藏";
          this.collectbtn = "收藏本文";
          // 数据库删除
          this.$axios({
            url: "http://localhost:8080/myserv2/getCollectedBook",
            method: "get",
            params: {
              flag: "delbook",
              BookCP: this.book.BookCP,
              userid: user.userid
            }
          }).then((result) => {
            console.log(result.data);
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$store.commit('bookshelf/increase');
          this.$store.dispatch('bookshelf/pushBook', this.book);
          this.collectstyle.color = "#f38b90";
          this.collecttext = "已收藏";
          this.collectbtn = "取消收藏";
          //存入数据库
          this.$axios({
            url: "http://localhost:8080/myserv2/getCollectedBook",
            method: "get",
            params: {
              flag: "addbook",
              BookCP: this.book.BookCP,
              bookname: this.book.bookname,
              book_cover: this.book.book_cover,
              author: this.book.author,
              endchapter: this.book.endchapter,
              userid: "1001"
            }
          }).then((result) => {
            console.log(result.data);
          }).catch(err => {
            console.log(err)
          })
        }
        this.collectValue = !this.collectValue;
        //存入本地
        localStorage.setItem('cbks', JSON.stringify(this.collectBookList));
        let newlocal = JSON.parse(localStorage.getItem('cbks') || '[]');
        console.log(newlocal);
      },
      loadComments() {
        // let localcomlist = JSON.parse(localStorage.getItem('cmts')||'[]'); //这里的cmts是localstorage的内容，如果是第一次存，那就是空的，如果不是，就从cmts中取出来
        // console.log("local绑定数据");
        // console.log(localcomlist);
        //发表评论后的更新数据
        //this.comlist = localcomlist;
        //this.comlengthx = localcomlist.length;
        this.$axios({
          url: "http://localhost:8080/myserv2/getBookCommentsData",
          method: "get",
          params: {
            bookcp: this.BookCP,
            flag: "look"
          }
        }).then((result) => {
          // console.log(result)
          this.comlist = result.data;
          // console.log("评论");
          //console.log(this.comlist);
        }).catch(err => console.log(err))
      },
      // 点击评论框绑定了两个方法：opencomments显示完整评论，stopMove停止背景页面的滚动
      opencomments() {
        this.moreComt++;
        this.comtshow = true;
        this.readOnly = true;
        this.showCover = true;
      },
      //停止页面滚动
      stopMove() {
        let m = function(e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.getElementById("lightbody").addEventListener("touchmove", m, {
          passive: false
        }); //禁止页面滑动
      },
      //开启页面滚动
      Move() {
        let m = function(e) {
          e.preventDefault();
        };
        document.body.style.overflow = ''; //出现滚动条
        document.getElementById("lightbody").removeEventListener("touchmove", m, {
          passive: true
        });
      },
      moreDown() {
        // console.log(this.book_detail_height);
        this.prostyle.moreValue++;
        if (this.prostyle.moreValue % 2 != 0) {
          this.prostyle.height = "auto";
          this.book_detail_height = "1090px";
        } else {
          this.prostyle.height = "140px";
          this.book_detail_height = "460px";
        }
      },
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // console.log("scrollTop.length",scrollTop);
        // console.log(this.color);

        if (scrollTop >= 150) {
          this.style.backgroundColor = "#fdfdfd";
          this.color = false;
          this.title = true;
        } else if (scrollTop < 145) {
          this.style.backgroundColor = "#ffe0e5";
          this.color = false;
          this.title = false;
        }
      }
    },
    mounted() {
      //将本地保存的数据渲染到页面中
      let localcomlist = JSON.parse(localStorage.getItem('cmts') || '[]'); //这里的cmts是localstorage的内容，如果是第一次存，那就是空的，如果不是，就从cmts中取出来
      // // console.log("mounted"+localcomlist.length);
      if (localcomlist.length < 6) {
        localStorage.setItem('cmts', JSON.stringify(this.comlist));
      }
      // console.log(localcomlist);
      this.comlist = localcomlist;
      this.comlengthx = localcomlist.length;

      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener("click", (e) => {
        let thisClassName = e.target.className;
        if (this.moreComt == 0 && thisClassName == "bg-cover") {
          this.comtshow = false;
          this.readOnly = false;
          this.Move();
          this.showCover = false;
        } else if (this.moreComt != 0) {
          this.comtshow = true;
          this.moreComt = 0;
        }
      })
    },
    created() {
      this.getDetailsServlet();
      this.loadComments();
      this.collectValue = this.CollectOrNot();
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
</script>

<style>
  .celebrity {
    display: inline-block;
    width: 68px;
    height: 20px;
    background: skyblue;
    border-radius: 10px;
    /* padding:0 8px; */
  }

  .comments {
    z-index: 99999;
    position: fixed;
    bottom: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active in <2.1.8 */
    {
    opacity: 0
  }

  /* 禁止后台lightbody操作(手动只读) */
  .form-onlyRead {
    pointer-events: none;
  }

  .bg-cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 100;
  }

  /* 评论卡片 */
  .book-comments {
    /* display:none; */
    width: 100%;
    height: auto;
    padding: 10px;
    background: white;
  }

  .book-comments .comli {
    margin-bottom: 10px;
    /* border:1px solid red; */
    width: 100%;
    height: auto;
    position: relative;
    border-bottom: 1px solid lightgray;
  }

  .book-comments .comli .usericon {
    margin: 5px;
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    border: 1px solid red;
  }

  .book-comments .comli .username {
    color: gray;
    display: inline-block;
    font-size: 12px;
    position: absolute;
    top: 8px;
  }

  .book-comments .comli .comt {
    word-wrap: break-word;
    padding: 0 10px 4px 44px;
    height: auto;
  }

  /* 底部阅读书籍 */
  .book-read {
    z-index: 1000;
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0px;
    background: white;
    -webkit-box-shadow: 0px 1px 5px 1.2px lightgray;
  }

  .book-read ul {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
  }

  .book-read ul li {
    flex-grow: 1;
  }

  /* top-title头部 */
  .top-title #book-icon {
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 20px;
  }

  /* 第一个卡片 */
  .book-detail {
    width: 100%;
  }

  .book-detail .book-head {
    width: 100%;
    height: 160px;
    background: #ffe0e5;
    position: relative;
  }

  .book-detail .book-head img {
    margin: auto 12px;
    width: 24%;
    height: 80%;
    display: inline-block;
    position: absolute;
    left: 0px;
  }

  .book-detail .book-head div {
    display: inline-block;
    position: absolute;
    right: 0px;
    width: 70%;
  }

  .book-detail .book-presen {
    width: 100%;
    height: auto;
    /* height: 310px; */
    /* border: 1px solid green; */
    position: absolute;
    top: 190px;
    background: white;
    border-radius: 16px 16px 0 0;
  }

  .book-detail .book-presen .book-data {
    font-size: 13px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 10px 0;
  }

  .book-detail .book-presen .book-data li {
    flex-grow: 1;
  }

  #littletag span {
    background: #ebebeb;
    padding: 3px 6px;
    border-radius: 6px;
  }

  /* 全局||滑动改变样式 */
  .color {
    color: #fff !important;
  }

  .homeNav {
    width: 100%;
    height: 40px;
    color: #000000;
    transition: all linear 0.3s;
    position: fixed;
    top: 0;
    z-index: 98;
    margin: 0 auto;
    background: #ffe0e5;
  }
</style>
