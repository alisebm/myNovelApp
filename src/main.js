// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
"./"：代表目前所在的目录。

" . ./"代表上一层目录。

"/"：代表根目录。
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/bootstrap/css/bootstrap.min.css'
import '@/assets/bootstrap/css/bootstrap-theme.min.css'
import '@/assets/style.css'
import '@/assets/font_u8/iconfont.css'
import '@/assets/font_u8/iconfont.js'
//引入axios，并注册
// https://blog.csdn.net/qq_41162375/article/details/127022040
/*
 Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js
 Axios（相比于原生的XMLHttpRequest对象来说） 简单易用,
 （相比于jQuery）axios包尺寸小且提供了易于扩展的接口，是专注于网络请求的库。
 */
import axios from "axios";
Vue.prototype.$axios=axios;

Vue.config.productionTip = false
// 引入vuex
import store from '@/store/store.js'
Vue.prototype.$store=store;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // https://www.php.cn/website-design-ask-499045.html
  /*
  在vue中，el是element的缩写，可称之为挂载点。
  el的作用是提供一个在页面上已存在的DOM元素作为Vue实例的挂载目标，
  可以是CSS选择器，也可以是一个HTMLElement实例；
  在实例挂载之后，元素可以用“vm.$el”访问。
  */
  router,
  // 来源：import router from './router'
  store,
  // 来源：import store from '@/store/store.js'
  components: { App },
  // 来源：import App from './App.vue'
  template: '<App/>',
  // https://segmentfault.com/q/1010000008863503
  // 也就是说:template: '<App/>' 表示用<app></app>替换index.html里面的<div id="app"></div>
})
