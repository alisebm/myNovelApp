<template>
  <div>
    <div style="height:40px;width:100%;"></div>
    <!-- 顶部title -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <div style="display: inline-block;" @click="goBack()" class="top-reback">
        <span class="glyphicon glyphicon-menu-left"></span>
      </div>
      <h4><b>我的消息</b></h4>
    </div>
    <!-- 消息类别 -->
    <ul class="infor_all" style="">
      <li class="infor_first">
        <span class="infor_second" style="background: #ddfbfb;">
          <svg style="font-size: 40px;color:#18e6e3;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-bell"></use>
          </svg>
        </span>
        <br />
        <span style="color: #000000;">鱼塘评论</span>
      </li>
      <router-link tag="li" to="#" class="infor_first">
        <span class="infor_second" style="background: #e4f5ff;">
          <svg style="font-size: 40px;color:#46bbfe;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun1"></use>
          </svg>
        </span>
        <br />
        <span style="color: #000000;">作品评论</span>
      </router-link>
    </ul>
    <!-- 系统消息 -->
    <ul class="infor_system">
      <li style="display: flex;margin-bottom: 18px;" class="infor_system_list" v-for="(item,index) in infor_system"
        :key="index">
        <svg style="font-size: 50px;color:#46bbfe;margin:0 10px;" class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <div style="position: relative;">
          <span style="font-size: 15px;"><b>{{item.name}}</b></span>
          <span style="position: absolute;right:0;font-size: 13px;color: #7F7F7F;">{{item.time}}</span>
          <br />
          <span class="infor_exact">{{item.lastInfor}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        infor_system: [{
          icon: 'icon-icon-test',
          name: '系统通知',
          time:'2022-12-23',
          lastInfor: '亲爱的鱼宝，我们对用户名设置与管理进行了升级。'
        }, {
          icon: 'icon-xingqiu2',
          name: '文学城官方',
          time:'02-03',
          lastInfor: '亲爱的鱼宝，我们对用户名设置与管理进行了升级。'
        }]
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style>
  .infor_all {
    display: flex;
    height: 140px;
    text-align: center;
    padding: 30px;
  }

  .infor_first {
    width: 50%;
    height: 100%;
  }

  .infor_first .infor_second {
    padding: 10px;
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #ddfbfb;
    border-radius: 20px;
  }

  .infor_system {
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .infor_system .infor_exact {
    color: #7F7F7F;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
