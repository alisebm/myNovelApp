<template>
  <div style="text-align:center;margin:20px 0;">
    <router-link to="/actsettings" style="display: inline-block;position: absolute;left:10px">
      <span class="glyphicon glyphicon-menu-left"></span>返回
    </router-link>
    <router-link to="/login/login" class="btn" id="log1">
      <span>登录</span>
    </router-link>
    <router-link to="/login/register" class="btn" id="reg1">
      <span>注册</span>
    </router-link>
    <div id="form" style="margin-top:60px;">
      <div class="input-group">
        <span class="input-group-addon" style="width: 80px;">手机号</span>
        <input v-model="userid" type="text" class="form-control" placeholder="请输入手机号" aria-describedby="basic-addon1">
      </div>
      <div class="input-group">
        <span class="input-group-addon" style="width: 80px;">密码</span>
        <input v-model="userpsd" type="password" class="form-control" placeholder="请输入密码" aria-describedby="basic-addon1">
      </div>
      <div class="input-group">
        <button @click="logbtn" id="submit" type="submit" class="input-group-addon">登录</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        userid: '',
        userpsd: ''
      }
    },
    methods: {
      logbtn() {
        this.$axios({
          url: "http://localhost:8080/myserv2/logIn",
          method: "get",
          params: {
            flag: "login",
            phone: this.userid,
            psd: this.userpsd
          }
        }).then((result) => {
          console.log(result.data);
          if (result.data.length <= 0) {
            alert("账号不存在，请检查后重新输入");
          } else {
            localStorage.setItem('user', JSON.stringify(result.data[0]));
            this.$store.commit('login');
            this.$router.push('/my');
          }
        }).catch((err) => {
          console.log(err);
        })
        // alert("当前登录账号:" + this.userid);
      }
    }
  }
</script>

<style>
  #log1 {
    background: #ff8000;
    color: white;
    font-size: 16px;
  }

  #reg1 {
    background: none;
    color: black;
  }

  .input-group {
    margin: 30px auto;
    width: 80%;
  }

  .input-group-addon {
    background: #ff8000;
    color: white;
  }

  #submit {
    height: 35px;
    width: 100%;
    border-radius: 5px;
  }
</style>
