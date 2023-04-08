import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const bookshelf = ({
  namespaced: true,
  state: {
    collectbookcount: 1,
    collectshowflag: 0,
    booklist: [],
    selectNumber: 0,
    openOperateMapNumber: 0
  },
  mutations: {
    set(state, value) {
      state.booklist = value;
      state.booklist.forEach((item, index) => {

        console.log(item);
      });
      // console.log("我明明调用了set啊啊啊");
      // console.log("哈哈"+JSON.stringify(state.booklist));
    },
    increase(state) {
      state.collectbookcount++;
      // console.log("收藏本书"+state.collectbookcount);
    },
    decrease(state) {
      state.collectbookcount--;
      // console.log("取消收藏"+state.collectbookcount);
    },
    add(state, book) {
      // console.log("book"+JSON.stringify(book));
      let result = false;
      state.booklist.forEach((item, index) => {
        if (item.BookCP == book.BookCP) {
          result = true;
        }
      });
      // console.log("!!"+result);
      if (!result) {
        // console.log("没收藏过"+book.BookCP);
        state.booklist.push({
          BookCP: book.BookCP,
          bookname: book.bookname,
          book_cover: book.book_cover,
          author: book.author,
          endchapter: book.endchapter,
          userid: "1001",
          collect: false
        });
      }
    },
    del(state, bookcp) {
      // console.log(state.booklist.length);
      // console.log("删除"+bookcp);
      state.booklist.forEach((item, index) => {
        if (item.BookCP == bookcp) {
          // console.log(index+":"+item);
          state.booklist.splice(index, 1);
        }
      })
      // console.log(state.booklist.length);
    },
    select(state, flag) {
      if (flag == false) {
        state.selectNumber++;
      } else {
        state.selectNumber--;
      }
    },
    selectAll(state, x) {
      state.selectNumber = x;
    },
    OMNumberUP(state) {
      state.openOperateMapNumber++;
    }
  },
  actions: {
    // 异步逻辑处理，如果不做这个可以直接在mutations里写
    pushBook(context, additem) {
      context.commit('add', additem);
    },
    popBook(context, delBookCP) {
      context.commit('del', delBookCP);
    },
    setValue(context, value) {
      context.commit('set', value);
    }
  },
  getters: {

  }
})
export default bookshelf
