<template>
  <div style="background: #f9f9f9;">

    <div id="my_msg">
      <div style="display: flex;height:70px;">
        <img src="../../assets/images/front10.jpg" style="width:50px;height:50px;border-radius: 25px;"/>
        <div style="padding-left:15px;display: inline-block;width:76%;height:50px;">
          <span style="font-size: 16px;"><b>{{this.$store.state.username}}</b></span><br/>
          <span style="font-size: 13px;color:#7f7f7f">UID:{{this.$store.state.userid}}</span>
        </div>
        <router-link to="/myhome" style="display: inline-block;color: #7f7f7f;text-decoration: none;" >
          <span style="position: absolute;right:0;">
            <span>空间</span>
            <span class="iconfont icon-arrow"></span>
          </span>
        </router-link>
     </div>
     <ul style="width:100%;height:40px;display: flex;text-align: center;">
       <li style="width:30%;">
         <span>3</span><br/>
         <span>关注</span>
       </li>
       <li style="width:30%;" v-if="this.$store.state.isAuthor == true">
         <span>3</span><br/>
         <span>读者</span>
       </li>
       <router-link to="/signin" tag="li" style="width:50%;position:relative;">
         <svg class="icon" aria-hidden="true" style="font-size: 30px;">
           <use xlink:href="#icon-icon"></use>
         </svg>
         <span style="font-size: 18px;color:#7f7f7f;font-family: '华文彩云';"><b>签到</b></span>
         <div style="position: absolute;right:0;bottom:0;height:8px;width:140px;border-radius: 4px;background: linear-gradient(to right, #ff8000, white);"></div>
       </router-link>
     </ul>
    </div>

    <div id="my_create_center" v-if="this.$store.state.isAuthor == true">
      <p><b>创作中心</b></p>
      <ul id="my_create_ul" style="display: flex;justify-content: space-around;text-align: center;">
        <router-link tag="li" to="/myworks">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-shuqian1"></span><br/>
          <p style="color: #000000;">作品</p>
        </router-link>
        <router-link tag="li" to="/createnewbook">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-tianjiashuqian1"></span><br/>
          <p style="color: #000000;">挖坑</p>
        </router-link>
        <router-link tag="li" to="/mydrafts">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-shuqianshoucang"></span><br/>
          <p style="color: #000000;">草稿箱</p>
        </router-link>
      </ul>
    </div>

    <div id="my_wallet" style="">
      <p style="position:relative;">
        <b>我的钱包</b>
        <span style="position: absolute;right:0;" class="iconfont icon-arrow"></span>
      </p>
      <ul style="display: flex;text-align: center;">
        <li style="width: 25%;">
          <span style="color: #FF8000;">24.00</span><br/>
          <span style="font-size: 13px;color:#7f7f7f">代币</span>
        </li>
        <li style="width: 25%;">
          <span>127</span><br/>
          <span style="font-size: 13px;color:#7f7f7f">海星</span>
        </li>
        <router-link to="/recharge" tag="li" style="width: 50%;position: relative;">
          <svg class="icon" aria-hidden="true" style="font-size: 30px;">
            <use xlink:href="#icon-after-sale"></use>
          </svg>
          <span style="font-size: 18px;color:#7f7f7f;font-family: '华文彩云';"><b>充值</b></span>
          <div style="position: absolute;right:0;bottom:0;height:8px;width:140px;border-radius: 4px;background: linear-gradient(to right, #ff8000, white);"></div>
        </router-link>
      </ul>
    </div>
    <div id="my_function">
      <ul id="my_function_ul" style="display: flex;flex-wrap: wrap;">
        <router-link style="width:25%;text-align: center;" tag="li" :to="'/'+item.routerlink" v-for="(item,index) in my_func_list" :key="index">
          <!-- <span :class="'iconfont '+item.icon" style="color: #FF8000;"></span><br/> -->
          <svg class="icon" aria-hidden="true" style="font-size: 30px;color: #FF8000;">
            <use :xlink:href="'#'+item.icon"></use>
          </svg>
          <p style="color: #000000;">{{item.text}}</p>
        </router-link>
      </ul>
    </div>

    <div id="my_service">
      <p><b>我的服务</b></p>
      <ul id="my_service_ul" style="display: flex;">
        <li>
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-audio"></span><br/>
          <p style="color: #000000;">帮助中心</p>
        </li>
        <router-link tag="li" to="/actsettings">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-shezhi"></span><br/>
          <p style="color: #000000;">个人设置</p>
        </router-link>
        <router-link tag="li" to="/beauthor" v-if="this.$store.state.isAuthor == false">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-qianyue"></span><br/>
          <p style="color: #000000;">成为作者</p>
        </router-link>
        <router-link tag="li" to="/beauthor" v-else-if="this.$store.state.isAuthor == true">
          <span style="font-size: 30px;color: #FF8000;" class="iconfont icon-qianyue"></span><br/>
          <p style="color: #000000;">申请签约</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        my_func_list:[{
          icon:'icon-pinglun1',
          text:'我的消息',
          routerlink:'information'
        },{
          icon:'icon-balance-list',
          text:'我的订阅',
          routerlink:'mypurchase'
        },{
          icon:'icon-fenlei1',
          text:'我的书单',
          routerlink:'mybooklist'
        },{
          icon:'icon-aixin_shixin',
          text:'关注主页',
          routerlink:'myconcern'
        },{
          icon:'icon-award',
          text:'我的成就',
          routerlink:'myachievement'
        },{
          icon:'icon-bar-chart-o',
          text:'我的等级',
          routerlink:'mygrade'
        },{
          icon:'icon-bag',
          text:'我的装扮',
          routerlink:'mydressup'
        }]
      }
    },
    mounted() {
      this.$store.commit('login');
    }
  }
</script>

<style>
  #my_msg,#my_wallet,#my_function,#my_service,#my_create_center{
    width:100%;
    background: #ffffff;
    padding:10px;
    /* border: 1px solid red; */
  }
  #my_msg {
    height: 140px;
  }
  #my_create_center {
    height: 120px;
    margin-top: 10px;
  }
  #my_wallet {
    height: 90px;
    margin-top: 10px;
  }
  #my_function{
    height:120px;
    margin-top:10px;
  }
  #my_service{
    height:240px;
    margin-top:10px;
  }
  #my_service_ul li{
    text-align: center;
    width:25%;
    /* border:1px solid red; */
  }
  #my_service_ul li span{
    color:#ff8000;
  }
</style>
