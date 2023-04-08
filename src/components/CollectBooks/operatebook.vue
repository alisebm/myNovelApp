<template>
  <div>
    <div class="operate_top">
      <span style="width:15%;" @click="goBack()">取消</span>
      <span style="width:70%;font-size: 15px;"><b>书架(已选{{this.xnumber}}本)</b></span>
      <span style="width:15%;" @click="selectAll()">{{collecttext}}</span>
    </div>

    <bookshelf :shelfbooklist="shelfbooklist" :slidelist="slidelist" :slideshow="slideshow" :checkshow="checkshow"
      style="position: absolute;top:-25px;"></bookshelf>

    <div class="operate_bottom">
      <span style="border-right:1px solid #a6a4af;">移动至分组</span>
      <span style="color:red" @click="delBooks()">删除</span>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';
  import bookshelf from '@/components/CollectBooks/bookshelf.vue'
  export default {
    data() {
      return {
        selectall: false,
        collecttext: "全选",
        slideshow: false,
        slidelist: [],
        checkshow: true,
        shelfbooklist: JSON.parse(localStorage.getItem('cbks') || '[]')
      }
    },
    components: {
      bookshelf
    },
    computed: mapState({
      xnumber: state => state.bookshelf.selectNumber
    }),
    mounted() {

    },
    methods: {
      goBack() {
        this.$store.commit("bookshelf/selectAll", 0);
        this.$router.go(-1);
      },
      selectAll() {
        console.log(this.shelfbooklist);
        if (this.selectall == false) {
          this.shelfbooklist.forEach((item, index) => {
            if (item.collect == false) {
              item.collect = true;
            }
          })
          this.$store.commit("bookshelf/selectAll", this.shelfbooklist.length);
          this.collecttext = "全不选";
        } else {
          this.shelfbooklist.forEach((item, index) => {
            if (item.collect == true) {
              item.collect = false;
            }
          })
          this.$store.commit("bookshelf/selectAll", 0);
          this.collecttext = "全选";
        }
        this.selectall = !this.selectall;
      },
      delBooks() {
        console.log("delBook");
        let user = JSON.parse(localStorage.getItem('user') || '[]');

        this.shelfbooklist.forEach((item, index) => {
          if (item.collect == true) {
            // console.log(item.BookCP);
            //数据库删除
            this.$axios({
              url: "http://localhost:8080/myserv2/getCollectedBook",
              method: "get",
              params: {
                BookCP: item.BookCP,
                userid: user.userid,
                flag: "delbook"
              }
            }).then((result) => {
              // console.log(result.data);
              localStorage.setItem('cbks', JSON.stringify(result.data));
              let newdata = localStorage.getItem('cbks');
              this.shelfbooklist = JSON.parse(localStorage.getItem('cbks') || '[]');
            }).catch(err => {
              console.log(err)
            })
          }
        });
        this.$store.commit("bookshelf/selectAll", 0);
      }
    },
    created() {

    }
  }
</script>

<style>
  .operate_bottom {
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    align-items: center;
    text-align: center;
    background: white;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    font-size: 16px;
  }

  .operate_bottom span {
    flex-grow: 1;
    line-height: 60px;
  }

  /* 头部 */
  .operate_top {
    height: 40px;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f9f9f9;
    position: fixed;
    top: 0px;
    z-index: 100;
  }

  .operate_top span {
    display: inline-block;
    text-align: center;
  }
</style>
