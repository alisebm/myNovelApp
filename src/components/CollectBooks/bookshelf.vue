<template>
  <div style="padding:0 10px;">
    <div style="height:50px;width:100%;"></div>
    <!-- 轮播图 -->
    <slider :slidelist="slidelist" :slideshow="slideshow"></slider>
    <!-- 书架 -->
    <div>
      <ul>
        <li class="shelfbook" v-for="(item,index) in shelfbooklist" :key="index">
          <input v-show="checkshow" v-model="item.collect" name="book" :id="item.BookCP" style="margin-right:10px;" type="checkbox" />
          <img style="margin-right:10px;border-radius: 3px;width:16%;box-shadow: 1px 1px 3px #888888;" :src="getPath(item.book_cover)" />
          <ul @click="select(item.collect)" style="margin-top:9px;width:90%;height:80%;display:flex;flex-direction:column;justify-content: center;">
            <label style="font-weight:normal;width:100%;" :for="item.BookCP">
              <li style="color:black;height:33%;flex-grow: 1;">
                {{item.bookname}}
                <svg @click="moremsg()" style="float:right;width:16px;height:16px;" class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gengduo"></use>
                </svg>
              </li>
              <li style="height:33%;flex-grow: 1;color:#a6a6a8">{{item.author}}</li>
              <li style="height:33%;flex-grow: 1;color:#a6a6a8">{{item.endchapter}}</li>
            </label>
          </ul>
        </li>
      </ul>
    </div> <!-- 顶上去 -->
    <div style="height:60px;width:100%;"></div>
  </div>
</template>

<script>
  import slider from '@/components/Recom/slider.vue'
  export default {
    components: {
      slider
    },
    data() {
      return {

      }
    },
    props: ["slidelist", "slideshow","checkshow","shelfbooklist"],
    methods: {
      getPath(path) {
        return path ? require('@/assets/images/' + path) : '';
      },
      moremsg() {

      },
      select(flag){
        this.$store.commit('bookshelf/select',flag);
      }
    }
  }
</script>

<style>
  /* 书籍列表 */
  .shelfbook {
    width: 100%;
    height: 80px;
    margin: 16px 0;
    display: flex;
  }
</style>
