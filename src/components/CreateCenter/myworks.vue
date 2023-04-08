<template>
  <div>
    <toptitle>更新</toptitle>
    <div style="height: 50px;"></div>
    <ul class="myworks" style="padding: 10px;">
      <router-link :to="{params:{BookCP:item.BookCP}}" tag="li" v-for="(item,index) in worklist" :key="index">
        <div class="work">
          <div class="cover" style="width:60px;margin-right: 8px;">
            <img style="width: 100%;" :src="require('@/assets/images/'+item.book_cover+'')" />
          </div>
          <div class="new-msg" style="width:80%;height:100%;position:relative;padding:5px 0;display:flex;flex-direction: column;justify-content: space-around;">
            <span style="font-size: 16px;color: #000000;">
              {{item.bookname}}
              <span style="position: absolute;right:0;color:#7f7f7f;font-size: 14px;">{{item.createdday}}</span>
            </span>
            <span style="font-size: 14px;color:#7f7f7f;">
              {{item.sample_prof}}
            </span>
            <span style="font-size: 14px;color:#7f7f7f;">
              最新章: {{item.endchapter}}
            </span>
          </div>
        </div>
        <div style="text-align:center;display: flex;align-items: center;justify-content: space-around;height:50px;">
          <span @click="delmywork()" style="width: 50%;color: #7F7F7F;">删除</span>
          <span @click="updatemywork()" style="width: 50%;color: #FF8000;">更新</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import toptitle from '@/components/Slot/topTitle.vue'
  export default {
    components: {
      toptitle
    },
    data() {
      return {
        worklist: [{
          book_cover: 'front8.jpg',
          bookname: '当NPC成为玩家后',
          createdday: '02-13',
          sample_prof: '这是新书的小灰字',
          endchapter: '0'
        }]
      }
    },
    methods:{
      delmywork(){
        alert("确认删除作品？一经删除，无法找回！");
      },
      updatemywork(){
        this.$router.push('/workdetail');
      }
    }
  }
</script>

<style>
  .myworks .work {
    width: 100%;
    display: flex;
    height: 80px;
  }

  .myworks .work img {
    border-radius: 5px;
  }
</style>
