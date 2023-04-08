<template>
  <div class="classify_main">
    <!-- 顶部工具栏 -->
    <ul class="classify_toptool">
      <li @click="goBack()">
        <span class="glyphicon glyphicon-menu-left"></span>
      </li>
      <li :id="'classify_'+index" @click="active(fieldlist.length,index,'toptool',item.field)" v-for="(item,index) in fieldlist"
        :key="index">
        <span :id="'classify_'+index+'_span'" :style="titlestyle">{{item.field}}</span>
      </li>
    </ul>
    <div class="classify_content">
      <!-- 左侧排行榜分类 -->
      <ul class="content_left">
        <li :id="'classes_'+index" @click="active(leftlist.length,index,'classes',item.class)" v-for="(item,index) in leftlist"
          :key="index">
          {{item.class}}
        </li>
      </ul>
      <!-- 中部详细排行榜 -->
      <div class="content_center">
        <div style="background: #f5f6f8;padding:4px;color: #7f7f7f;font-size: 12px;">订阅收益排行</div>
        <ul style="display: flex;text-align: center;height: 40px;line-height: 40px;">
          <li @click="active(3,0,'days','昨日')" style="flex-grow: 1;"><span id="days_1" style="padding:4px 0;">昨日</span></li>
          <li @click="active(3,1,'days','7天')" style="flex-grow: 1;"><span id="days_2" style="padding:4px 0;">7天</span></li>
          <li @click="active(3,2,'days','30天')" style="flex-grow: 1;"><span id="days_3" style="padding:4px 0;">30天</span></li>
        </ul>
        <orderset style="width:100%;height:470px;overflow: auto;" :orderlist="orderlist"></orderset>
      </div>
    </div>
  </div>
</template>

<script>
  import orderset from '@/components/Waterfall/orderset.vue'
  export default {
    components:{
      orderset
    },
    data() {
      return {
        fieldlist: [{
          field: '全部',
          index: 0
        }, {
          field: '原创',
          index: 1
        }, {
          field: '言情',
          index: 2
        }, {
          field: '无CP',
          index: 3
        }],
        titlestyle: {
          display: "inline-block",
          height: "40px"
        },
        leftlist: [{
          index: 0,
          class: '畅销榜'
        }, {
          index: 1,
          class: '上架榜'
        }, {
          index: 2,
          class: '人气榜'
        }, {
          index: 3,
          class: '完结榜'
        }, {
          index: 4,
          class: '风云榜'
        }, {
          index: 5,
          class: '新锐榜'
        }, {
          index: 6,
          class: '新书榜'
        }, {
          index: 7,
          class: '萌新榜'
        }, {
          index: 8,
          class: '赞赏榜'
        }, {
          index: 9,
          class: '土豪榜'
        }],
        orderlist: [{
          "BookCP": "CP000005",
          "bookname": "我只要你",
          "author": "李书锦",
          "state": "连载",
          "booksize": "40.46",
          "book_profile": "这是文案",
          "sample_prof": "哑巴x温柔",
          "detailtags": ["HE", "美强惨", "久别重逢", "白月光", "甜宠", "剧情"],
          "sample_tags": ["综合", "轻松", "14万"],
          "book_cover": "front9.jpg",
          "collected": "2543",
          "seastars": "765",
          "comments": "1233",
          "donation": "765",
          "popularity": "173.82",
          "endchapter": "116 第116章 试霜寒（大结局)",
          rankno:1
        }],
        afield:'全部',
        left:'畅销榜',
        day:'昨日'
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      active(length, index, flag, text) {
        // console.log(text);
        if (flag == 'toptool') {
          this.afield = text;
          for (let i = 0; i < length; i++) {

            if (i == index) {
              // console.log('classify_' + index);
              let title = document.getElementById('classify_' + index);
              let titlespan = document.getElementById('classify_' + index + '_span');

              title.style.color = '#FF8000';
              titlespan.style.borderBottom = "3px solid #FF8000";

            } else {
              let other = document.getElementById('classify_' + i);
              let titlespan = document.getElementById('classify_' + i + '_span');

              other.style.color = '#000000';
              titlespan.style.borderBottom = '';
            }

          }
        }

        if (flag == 'classes') {
          this.left = text;
          for (let i = 0; i < length; i++) {
            if (i == index) {
              // console.log('classes_'+index);
              let classify = document.getElementById('classes_' + index);
              classify.style.color = '#FF8000';
              classify.style.borderLeft = '3px solid #FF8000';

            } else {
              let other = document.getElementById('classes_' + i);
              other.style.color = '#000000';
              other.style.borderLeft = '';
            }
          }
        }

        if (flag == 'days') {
          this.day = text;
          let days_1 = document.getElementById('days_1');
          let days_2 = document.getElementById('days_2');
          let days_3 = document.getElementById('days_3');
          days_1.style.color = '#000000';
          days_1.style.borderBottom = '';
          days_2.style.color = '#000000';
          days_2.style.borderBottom = '';
          days_3.style.color = '#000000';
          days_3.style.borderBottom = '';

          if (index == 0) {
            days_1.style.color = '#FF8000';
            days_1.style.borderBottom = '3px solid #FF8000';
          }
          if (index == 1) {
            days_2.style.color = '#FF8000';
            days_2.style.borderBottom = '3px solid #FF8000';
          }
          if (index == 2) {
            days_3.style.color = '#FF8000';
            days_3.style.borderBottom = '3px solid #FF8000';
          }
        }

        // 获取排行榜
        // console.log(this.afield,this.left,this.day);
        this.getRanklist(this.afield,this.left,this.day);
      },
      getRanklist(field,left,day){
        this.$axios({
          url:"http://localhost:8080/myserv2/getRanklist",
          method:"get",
          params:{field:field,left:left,day:day}
        }).then((result)=>{
          // console.log(result.data);
          this.orderlist = result.data
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    computed: {

    },
    mounted() {
      console.log(this.fieldlist.length);
      this.active(this.fieldlist.length,0,'toptool','全部');
      this.active(this.leftlist.length,0,'classes','畅销榜');
      this.active(3,0,'days','昨日');
      this.getRanklist('全部','畅销榜','昨日');
    }
  }
</script>

<style>
  .classify_main {
    height: auto;
    width: 100%;
  }

  .classify_main li .active {
    color: #FF8000;
  }

  .classify_main .classify_toptool {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    font-size: 16px;
    border-bottom: 1px solid #f7f7f7;
  }

  .classify_main .classify_toptool li {
    width: 12%;
  }

  .classify_content {
    width: 100%;
    height: auto;
    display: flex;
  }

  .classify_content .content_left {
    width: 20%;
  }

  .classify_content .content_left li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 15px;
  }

  .classify_content .content_center {
    width: 80%;
  }
</style>
