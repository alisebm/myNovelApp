<template>
  <div :style="style" :class="['homeNav', { color: color }]">导航</div>
</template>
<script>
export default {
  data() {
    return {
      style: { backgroundColor: "" },
      color: false,
      scrollTop: 0,
    };
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log("scrollTop.length",scrollTop);
 
      if (scrollTop >= 300) {
        this.style.backgroundColor = `rgba(0, 150, 224,${
          scrollTop / (scrollTop + 80)
        }) `;
        this.color = true;
      } else if (scrollTop == 0) {
        this.style.backgroundColor = "transparent";
        this.color = false;
      }
      // 轮播  增加动画效果
      //  if (scrollTop > 100) {
      //   $(".popup").addClass("scale-in-center")
      // } else if (scrollTop < 500 || scrollTop > 1100) {
      //    $(".popup").removeClass("scale-in-center")
 
      // }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style >
body {
  height: 3000px;
}
.color {
  color: #fff !important;
}
.homeNav {
  width: 100%;
  height: 60px;
  color: #333;
  transition: all linear 0.5s;
  position: fixed;
  top: 0;
  z-index: 99999;
  margin: 0 auto;
  background: pink;
}
</style>