<template>
  <div style="text-align:center;margin:20px 0;">
    <router-link to="/actsettings" style="display: inline-block;position: absolute;left:10px">
      <span class="glyphicon glyphicon-menu-left"></span>返回
    </router-link>
    <router-link to="/Login/Login" class="btn" id="log">
      <span>登录</span>
    </router-link>
    <router-link to="/Login/Register" class="btn" id="reg">
      <span>注册</span>
    </router-link>
    <div id="form" style="margin-top:60px;">
      <div class="input-group" v-for="(item,index) in formlist" :key="index">
        <span class="input-group-addon" :id="item.id" style="width:80px;">{{item.name}}</span>
        <input v-model="item.content" :type="item.type" class="form-control" :placeholder="item.placeholder"
          :aria-describedby="item.id">
      </div>
      <div class="input-group">
        <button @click="regbtn" id="submit" type="submit" class="input-group-addon">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formlist: [{
            name: "手机号",
            id: "phonenumber",
            type: "text",
            placeholder: "君の手机号",
            content: ""
          },
          {
            name: "昵称",
            id: "username",
            type: "text",
            placeholder: "新昵称新面貌",
            content: ""
          },
          {
            name: "邮箱",
            id: "email",
            type: "text",
            placeholder: "请输入邮箱",
            content: ""
          },
          {
            name: "密码",
            id: "password",
            type: "password",
            placeholder: "请输入密码",
            content: ""
          },
          {
            name: "确认密码",
            id: "password1",
            type: "password",
            placeholder: "请确认密码",
            content: ""
          },
        ]
      }
    },
    methods: {
      regbtn() {
        // alert("当前注册:");
        console.log(this.formlist);
        if (this.formlist[3].content == this.formlist[4].content) {
          this.$axios({
            url: 'http://localhost:8080/myserv2/logIn',
            method: 'get',
            params: {
              flag: 'register',
              phonenumber: this.formlist[0].content,
              username: this.formlist[1].content,
              email: this.formlist[2].content,
              password: this.formlist[3].content
            }
          }).then((result) => {
            console.log(result.data);
            alert("注册成功！");
            for(let i=0;i<this.formlist.length;i++){
              this.formlist[i].content="";
            }
          }).catch((err) => {
              console.log(err)
          })
      } else {
        alert("两次输入密码不一致！");
      }
    }
  }
  }
</script>

<style>
  #reg {
    background: #ff8000;
    color: white;
    font-size: 16px;
  }

  #log {
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
