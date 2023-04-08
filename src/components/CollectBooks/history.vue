<template>
  <div style="padding:0 10px;">
    <div style="height:50px;width:100%;"></div>
    <!-- 书架 -->
    <div>
      <ul>
        <li class="shelfbook" v-for="(item,index) in historylist" :key="index">
          <img style="margin-right:10px;border-radius: 3px;width:16%;box-shadow: 1px 1px 3px #888888;" :src="getPath(item.book_cover)" />
          <ul @click="openBook(item.BookCP)" style="font-size: 13px;margin-top:9px;width:90%;height:80%;display:flex;flex-direction:column;justify-content: center;">
              <li style="color:black;height:33%;flex-grow: 1;">
                {{item.bookname}}
              </li>
              <li style="height:33%;flex-grow: 1;color:#a6a6a8">{{item.author}}</li>
              <li style="height:33%;flex-grow: 1;color:#a6a6a8">{{item.endchapter}} <span>2022-12-31更新</span></li>
            </label>
          </ul>
        </li>
      </ul>
    </div> <!-- 顶上去 -->
    <div style="height:60px;width:100%;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        historylist: [{
          "userid": "1001",
          "BookCP": "CP000005",
          "bookname": "我只要你",
          "book_cover": "front9.jpg",
          "author": "李书锦",
          "endchapter": "116 第116章 试霜寒（大结局)",
          "collect": false
        }, {
          "userid": "1001",
          "BookCP": "CP000006",
          "bookname": "少年行",
          "book_cover": "front10.jpg",
          "author": "盐盐yany",
          "endchapter": "116 第116章 试霜寒（大结局)",
          "collect": false
        }, {
          "userid": "1001",
          "BookCP": "CP000007",
          "bookname": "天地逆旅",
          "book_cover": "front11.jpg",
          "author": "慕禾",
          "endchapter": "116 第116章 试霜寒（大结局)",
          "collect": false
        }, {
          "userid": "1001",
          "BookCP": "CP000000",
          "bookname": "池鱼",
          "book_cover": "front6.jpg",
          "author": "池也池",
          "endchapter": "116 第116章 试霜寒（dadadada大结局)",
          "collect": false
        }]
      }
    },
    methods:{
      getPath(path) {
        return path ? require('@/assets/images/' + path) : '';
      },
      openBook(bookcp){
        console.log(bookcp);
      }
    }
  }
</script>

<style>
</style>
