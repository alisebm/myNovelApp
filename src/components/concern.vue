<template>
  <div style="height:auto;background: #f7f7f7;">
    <!-- <h2>关注</h2> -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <h4><b>关注</b></h4>
    </div>
    <div style="height:40px;"></div>
    <ul class="ranklist_all">
      <li class="ranklist_first" v-for="(item,index) in concerned_list" :key="index">
        <div style="width: 60px;height: 100%;">
          <img class="ranklist_user" :src="require('@/assets/images/'+item.user_url)" />
        </div>
        <div style="width: 90%;height: 100%;">
          <span><b>{{item.username}}</b></span><br />
          <span style="font-size: 13px;color: #7f7f7f;">{{item.updatetime}}</span>

          <div class="textarea" v-html="item.textwords"></div>

          <div class="ranklist_card" v-if="item.havebook=='true'">
            <img class="ranklist_bookcover" :src="require('@/assets/images/'+item.bookcover_url)" />
            <div style="margin:6px 10px;">
              <span><b>{{item.bookname}}</b></span><br />
              <span style="font-size: 13px;">{{item.update_chapter}}</span>
            </div>
          </div>

          <div v-else="item.havebook=='false'" style="text-align: right;">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>{{item.likes}}</span>

            <span class="iconfont icon-pinglun1"></span>
            <span>{{item.replies}}</span>
          </div>

        </div>
      </li>
    </ul>
    <div style="height:60px;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        concerned_list: [{
          id: 1,
          user_url: 'front10.jpg',
          username: '桃白百',
          updatetime: '01-29',
          text: '听说大家今天拿到了很多海星',
          havebook: 'true',
          bookcover_url: 'front13.jpg',
          bookname: '池鱼',
          update_chapter: '沈香香',
          likes: 0,
          replies: 0
        }, {
          id: 2,
          user_url: 'front10.jpg',
          username: '桃白百',
          updatetime: '01-29',
          text: '',
          havebook: 'true',
          bookcover_url: 'front13.jpg',
          bookname: '池鱼',
          update_chapter: '沈香香',
          likes: 0,
          replies: 0
        }, {
          id: 3,
          user_url: 'front10.jpg',
          username: '桃白百',
          updatetime: '01-29',
          text: '听说大家今天拿到了很多海星听说大家今天拿到了很多海星<br/>听说大家今天拿到了很多海星听说大家今天拿到了很多海星',
          havebook: 'false',
          bookcover_url: '',
          bookname: '',
          update_chapter: '',
          likes: 28,
          replies: 35
        }, {
          id: 4,
          user_url: 'front10.jpg',
          username: '桃白百',
          updatetime: '01-29',
          text: '听说大家今天拿到了很多海星听说大家今天拿到了很多海星听说大家今天拿到了很多海星听说大家今天拿到了很多海星',
          havebook: 'true',
          bookcover_url: 'front13.jpg',
          bookname: '池鱼',
          update_chapter: '沈香香',
          likes: 0,
          replies: 0
        }]
      }
    },
    methods: {
      getConcernlist() {
        this.$axios({
          url: "http://localhost:8080/myserv2/getBookDataList",
          method: "get",
          params: {
            flag: 'concern'
          }
        }).then((result) => {
          this.concerned_list = result.data;
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    created() {

    },
    mounted() {
      this.getConcernlist();
    }
  }
</script>

<style>
  .ranklist_all .ranklist_first {
    padding: 16px;
    /* height: 180px; */
    margin-top: 10px;
    display: flex;
    background: white;
  }

  .ranklist_all .ranklist_first .ranklist_user {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .ranklist_all .ranklist_first .ranklist_card {
    background: #f7f7f7;
    height: 100px;
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
  }

  .ranklist_all .ranklist_first .ranklist_card .ranklist_bookcover {
    width: 60px;
  }
</style>
