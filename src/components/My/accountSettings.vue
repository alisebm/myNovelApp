<template>
  <div style="background: #f9f9f9;height: 820px;">
    <!-- 顶部title -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <router-link to="/my" style="display: inline-block;" class="top-reback">
        <span class="glyphicon glyphicon-menu-left"></span>
      </router-link>
      <h4><b>个人设置</b></h4>
    </div>
    <div style="height: 40px;"></div>
    <!-- 切换账号 -->
    <ul id="actset_all">
      <router-link tag="li" to="/login/login" class="actset_second" style="position: relative;">切换账号<span style="position: absolute;right:10px;color:#7f7f7f;" class="iconfont icon-arrow"></span></router-link>
      <ul class="actset_second">
        <li>个人信息<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>账号与安全<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
      </ul>
      <ul class="actset_second">
        <li>消息通知<span style="position: absolute;right:0;" class="iconfont icon-kaiguananniu"></span></li>
        <li>应用内屏幕常亮<span style="position: absolute;right:0;" class="iconfont icon-kaiguananniu"></span></li>
        <li>日夜模式跟随系统<span style="position: absolute;right:0;" class="iconfont icon-kaiguananniu"></span></li>
      </ul>
      <ul class="actset_second">
        <li>用户协议<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>隐私协议<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>个人信息与权限<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>个人信息收集清单<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>第三方信息共享清单<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
      </ul>
      <ul class="actset_second">
        <li>青少年模式<span style="position: absolute;right:20px;">未开启</span><span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>深渊海沟管理局<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>清除缓存<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>黑名单<span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
        <li>关于文学城<span style="position: absolute;right:20px;">v2.5.1</span><span style="position: absolute;right:0;" class="iconfont icon-arrow"></span></li>
      </ul>
      <li class="actset_second" style="position: relative;color: #FF8000;text-align: center;">退出登录</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style>
  #actset_all{
    height:auto;
    width: 100%;
    padding:0 10px;
  }
  #actset_all .actset_second{
    margin-top:10px;
    background: white;
    padding: 10px;
    border-radius: 10px;
  }
  #actset_all .actset_second li{
    line-height: 36px;
    position: relative;
  }
  #actset_all .actset_second li span{
    color:#7f7f7f;
  }
</style>
