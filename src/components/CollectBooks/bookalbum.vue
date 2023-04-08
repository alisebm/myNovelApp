<template>
  <div>
    <!-- <h2>专辑</h2> -->
    <div style="height: 50px;"></div>
    <ul class="bookalbum_buttons" style="">
      <router-link class="bookalbum_button" tag="li" to="#" style="color:#000000">
        <span class="iconfont icon-yunxiazai1"></span>
        我的下载
      </router-link>
      <router-link class="bookalbum_button" tag="li" to="#" style="color:#000000">
        <span class="iconfont icon-shuqianshoucang"></span>
        最近播放
      </router-link>
    </ul>
    <ul class="bookalbum_card_ul">
      <li v-for="(item,index) in bookalbum_list" :key="index" style="width:100%;display: flex;margin: 10px 0;">
        <!-- <img src="../../assets/images/front13.jpg" /> -->
        <img :src="require('@/assets/images/'+item.url)" />
        <div class="bookalbum_card_msg" style="">
          <span><b>{{item.title}}</b></span>
          <span style="font-size: 13px;color: #7f7f7f;margin-top:6px;">{{item.capital}} {{item.last_update}}更新</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bookalbum_list:[{
          url:'front13.jpg',
          title:'路过人间',
          capital:'路过人间 番外下',
          last_update:'2022-03-15'
        },{
          url:'front12.jpg',
          title:'急诊科观察病历',
          capital:'急诊科观察病历 156',
          last_update:'2023-02-04'
        }]
      }
    }
  }
</script>

<style>
  .bookalbum_buttons {
    display: flex;
    justify-content: space-between;
    margin: 8px 30px;
  }

  .bookalbum_button {
    width: 44%;
    text-align: center;
    color: #000000;
    height: 40px;
    line-height: 40px;
    background: #efefef;
    border-radius: 16px;
  }

  .bookalbum_card_ul {
    width: 100%;
    padding: 0 10px;
  }

  .bookalbum_card_ul li img {
    width: 70px;
    height: 70px;
    border-radius: 6px;
    box-shadow:1px 0px 4px 0px rgba(0,0,0,0.5);
  }

  .bookalbum_card_msg {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
