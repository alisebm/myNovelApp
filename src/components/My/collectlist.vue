<template>
  <div>
    <ul style="display:flex;height:auto;width:100%;overflow: auto;">
      <li v-for="(item,index) in this.collectlist" :key="index" class="list_first" style="margin-right:10px;display: flex;width: 80px;flex-direction: column;">
        <img class="bookcover" :src="require('@/assets/images/'+item.book_cover)" />
        <span class="bookname"><b>{{item.bookname}}</b></span>
        <span class="author">{{item.author}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props:['collectlist'],
    data(){
      return{

      }
    }
  }
</script>

<style>
  ul::-webkit-scrollbar {
    width: 0;
  }
  .bookcover{
    width:80px;
  }
  .list_first{
    margin:10px 0;
  }
  .list_first .author{
    color: #7F7F7F;
    font-size: 13px;
  }
  .bookname,.author{
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow:hidden;
    text-overflow: ellipsis;
  }
</style>
