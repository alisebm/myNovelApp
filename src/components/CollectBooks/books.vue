<template>
  <div id="mybookshelf">
    <!-- <h2>书架</h2> -->
    <!-- 两种数据调用方法
    <p>{{this.$store.state.name}}</p>
    <p>{{name}}</p> -->
    <!-- 调用 mutations 对象，在methods里调用，也可以传参
    <p>{{count}}</p>
    <button @click="increase()">增加</button> -->
    <!-- 调用getters中的函数
    <p>{{this.$store.getters.optCount}}</p>
    <p>{{this.$store.state.bookshelf.collectbookcount}}</p> -->
    <!-- 头部 -->
    <div id="lightbody2" :class="[readOnly===true?'form-onlyRead':'']">
      <div class="shelf_top">
        <ul id="shelfmap" class="shelf_classify">
          <li @click="changepage(item.mapname)" v-for="(item,index) in maplist" :key="index">
            <span style="width:50%;height:100%;display:inline-block;" :class="item.classname">{{item.mapname}}</span>
          </li>
        </ul>
        <div class="button2">
          <svg style="width:30px;height:30px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo1"></use>
          </svg>
          <svg v-show="MapShow" id="openMap" style="width:30px;height:30px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-bars"></use>
          </svg>
        </div>
      </div>
      <bookshelf v-show="shelfshow" :shelfbooklist="shelfbooklist" :slidelist="slidelist" :slideshow="slideshow"
        :checkshow="checkshow"></bookshelf>
      <booklist v-show="listshow"></booklist>
      <bookalbum v-show="albumshow"></bookalbum>
      <history v-show="historyshow"></history>
      <transition name="fade">
        <div id="bg-cover" v-show="showCover"></div>
      </transition>
    </div>
    <operate class="operatebook" v-show="operateshow" style="position: absolute;top:50px;right:10px;z-index: 1000;position:fixed;"></operate>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';
  import bookshelf from '@/components/CollectBooks/bookshelf.vue';
  import booklist from '@/components/CollectBooks/booklist.vue';
  import bookalbum from '@/components/CollectBooks/bookalbum.vue';
  import history from '@/components/CollectBooks/history.vue';
  import operate from '@/components/CollectBooks/operatemap.vue';
  export default {
    components: {
      bookshelf,
      booklist,
      bookalbum,
      history,
      operate
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
        shelfbooklist: JSON.parse(localStorage.getItem('cbks') || '[]'),
        maplist: [{
            mapname: '书架',
            classname: '书架'
          },
          {
            mapname: '书单',
            classname: '书单'
          },
          {
            mapname: '专辑',
            classname: '专辑'
          },
          {
            mapname: '历史',
            classname: '历史'
          }
        ],
        shelfshow: true,
        MapShow: false,
        listshow: false,
        albumshow: false,
        historyshow: false,
        showCover: false,
        readOnly: false,
        operateshow: false,
        slideshow: true,
        checkshow: false
        // border-bottom:3px solid #ff8000;
      }
    },
    methods: {
      increase() {
        // commit调用 mutations 方法
        // this.$store.commit('increment');
        // this.$store.commit('bookshelf/increase');
        // this.$store.commit('subtract','11');
        // dispatch调用 actions 方法
        // this.$store.dispatch('add');
      },
      changepage(mapname) {
        console.log(mapname);
        this.shelfshow = false;
        this.listshow = false;
        this.albumshow = false;
        this.historyshow = false;
        let map1 = document.getElementsByClassName("书架");
        let map2 = document.getElementsByClassName("书单");
        let map3 = document.getElementsByClassName("专辑");
        let map4 = document.getElementsByClassName("历史");
        map1[0].style.color = "black";
        map2[0].style.color = "black";
        map3[0].style.color = "black";
        map4[0].style.color = "black";
        map1[0].style["border-bottom"] = "";
        map2[0].style["border-bottom"] = "";
        map3[0].style["border-bottom"] = "";
        map4[0].style["border-bottom"] = "";
        // console.log(map1, map2, map3, map4);
        if (mapname == "书架") {
          this.shelfshow = true;
          this.MapShow = true;
          map1[0].style.color = "#ff8000";
          map1[0].style["border-bottom"] = "3px solid #ff8000";
        } else {
          this.MapShow = false;
        }
        if (mapname == "书单") {
          this.listshow = true;
          map2[0].style.color = "#ff8000";
          map2[0].style["border-bottom"] = "3px solid #ff8000";
        }
        if (mapname == "专辑") {
          this.albumshow = true;
          map3[0].style.color = "#ff8000";
          map3[0].style["border-bottom"] = "3px solid #ff8000";
        }
        if (mapname == "历史") {
          this.historyshow = true;
          map4[0].style.color = "#ff8000";
          map4[0].style["border-bottom"] = "3px solid #ff8000";
        }
      },
      getCollectedBooklist() {
        let user = JSON.parse(localStorage.getItem('user') || '[]');
        console.log(user);
        this.$axios({
          url: "http://localhost:8080/myserv2/getCollectedBook",
          method: "get",
          params: {
            userid: user.userid,
            flag: 'collected'
          }
        }).then((result) => {
          this.shelfbooklist = result.data;
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
      }
    },
    computed: mapState({
      OpenMapCount: state => state.bookshelf.openOperateMapNumber
      // name:state=>state.name,
      // count:state=>state.count,
      // 名为count的方法，返回state中的count
      // 不要引用本页面的data中的对象
      // collectbookcount:state=>state.bookshelf.collectbookcount

    }),
    mounted() {
      let map1 = document.getElementsByClassName("书架");
      map1[0].style.color = "#ff8000";
      map1[0].style["border-bottom"] = "3px solid #ff8000";

      this.changepage("书架");

      document.getElementById("bg-cover").addEventListener("click", (e) => {
        // console.log("111");

        this.showCover = !this.showCover;
        this.operateshow = !this.operateshow;
      });

      document.getElementById("openMap").addEventListener("click", (e) => {
        console.log(this.operateshow);
        this.showCover = !this.showCover;
        this.operateshow = !this.operateshow;
      });
      this.getCollectedBooklist();
    },
    created() {
      this.operateshow = false;
      // this.changepage("书架");
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

  #bg-cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 200;
  }

  /* 头部 */
  .shelf_top {
    /* border:1px solid black; */
    width: 100%;
    padding: 10px;
    height: 50px;
    display: flex;
    position: fixed;
    z-index: 100;
    background: white;
  }

  .shelf_top button {
    width: 46px;
    height: 30px;
    background: white;
    color: #ff8000;
    border: 1px solid #ff8000;
    border-radius: 5px;
    margin: 1px;
  }

  .shelf_top .button2 {
    position: fixed;
    right: 7px;
    width: 16%;
    display: flex;
  }

  .shelf_top .shelf_classify {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
  }

  .shelf_top .shelf_classify li {
    /* border: 1px solid red; */
    flex-grow: 1;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .shelf_top .shelf_classify li .classifyname {
    display: inline-block;
    width: 50%;
    height: 100%;
    border-bottom: 3px solid #ff8000;
  }
</style>
