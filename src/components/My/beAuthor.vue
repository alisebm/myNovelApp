<template>
  <div>
    <toptitle>成为作者</toptitle>
    <div style="height: 50px;"></div>
    <div style="text-align:center;display: flex;flex-direction: column;align-items: center;justify-content: center;">
      <p style="font-size:20px;width: 60%;border-bottom: 1px solid gainsboro;padding: 8px;"><b>旅行者空空</b></p>
      <p style="margin: 20px;">
        作者名只能使用汉字、英文及数字，如您的昵称内含有其他信息，请先修改昵称后再尝试开通作者身份！
      </p>
      <div style="width:70%;border-bottom: 1px solid gainsboro;">
        <span style="color: #FF8000;">+86</span>
        <span style="font-size: 20px;"><b>198****5352</b></span>
      </div>
      <div style="position:relative;width:70%;border-bottom: 1px solid gainsboro;">
        <input type="text" style="border:0;width:100%;height:40px;margin-top:10px;" placeholder="请输入验证码" />
        <input style="position: absolute;top:15px;left:170px;height:30px;ling-height:30px;background: #FF8000;border: 0;border-radius: 5px;padding:0 10px;color: white;" value="获取验证码" type="button"/>
      </div>

      <input @click="tobeAuthor()" style="width: 80%;height:40px;border-radius: 20px;margin-top: 80px;border: 0;background: #FF8000;color: white;font-size: 18px;" type="button" value="确定" />
    </div>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue'
  export default {
    components: {
      toptitle
    },
    methods:{
      tobeAuthor(){
        this.$store.state.isAuthor = true;
        this.$router.push('/my');
      }
    }

  }
</script>

<style>
</style>
