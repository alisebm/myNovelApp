<template>
  <div class="more-class" style="margin-top:10px;">
    <ul class="more-class-ul">
      <router-link tag="li" :to="item.url" class="more-class-ctt" v-for="(item,index) in cttlist" :key="index">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <br/>
        {{item.text}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default{
    props:["cttlist"]
  }
</script>

<style>
  .more-class-ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap:wrap;
    text-align: center;
  }
  .more-class-ul li{
    width:70px;
    flex-grow: 1;
    color:#000000;
  }
  .more-class-ul li span{
    font-size: 30px;
  }
  .more-class-ul li .icon{
    width:3em;
    height:3em;
  }
</style>
