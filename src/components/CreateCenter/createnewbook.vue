<template>
  <div style="background: #F7F7F7;height:auto;">
    <toptitle>基本信息</toptitle>

    <div class="newbook_mainmsg">
      <div class="newbook_cover">
        <div @click="addCover()">
          <span style="color:#FF8000;margin-bottom:15px;font-size: 46px;display: inline-block;border: 2px solid #FF8000;width:40px;height:40px;text-align: center;line-height: 40px;border-radius: 20px;;">+</span>
          <span style="color:white;display: inline-block;width:90%;text-align: center;background: #FF8000;border-radius: 5px;">加个封面吧</span>
        </div>
        <p>封面不小于400X300像素<br />不上传则使用默认封面</p>
      </div>
      <div class="newbook_main">
        <input name="bookname" type="text" placeholder="作品名称,必填.请不要含有特殊符号" />
        <span style="position: absolute;right:10px;top:10px;">0/15</span>
        <hr />
        <input name="sample_prof" type="text" placeholder="小灰字,必填" />
        <span style="position: absolute;right:10px;top:50px;">0/20</span>
        <hr />
        <textarea name="book_profile" placeholder="作品文案,必填"></textarea>
        <span style="position: absolute;right:10px;top:200px;">0/500</span>
      </div>
    </div>

    <div class="newbook_other">
      <span class="othermsg">
        作品状态<span style="color: red;margin-right:10px">*</span>
        <input type="radio" name="bookstate" value="连载" id="state1" checked="checked" />
        <label for="state1">连载</label>
        <input type="radio" name="bookstate" value="完结" id="state2" />
        <label for="state2">完结</label>
        <input type="radio" name="bookstate" value="断更" id="state3" />
        <label for="state3">断更</label>
      </span>
      <hr />
      <span class="othermsg">
        作品属性<span style="color: red;margin-right:10px">*</span>
        <input @click="opentypes()" name="type" class="choose" type="text" placeholder="请选择作品属性" />
        <label for="type"><span class="iconfont icon-arrow"></span></label>
      </span>
      <hr />
      <span class="othermsg">
        作品分类<span style="color: red;margin-right:10px">*</span>
        <input @click="openclassify()" name="classify" class="choose" type="text" placeholder="请选择作品分类" />
        <label for="classify"><span class="iconfont icon-arrow"></span></label>
      </span>
      <hr />
      <span class="othermsg">
        作品标签<span style="color: red;margin-right:10px">*</span>
        <input @click="opentags()" name="tags" class="choose" type="text" placeholder="请选择作品标签" />
        <label for="tags"><span class="iconfont icon-arrow"></span></label>
      </span>
      <hr />
    </div>

    <div id="bgcover" @click="closebgcover()" v-show="isbgcover==true" style="height:667px;width:100%;background: rgba(0,0,0,0.5);z-index: 100;position: fixed;top:0;"></div>

    <div class="types" v-show="typeshow">
      <ul class="types_all">
        <li class="types_second" v-for="(item,index) in typelist" :key="index">
          <b>{{item.type}}</b><br />
          <span style="font-size: 13px;color: #7F7F7F;">{{item.explain}}</span>
        </li>
      </ul>
    </div>

    <div class="newbook_classify" v-show="classifyshow">
      <ul class="classify_all">
        <li :id="'class_'+item.id" @click="getDetails(item.id)" class="classify_second" v-for="(item,index) in classifylist"
          :key="index">
          {{item.classname}}
        </li>
      </ul>
      <ul class="small_all" style="width:84%;height:100%;">
        <li class="small_second" v-for="(item,index) in smallclasses" :key="index" style="width: 100%;height:40px;line-height: 40px;border-bottom: 1px solid #F7F7F7;padding-left:20px;">
          {{item}}
        </li>
      </ul>
    </div>

    <div v-show="tagsshow" style="width: 100%;height:300px;z-index:1000;background: white;position:fixed;bottom:0;padding:10px;">
      选择或自拟标签
    </div>

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
        typelist: [{
          type: '原创',
          explain: '除言情、同人之外的全部作品'
        }, {
          type: '言情',
          explain: '以男女感情的发展为基础的作品'
        }, {
          type: '无CP',
          explain: '以剧情为主、主要角色无爱情线或含有少量言情线的作品'
        }, {
          type: '同人',
          explain: '二次创作的作品'
        }],
        classifylist: [{
          id: 0,
          classname: '动漫',
          smallclass: ['国产', '欧美', '日韩', '综漫']
        }, {
          id: 1,
          classname: '影视',
          smallclass: ['国产', '欧美', '日韩', '泰剧']
        }, {
          id: 2,
          classname: '游戏',
          smallclass: ['国产', '欧美', '日韩']
        }, {
          id: 3,
          classname: '文学',
          smallclass: ['文学']
        }, {
          id: 4,
          classname: '综合',
          smallclass: []
        }, {
          id: 5,
          classname: 'RPS',
          smallclass: ['国产', '欧美', '日韩']
        }, {
          id: 6,
          classname: '其他',
          smallclass: ['其他']
        }, {
          id: 7,
          classname: '历史',
          smallclass: []
        }],
        smallclasses: [],
        addcover: false,
        isbgcover: false,
        typeshow: false,
        classifyshow: false,
        tagsshow: false
      }
    },
    methods: {
      addCover() {
        this.addcover = true;
      },
      opentypes() {
        this.isbgcover = true;
        this.typeshow = true;
      },
      openclassify() {
        this.isbgcover = true;
        this.classifyshow = true;
      },
      opentags() {
        this.isbgcover = true;
        this.tagsshow = true;
      },
      closebgcover() {
        this.typeshow = false;
        this.isbgcover = false;
        this.classifyshow = false;
        this.tagsshow = false;
      },
      getDetails(index) {
        for (let i = 0; i < this.classifylist.length; i++) {
          if (index == this.classifylist[i].id) {
            this.smallclasses = this.classifylist[i].smallclass;
            let dom = document.getElementById('class_' + index);
            dom.style.borderLeft = "3px solid #FF8000";
            dom.style.background = "white";
          } else {
            let dom = document.getElementById('class_' + i);
            dom.style.borderLeft = "";
            dom.style.background = "#F7F7F7";
          }
        }
      }
    },
    mounted() {
      this.getDetails(0);
    }
  }
</script>

<style>
  hr {
    margin: 0;
  }

  .newbook_mainmsg {
    margin-top: 40px;
    width: 100%;
    height: 400px;
    background: white;
    color: #7F7F7F;
  }

  .newbook_mainmsg .newbook_cover {
    font-size: 12px;
    /* border: 1px solid #000000; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .newbook_mainmsg .newbook_cover div {
    width: 75px;
    height: 100px;
    margin: 40px 0 10px 0;
    box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .newbook_mainmsg .newbook_main {
    /* padding:10px; */
    position: relative;
    width: 100%;
  }

  .newbook_mainmsg .newbook_main input {
    width: 100%;
    height: 40px;
    border: 0;
    padding: 0 10px;
    /* -webkit-box-shadow: 0 0 0px 1000px white inset */
  }

  .newbook_mainmsg .newbook_main textarea {
    width: 100%;
    height: 140px;
    border: 0;
    padding: 10px;
  }

  .newbook_other {
    margin-top: 30px;
    background: white;
    padding: 0 10px;
  }

  .newbook_other .othermsg {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 100%;
    ;
  }

  .newbook_other .othermsg input {
    position: relative;
    top: 2px;
  }

  .newbook_other .othermsg label {
    font-weight: 300;
  }

  .newbook_other .othermsg .choose {
    height: 30px;
    width: 70%;
    border: 0;
  }

  .types {
    width: 100%;
    height: 320px;
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }

  .types .types_all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .types .types_all .types_second {
    margin: 10px 0;
    padding: 6px 10px;
    background: #f7f7f7;
    border-radius: 10px;
  }

  .newbook_classify {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 300px;
    background: white;
    display: flex;
  }

  .newbook_classify .classify_all {
    width: 60px;
    height: 100%;
    background: #F7F7F7;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: auto;
  }

  .newbook_classify .classify_all::-webkit-scrollbar {
    width: 0px;
  }

  .newbook_classify .classify_all .classify_second {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
</style>
