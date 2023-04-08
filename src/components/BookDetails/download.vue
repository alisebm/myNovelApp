<template>
  <div style="background: #f4f4f4;">
    <div style="height:40px;width:100%;"></div>
    <!-- 顶部title -->
    <div class="top-title" style="background: white;border-bottom: 1px solid #f6f6f6;">
      <div style="display: inline-block;" @click="goBack()" class="top-reback">
        <span class="glyphicon glyphicon-menu-left"></span>
      </div>
      <h4><b>批量下载</b></h4>
      <span class="down-selectAll" @click="select()">{{this.selectAll}}</span>
    </div>

    <!-- 中间章节列表 -->
    <div style="padding: 10px;width:100%;height:auto;">
      <p>章节序号</p>
      <ul class="down_all">
        <li class="down_first" v-for="(pageno,index) in page" :key="index">
          <svg @click="openclose(pageno)" v-if="openorclose==false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg>
          <svg @click="openclose(pageno)" v-if="openorclose==true" class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-down"></use>
          </svg>
          <span @click="openclose(pageno)" style="display:inline-block;width: 80%;" v-if="pageno+10<=xlength">{{pageno+1}}-{{pageno+10}}</span>
          <span @click="openclose(pageno)" style="display:inline-block;width: 80%;" v-else>{{pageno+1}}-{{xlength}}</span>
          <input @click="select10(pageno)" :name="'checkAll_'+pageno" type="checkbox" style="position: absolute;right:28px;" />

          <ul :id="'first_'+pageno">
            <li class="down_second" v-for="(item,index) in chapterlist" :key="item.id" v-if="item.chapter_num>pageno & item.chapter_num<=pageno+10">
              <label style="font-weight:200;" :for="item.chapter_name">
                {{item.chapter_num}}
                第{{item.chapter_num}}章
                {{item.chapter_name}}<br />
                &nbsp;&nbsp;{{item.chapter_price}}玉佩
              </label>
              <input @click="checkChapter(item.chapter_name,item.chapter_num,item.chapter_price)" :name="item.chapter_name+item.chapter_num"
                type="checkbox" style="position: absolute;right:0px;" />
            </li>
          </ul>

        </li>
      </ul>
    </div>
    <div style="height: 200px;"></div>

    <!-- 底部结算 -->
    <div id="quantify">
      <ul style="width:100%;">
        <li style="position: relative;font-size:13px;"><span>选中：{{this.chapterNumber}}个章节</span><span style="position: absolute;right:0;color:darkgray">免费及已购章节不会重复扣费</span></li>
        <li><span>价格：<span style="color:#ff8000">{{this.totalPrice}}玉佩</span></span></li>
        <li style="position: relative;font-size:13px;"><span>当前余额：{{this.currentMoney}}玉佩</span><router-link to="/recharge" style="display:inline-block;margin:0 20px;color:#ff8000">立即充值</router-link><span
            style="position: absolute;right:0;color:darkgray">订阅须知</span></li>
        <li style="position:relative;display: flex;justify-content: space-between;">
          <input style="position: absolute;left:40px;top:6px" id="onlyPurchase" name="onlyPurchase" type="checkbox" />
          <label @click="Check1()" class="down-buttons" for="onlyPurchase">
            仅订阅
          </label>
          <input style="position: absolute;left:222px;top:6px" id="purchaseAuto" name="purchaseAuto" type="checkbox" />
          <label @click="Check2()" class="down-buttons" for="purchaseAuto">
            自动订阅
          </label>
        </li>
      </ul>
      <input @click="purchase()" type="button" value="确定" style="text-align: center;width:100%;height: 34px;border-radius: 17px;border:0;background:#FF8000;color:white;" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        BookCP: this.$route.params.BookCP,
        chapterlist: [],
        xlength: 0,
        page: [0, 10, 20, 30],
        selectAll: "全选",
        clickcount: 0,
        chapterNumber: 0,
        totalPrice: 0,
        currentMoney: 273.00,
        check1: false,
        check2: false,
        openorclose: true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      select() {
        if (this.clickcount == 0) {
          this.clickcount = 1;
          this.selectAll = "取消全选";
          this.totalPrice = 0;
          this.chapterNumber = 0;
          //全选状态
          for (let i = 0; i < this.page.length; i++) {
            let checkAll = document.getElementsByName('checkAll_' + this.page[i]);
            checkAll[0].checked = true;
            this.select10(this.page[i]);
          }

        } else if (this.clickcount != 0) {
          this.clickcount = 0;
          this.selectAll = "全选";
          //取消全选状态
          for (let i = 0; i < this.page.length; i++) {
            let checkAll = document.getElementsByName('checkAll_' + this.page[i]);
            if (checkAll[0].checked == true) {
              checkAll[0].checked = false;
              this.select10(this.page[i]);
            }

          }
        }
      },
      Check1() {
        // console.log(this.check1);
        this.check1 = !this.check1;
      },
      Check2() {
        // console.log(this.check2);
        this.check2 = !this.check2;
      },
      openclose(pageno) {
        // console.log(pageno);
        // console.log(this.openorclose);
        if (this.openorclose == true) {
          let ul = document.getElementById('first_' + pageno);
          ul.style.display = 'none';
          this.openorclose = false;
        } else if (this.openorclose == false) {
          let ul = document.getElementById('first_' + pageno);
          ul.style.display = 'block';
          this.openorclose = true;
        }
      },
      select10(pageno) {
        let checkAll = document.getElementsByName('checkAll_' + pageno);
        if (checkAll[0].checked == true) {
          for (let i = pageno; i < pageno + 10; i++) {
            if (this.chapterlist[i]) {
              let name = this.chapterlist[i].chapter_name;
              let cnum = this.chapterlist[i].chapter_num;
              let price = this.chapterlist[i].chapter_price;
              // console.log(name+price);
              let checkbox = document.getElementsByName(name + cnum);
              checkbox[0].checked = true;
              this.checkChapter(name, cnum, price);
            }
          }
        } else {
          // 修改全选按钮文字及属性
          this.clickcount = 0;
          this.selectAll = "全选";

          for (let i = pageno; i < pageno + 10; i++) {
            if (this.chapterlist[i]) {
              let name = this.chapterlist[i].chapter_name;
              let cnum = this.chapterlist[i].chapter_num;
              let price = this.chapterlist[i].chapter_price;
              // console.log(name+price);
              let checkbox = document.getElementsByName(name + cnum);
              if (checkbox[0].checked == true) {
                checkbox[0].checked = false;
                this.checkChapter(name, cnum, price);
              }
            }
          }

        }
      },
      checkChapter(name, cnum, price) {
        let checkbox = document.getElementsByName(name + cnum);
        // console.log(checkbox[0].checked);
        if (checkbox[0].checked == true) {
          this.totalPrice += parseInt(price);
          this.chapterNumber++;
        } else {
          // 修改全选按钮文字及属性
          this.clickcount = 0;
          this.selectAll = "全选";

          this.totalPrice -= parseInt(price);
          this.chapterNumber--;
        }
        // console.log(this.totalPrice);
      },
      purchase() {
        if (this.totalPrice <= this.currentMoney) {
          this.currentMoney-=this.totalPrice;
          this.clickcount = 1;
          this.select();
          alert("余额充足，购买成功！");
        } else {
          alert("余额不足，请充值后购买！");
        }
      }
    },
    mounted() {
      console.log(this.BookCP);
    },
    created() {
      //向后台发送请求
      this.$axios({
        url: 'http://localhost:8080/myserv2/getBookDataList',
        method: 'get',
        params: {
          bookcp: this.BookCP,
          flag: 'chapter'
        }
      }).then((result) => {
        console.log(result.data);
        this.chapterlist = result.data;
        this.xlength = this.chapterlist.length;
        this.page = [];
        for (let i = 0; i <= Math.floor(this.xlength / 10); i++) {
          // console.log(i*10);
          this.page.push(i * 10);
        }
        // console.log(this.page);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style>
  .down-selectAll {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #FF8000
  }

  #quantify {
    width: 100%;
    height: 200px;
    position: fixed;
    bottom: 0px;
    box-shadow: #000000;
    /* border: 1px solid red; */
    padding: 10px 15px;
    background: white;
    box-shadow: 0 -1px 4px 0 gainsboro;
  }

  #quantify ul li {
    margin: 10px 0
  }

  .down-buttons {
    text-align: center;
    width: 45%;
    height: 34px;
    line-height: 34px;
    border: 0;
    border-radius: 17px;
    background: #efefef;
  }

  .down_all .down_first {
    padding: 8px;
    background: white;
    border-radius: 10px;
    position: relative;
    margin-bottom: 10px;
  }

  .down_all .down_first .down_second {
    position: relative;
    margin: 8px 20px;
    font-size: 13px;
  }
</style>
