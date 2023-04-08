<template>
  <div style="height:auto;">
    <div style="height:40px;width:100%;"></div>
    <!-- 顶部title -->
    <toptitle>
      <template>签到</template>
    </toptitle>
    <!-- 基本签到信息 -->
    <div class="signIn_founda" style="position:relative;display:flex;padding:10px;width:100%;">
      <div>
        <span style="font-size:16px;">连续签到 <span style="color: #FF8000;font-size:25px;"><b>{{this.$store.state.signdays}}</b></span>
          天</span><br />
        <span style="font-size:12px;color: #7F7F7F;">签到得海星可以投喂给作者大大哦！</span>
      </div>
      <div id="signbtn" class="signbtn" @click.once="signup()">{{this.signtext}}</div>
    </div>
    <!-- 当日卡片 -->
    <div class="signcard">
      <div class="top">
        <span style="text-align: left;">{{this.year}}年{{this.month}}月{{this.day}}日</span>
        <span style="text-align: center;">{{this.getLunarDay.lunarYear}} {{this.getLunarDay.dateStr}}</span>
        <span style="text-align: right;">{{this.week}}</span>
      </div>
      <div class="center">
        <span v-html="ok" style="width:40%;color:#FF8000;"></span>
        <span style="width:33%;height:100%;display:flex;flex-direction: column;">
          <span style="border-radius:10px 10px 0 0;background: #FF8000;height:25%;line-height:24px;color:white;">{{this.month}}月</span>
          <span style="border-radius: 0 0 10px 10px;background: #F9C898;height:75%;line-height:70px;font-size: 30px;color:#FF8000;">{{this.day}}</span>
        </span>
        <span v-html="no" style="width:40%;color: #46AB8B;"></span>
      </div>
      <span class="okOrnoBg1">宜</span>
      <span class="okOrnoBg2">忌</span>
    </div>
    <!-- 日历 -->
    <div class="calendar" style="margin-top:20px;">
      <p style="margin:0 47px;color:#FF8000;font-size: 18px;border-bottom: 1px solid #f3f3f3;">
        <svg class="icon" aria-hidden="true" style="font-size: 20px;">
          <use xlink:href="#icon-icon"></use>
        </svg>
        <b>签到日历</b>
      </p>
      <calendar></calendar>
    </div>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue';
  import calendar from '@/components/My/newCalendar.vue';
  import {
    getLunar
  } from 'chinese-lunar-calendar';
  export default {
    components: {
      toptitle,
      calendar,
      getLunar
    },
    data() {
      return {
        getLunarDay: '',
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        week:new Date().getDay(),
        signdays: this.$store.state.signdays,
        signtext: '签到',
        ok: '追剧<br/>蹦迪<br/>送礼物<br/>',
        no: '上课睡觉<br/>吃醋<br/>吃夜宵<br/>'
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      signup() {
        console.log("已签到");
        let signbtn = document.getElementById("signbtn");
        signbtn.style.background = "#b7b7b7";
        this.signtext = "已签到";
        this.$store.commit('signdaysup');
      },
      getDate() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var weekday = now.getDay(); //得到周几
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        this.week = arr_week[weekday];
        this.year = year;
        this.month = month;
        this.day = day;
        // 获取农历
        this.getLunarDay = getLunar(this.year, this.month, this.day)
        // console.log(this.getLunarDay)
      }
    },
    mounted() {
      this.getDate();
    }
  }
</script>

<style>
  .signbtn {
    width: 20%;
    position: absolute;
    right: 10px;
    top: 20px;
    text-align: center;
    height: 36px;
    line-height: 36px;
    font-size: 20px;
    color: white;
    border-radius: 18px;
    background: #FF8000;
  }

  .signcard {
    position: relative;
    margin: 10px 16px;
    padding: 10px;
    height: 140px;
    display: flex;
    flex-direction: column;
    border: 1px solid #F7F7F7;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 4px #7F7F7F;
  }

  .signcard .top {
    display: flex;
    width: 100%;
    height: 18%;
  }

  .signcard .top span {
    width: 33%;
    font-size: 12px;
    color: #7F7F7F;
  }

  .signcard .center {
    display: flex;
    width: 100%;
    height: 80%;
    text-align: center;
    align-items: center;
  }

  .okOrnoBg1,
  .okOrnoBg2 {
    display: inline-block;
    font-size: 35px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    text-align: center;
  }

  .okOrnoBg1 {
    color: rgba(255, 128, 0, 0.3);
    border: 8px solid rgba(255, 128, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .okOrnoBg2 {
    color: rgba(70, 171, 139, 0.3);
    border: 8px solid rgba(70, 171, 139, 0.3);
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
