<template>
    <div class="nav-bottom" v-show="$route.meta.show">
      <ul>
        <router-link :class="item.name" v-for="(item,index) in navlist" :key="index" :to="item.url" tag="li">
          <span :class="item.icon"></span><br />
          <span>{{item.name}}</span>
        </router-link>
        <!--        <router-link to="/ranklist" tag="li">
          <i class="glyphicon glyphicon-stats"></i><br/>
          <span>排行榜</span>
        </router-link><router-link to="/freebook" tag="li">
          <i class="glyphicon glyphicon-leaf"></i><br/>
          <span>免费</span>
        </router-link><router-link to="/endbook" tag="li">
          <i class="glyphicon glyphicon-book"></i><br/>
          <span>书架</span>
        </router-link><router-link to="/my" tag="li">
          <i class="glyphicon glyphicon-tower"></i><br/>
          <span>我的</span>
        </router-link> -->
      </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navlist: [
          {
            name: "书城",
            icon: "glyphicon glyphicon-leaf",
            url: "/freebook"
          },
          {
            name: "排行榜",
            icon: "glyphicon glyphicon-stats",
            url: "/ranklist"
          },
          {
            name: "鱼塘",
            icon: "glyphicon glyphicon-record",
            url: "/concern"
          },
          {
            name: "书架",
            icon: "glyphicon glyphicon-book",
            url: "/books"
          },
          {
            name: "我的",
            icon: "glyphicon glyphicon-tower",
            url: "/my"
          }
        ]
      }
    }
  }
</script>

<style>
  .router-link-exact-active,
  .router-link-active {
    color: #ff8000;
  }
</style>
