<template>
  <div class="slide-content">
    <img v-for="(item,index) in slidelist" :key="index" :src="item" v-show="index==x" />
    <ul class="slide-bot">
      <li v-for="(v,i) in slidelist" :key="i" :class="i==x?'active':''"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        x: 0,
        interid: '',
      }
    },
    props: ["slidelist"],
    methods: {
      go() {
        this.interid = setInterval(() => {
          this.x++;
          if (this.x == this.slidelist.length) {
            this.x = 0;
          }
          // console.log("xxxxx" + this.interid);
        }, 3000);
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
  .slide-content {
    width: 100%;
    margin-top: 15px;
    margin-bottom: -15px;
  }

  .slide-content img {
    width: 100%
  }

  .slide-bot {
    list-style: disc;
    width: 30%;
    height: 20px;
    position: relative;
    top: -30px;
    left: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-bot li {
    font-size: 30px;
    margin: 0;
    flex-grow: 1;
    color: white;
    opacity: 0.5;
  }

  .active {
    color: white !important;
    opacity: 1 !important;
  }
</style>
