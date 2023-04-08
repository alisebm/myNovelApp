<template>
  <div>
    <!-- 所有书籍目录 -->
    <div style="margin:0 5px;">
      <ul class="new-books">
        <router-link :to="'bookcontent/'+item.BookCP" tag="li" class="box" v-for="(item,index) in this.orderlist" :key="index">
          <div class="cover" style="">
            <img :src="require('@/assets/images/'+item.book_cover+'')" />
          </div>
          <div class="new-msg" style="position:relative;padding:5px 0;">
            <span style="font-size: 16px;">
              {{item.rankno}}.{{item.bookname}}
            </span>
            <br />
            <span style="font-size: 14px;color:#7f7f7f;">
              {{item.sample_prof}}
            </span>
            <br />
            <span class="author">
              {{item.author}}
            </span>
            <ul class="tags">
              <li class="tagli" v-for="(v,i) in item.sample_tags" :key="i">
                <span>{{v}}</span>
              </li>
            </ul>
          </div>
        </router-link>
      </ul>
    </div>
    <div style="text-align: center;">已经到底了哦</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    props:["orderlist"]
  }
</script>

<style>
</style>
