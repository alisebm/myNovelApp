<template>
  <div style="">
    <slot name="boxname"><h4><b>新鲜上架</b></h4></slot>
    <ul class="new-books">
      <!-- <router-link :to="'bookcontent/'+item.BookCP" class="box" tag="li"  v-for="(item,index) in f2list" :key="index" v-show="index>=x&&index<=y"> -->
      <router-link :to="{/*name:'bookcontent',*/params:{BookCP:item.BookCP}}" class="box" tag="li"  v-for="(item,index) in f2list" :key="index" v-show="index>=x&&index<=y">
        <div class="cover" style="">
          <img :src="require('@/assets/images/'+item.book_cover+'')" />
        </div>
        <div class="new-msg" style="position:relative;padding:5px 0;">
          <span style="font-size: 16px;color: #000000;">
            {{item.bookname}}
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
    <div class="bottom">
      <router-link class="button" to="/alist">
        <span class="glyphicon glyphicon-share"></span>
        <span>全部</span>
      </router-link>
      <div class="button" @click="dataChange">
        <span class="glyphicon glyphicon-refresh"></span>
        <span>换一换</span>
      </div>
    </div>
  </div>
</template>

<script>
  import change from '@/components/Bulletin/change.vue'
  import alist from '@/components/Waterfall/alist.vue'
  export default {
    components:{
      change,alist
    },
    data() {
      return {
        x:0,
        y:2,
        f3list:[]
      }
    },
    props:["f2list"],
    methods:{
      dataChange(){
        // console.log(this.x,this.y);
        if(this.y<this.f2list.length-1){
          this.x=this.x+3;
          this.y=this.x+2;
        }else{
          this.x=0;
          this.y=2;
        }
      }
    }
  }
</script>

<style>
  /* 底部按钮 */
  .bottom{
    width:100%;
    height:50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .bottom .button{
    flex:1;
    text-align: center;
    height:70%;
    margin:0 10px;
    line-height: 35px;
    background: #f6f6f6;
    border-radius: 12px;;
  }
</style>
