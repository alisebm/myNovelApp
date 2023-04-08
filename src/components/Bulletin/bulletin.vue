<template>
  <div class="board">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-laba"></use>
    </svg>
    <ul class="buclass">
      <li v-for="(item,index) in bulist" :key="index" v-show="index==y">
        <span class="msg">
          <span style="color:#ff8000">{{item.user}}</span> 送给<span style="color:#ff8000">{{item.book}}{{item.author}}</span> {{item.object}}x{{item.number}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        y:0,
        interid1:'',
        bulist:[
          {user:"惆怅的小帅气",book:"《难缠》",author:"刘水水",object:"幸运铃",number:1},
          {user:"许小玥",book:"《临时男友》",author:"七层君",object:"老虎油",number:1},
          {user:"木糖纯",book:"《双向迭代》",author:"春意重",object:"幸运铃",number:2}
        ]
      }
    },
    methods: {
      go() {
        this.interid1 = setInterval(() => {
          this.y++;
          if (this.y == this.bulist.length) {
            this.y = 0;
          }
        }, 2000)
      }
    },
    mounted() {
      this.go();
    },
    destroyed() {
      clearInterval();
    }
  }
</script>

<style>
  .board{
    width:100%;
    height:2.5rem;
    background: #FFF7CE;
    border-radius: 1.25rem;
    position:relative;
  }
  .buclass{
    height:100%;
    width:80%;
    padding:2.5rem;
  }
  .buclass li{
    height:100%;
    width:100%;

  }
  .msg{
    font-size: 12px;
    display:inline-block;
    position:absolute;
    top:3.5px;
  }
  .board .icon{
    position: absolute;
    top:1px;
    width:1.5em;
    height:1.5em;
  }
</style>
