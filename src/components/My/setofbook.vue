<template>
  <div>
    <ul style="height: auto;margin:10px 0;">
      <li v-for="(item,index) in booklist" :key="index" style="height: 90px;display: flex;margin-bottom:10px;">
        <div class="picpic">
          <img v-for="(book,num) in item.books" :key="num" v-if="num==0" class="picF" :src="require('@/assets/images/'+book.url)" />
          <img v-for="(book,num) in item.books" :key="num" v-if="num==1" class="picS" :src="require('@/assets/images/'+book.url)" />
          <img v-for="(book,num) in item.books" :key="num" v-if="num==2" class="picT" :src="require('@/assets/images/'+book.url)" />
        </div>
        <div style="height:90px;padding: 6px;display: inline-block;width:78%;position: relative;">
          <span><b>{{item.title}}</b></span><br />
          <span style="color:#7f7f7f;">{{item.class}}</span><br />
          <span style="width:100%;position: absolute;bottom: 6px;font-size: 13px;color:#7f7f7f;">
            <span>{{item.user}}</span>
            <span style="position:absolute;right:10px;">{{item.numberdata}}</span>
          </span>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    props: ['booklist'],
    data() {
      return {

      }
    },
    methods:{
      getPath(){
        // if(this.booklist.)
      }
    },
    created(){
      // console.log(this.booklist[1]);
    }
  }
</script>

<style>
  .picpic {
    width: 80px;
    height: 80px;
    display: flex;
    position: relative;
  }

  .picpic .picF {
    height: 100%;
    z-index: 100;
    position: absolute;
    left: 10px;
    bottom: 0;
    border-radius: 8px;
  }

  .picpic .picS {
    height: 90%;
    z-index: 50;
    position: absolute;
    left: 0px;
    bottom: 0;
    border-radius: 8px;
  }

  .picpic .picT {
    height: 80%;
    z-index: 10;
    position: absolute;
    left: 32px;
    bottom: 0;
    border-radius: 8px;
  }
</style>
