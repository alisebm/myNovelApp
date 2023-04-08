<template>
  <div style="margin-top:20px;">
    <h4><b>本周强推</b></h4>
      <ul class="week-books">
        <router-link tag="li" :to="'bookcontent/'+item.BookCP" v-for="(item,index) in f1list" :key="index" v-show="index<8">
          <img :src="require('@/assets/images/'+item.book_cover+'')"/>
          <br/>
          <span class="bookname">{{item.bookname}}</span>
          <span class="authorname">{{item.author}}</span>
        </router-link>
      </ul>
  </div>
</template>

<script>
  import { mapState, mapActions,mapGetters,mapMutations } from 'vuex';
  export default{
    data(){
      return{

      }
    },
    props:["f1list"],
    computed:mapGetters("bookshelf",{

    }),
    method:{

    },
    created() {
      
    }
  }
</script>

<style>
  .week-books{
    width:100%;
    height:310px;
    display: flex;
    flex-wrap:wrap;
  }
  .week-books li{
    width:20%;
    height:94px;
    flex-grow: 1;
    margin:10px 10px 52px 5px;
  }
  .week-books li img{
    width:100%;
    height:100%;
  }
  .week-books li .bookname{
     font-size: 14px;
     display:-webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow:hidden;
     text-overflow: ellipsis;
  }
  .week-books li .authorname{
     color:darkgrey;
     font-size: 12px;
     display:-webkit-box;
     -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;
     overflow:hidden;
     text-overflow: ellipsis;
  }
</style>
