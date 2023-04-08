<template>
  <div style="height: auto;">
    <div style="height:40px;width:100%;"></div>
    <!-- 顶部title -->
      <toptitle>
        <template>充值</template>
      </toptitle>
    <!-- 充值列表 -->
    <ul class="recharge_all">
      <li @click="change(index)" :id="'relist_'+index" class="recharge_first" v-for="(item,index) in rechargelist" :key="index">
        <svg style="font-size: 36px;margin-left:25px;" class="icon" aria-hidden="true">
          <use xlink:href="#icon-jinbi2"></use>
        </svg>
        <span style="color: #FF8000;font-size: 18px;">￥{{item.money}}</span>
        <span style="font-size: 16px;">{{item.ilmoney}}玉佩</span>
        <span style="color: #7F7F7F;">赠送{{item.gift}}海星</span>
      </li>
    </ul>
    <!-- 充值按钮 -->
    <div @click="purchase()" style="width: 100%;padding:0 16px;">
      <button v-model="choice" class="rechargebtn">充值</button>
    </div>
    <!-- 温馨提示 -->
    <div style="width: 100%;padding:10px;height: auto;font-size:16px;">
      <span style="font-size: 17px;">温馨提示：</span><br/>
      1.货币兑换比例：充值1元人民币=100玉佩。<br/>
      2.充值点数：在文学城内（包括客户端和网页）通用。<br/>
      3.充值后不支持退款。如您在充值玉佩后，月未发生变化，您可以至【个人设置】-【清除缓存】，或者重新登陆账号后进入软件查看。<br/>
      4.其他联系方式：<br/>
      客服电话：<span style="color:#FF8000;">400-400-4000</span>（周一到周五10:00-12:00，13:00-18:00在线）<br/><br/>
      点击充值代表您已阅读过<span style="color:#FF8000;">《文学城平台用户协议》</span>
    </div>
    <!-- 顶上去 -->
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue'
  export default{
    components:{
      toptitle
    },
    data(){
      return{
        choice:0,
        rechargelist:[{
          index:0,
          money:6,
          ilmoney:600,
          gift:6
        },{
          index:1,
          money:10,
          ilmoney:1000,
          gift:10
        },{
          index:2,
          money:20,
          ilmoney:2000,
          gift:20
        },{
          index:3,
          money:50,
          ilmoney:5000,
          gift:55
        },{
          index:4,
          money:100,
          ilmoney:10000,
          gift:120
        },{
          index:5,
          money:200,
          ilmoney:20000,
          gift:240
        }]
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      change(index){
        for(let i=0;i<this.rechargelist.length;i++){
          if(i==index){
            let choice = document.getElementById('relist_'+index);
            choice.style.background="#FFDDAA";
            this.choice = index;
          }else{
            let other = document.getElementById('relist_'+i);
            other.style.background="";
          }
        }
      },
      purchase(){
        for(let i=0;i<this.rechargelist.length;i++){
          if(i==this.choice){
            alert('您即将支付'+this.rechargelist[i].money+'元');
          }
        }
      }
    },
    mounted(){
      this.change(0);
    }
  }
</script>

<style>
  .recharge_all{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:300px;
    padding:20px;
  }
  .recharge_all .recharge_first{
    width:32%;
    height:45%;
    border: 1px solid #FF8000;
    border-radius: 10px;
    text-align: center !important;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content: center;
  }
  .rechargebtn{
    width:100%;
    height:50px;
    background: #FF8000;
    border: 0;
    border-radius: 5px;
    color: white;
  }
</style>
