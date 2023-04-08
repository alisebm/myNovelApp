<template>
  <div style="width:100%;height:auto;position:fixed;top:140px;border-radius:16px 16px 0 0;background: white;">
    <div class="comt-top">
      <span class="glyphicon glyphicon-menu-left"></span>
      <ul class="comt-top-ul">
        <li class="comt-top-li">
          评论
        </li>
        <li class="comt-top-li">
          精华
        </li>
        <li class="comt-top-li">
          长评
        </li>
      </ul>
    </div>
    <!-- 所有评论 -->
    <div class="comt-outer" style="width:100%;height:420px;overflow:scroll;">
      <div class="inner" style="height:800px;">
        <comlist :comlist="comlist" :comlength="comlength"></comlist>
      </div>
    </div>
    <!-- 发评论文本框 -->
    <div class="comt-input">
      <textarea @input="riseInput" v-model="textdata" name="comt-type" class="comt-type" type="text" placeholder="我要评论"></textarea>
      <div class="comt-output">
        <span style="font-size: 12px;position: absolute;bottom: 28px;left: 4px;width: 44px;">{{textlength}}字</span>
        <input @click="outputcomt" class="btn" type="button" value="评论"/>
      </div>
    </div>
  </div>
</template>

<script>
  import comlist from '@/components/Waterfall/commenlist.vue'
  export default{
    components: {
      comlist
    },
    data(){
      return{
        textdata:"",
        textlength:0
      }
    },
    props:["comlist","comlength","bookcp"],
    mounted() {
      // console.log("bookcontent传过来的数据");
      // console.log(this.comlist);
      // console.log(this.comlength); //传过来的prop里的数据可以直接继续引用
      // this.comlist1 = this.comlist;
      // this.comlength1 = this.comlength;
      // console.log("赋值过来的数据");
      // console.log(this.comlist1);
      // console.log(this.comlength1); //赋值传值好像不太对，传过去的还是默认值
    },
    methods:{
      outputcomt(){
        // console.log(this.textdata,this.textdata.length);
        let sendtime = new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        // let comment = {userid:"池也池",time:sendtime,text:this.textdata};
        // console.log("刚才发出的评论："+JSON.stringify(comment));
        // let localcomlist = JSON.parse(localStorage.getItem('cmts')||'[]'); //这里的cmts是localstorage的内容，如果是第一次存，那就是空的，如果不是，就从cmts中取出来
        // console.log("local旧评论");
        // console.log(localcomlist);
        // localcomlist.unshift(comment);//新数据放上去
        // localStorage.setItem('cmts',JSON.stringify(localcomlist));
        // console.log("local新评论");
        // console.log(localcomlist);

        //存入数据库
        this.$axios({
          url:"http://localhost:8080/myserv2/getBookCommentsData",
          method:"get",
          params:{bookcp:this.bookcp,userid:1,comtime:sendtime,content:this.textdata,flag:"out"}
        }).then((result)=>{
          console.log(result.data)
          this.$emit("refresh",result.data);
          // console.log("评论");
        }).catch(err=>console.log(err))

        this.textdata = "";
        this.textlength = 0;
      },
      riseInput(){
        this.textlength = this.textdata.length;
      }
    }
  }
</script>

<style>
  .comt-outer::-webkit-scrollbar {
      display: none;
    }

  .comt-top{
     position:relative;
     width:100%;
     height:30px;
     line-height:30px;
     padding:0 14px;
     border-bottom: 1px solid gray;
  }
  .comt-top-ul{
     position: absolute;
     left:40px;
     top:0px;
     width:48%;
     display: flex;
     justify-content: center;
  }
  .comt-top-li{
     flex-grow: 1;
  }
  .comt-input{
    width:100%;
    height: 76px;
    background: white;
    /* border: 1px solid red; */
    position: fixed;
    bottom: 0px;
    padding:8px 10px;
  }
  .comt-output{
    /* width:60px; */
    width:15%;
    height:60px;
    position:absolute;
    right:0px;
    bottom: 8px;
    text-align: center;
  }
  .comt-type{
    width:86%;
    height: 60px;
    background: lightgray;
    border: 0;
  }
  .comt-input .btn{
    position:absolute;
    bottom: 0px;
    left:4px;
    font-size: 13px;
    padding:3px 8px;
  }
</style>
