<template>
  <div>
    <ul>
      <div tag="li" class="comli" v-for="(item,index) in comlist" :key="index" v-show="index<x">
        <div class="usericon"><img src="" /></div>
        <div class="username">
          <span style="display:inline-block;">用户:{{item.userid}}</span><br />
          <span style="display:inline-block;">{{item.comtime}}</span>
        </div>
        <div class="comt">
          {{item.content}}
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        x:3,
        comlistx:[]
      }
    },
    props:["comlist","comlength","bookcp"],
    mounted(){
      // console.log("commenlist组件的数据");
      // console.log(this.comlist);
      // console.log("length="+this.comlength);
      this.comlistx = this.comlist;
      this.x = this.comlength;
    }
  }
</script>

<style>
 .comli {
    margin-bottom: 10px;
    /* border:1px solid red; */
    width: 100%;
    height: auto;
    position: relative;
    border-bottom: 1px solid lightgray;
  }

  .comli .usericon {
    margin: 5px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid red;
  }

  .comli .username {
    color: gray;
    display: inline-block;
    font-size: 12px;
    position: absolute;
    top: 10px;
  }

  .comli .comt {
    word-wrap: break-word;
    padding: 0 10px 4px 50px;
    height: auto;
  }
</style>
