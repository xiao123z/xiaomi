<template>
  <div class="time5" ref="wrapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(item, index) in banners">
          <img :src="item.img_url" alt="" id="img" />
        </div>
      </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="ms">
   <div class="s">
<img :src="item.img_url" alt="" v-for="(item,index) in mss" :key="index">
   </div>
   <div class="x">
<img :src="item.img_url" alt="" v-for="(item,index) in msx" :key="index">

   </div>
    </div>
    <div class="listion"></div>
    <div class="rw">
      <div class="rw_l">
<img :src="rw_r.img_url" alt="" srcset="">
      </div>
      <div class="rw_r">
<img :src="rw_r1.img_url" alt="" srcset="">
<img :src="rw_r2.img_url" alt="" srcset="">

      </div>
    </div>
<div class="bk">
<img :src="bk.img_url" alt="" srcset="">
</div>
<ul class="sj">
  <li v-for="(item,index) in  sj1" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
   <li v-for="(item,index) in sj2" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>
</div>

  </li>
  <li v-for="(item,index) in sj3" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>
</div>

  </li>

  <li v-for="(item,index) in sj4" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>
</div>
  </li>

</ul>

<div class="list_action_title">
  {{gdxm}}>
</div>
<div class="bk">
<img :src="xmds.img_url" alt="" srcset="">
</div>
<!-- <ul class="sj">
  <li v-for="(item,index) in dj1" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>
</div>
  </li></ul> -->
  <div class="list_action_title">
  {{gdds}}
</div>
<div class="bk">
<img :src="zncp.img_url" alt="" srcset="">
</div>
<ul class="sj">
  <li v-for="(item,index) in bjb1" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
   <li v-for="(item,index) in bjb2" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>
  </li>
  </ul>
   <div class="list_action_title">
  {{gdxm}}>
</div>
<div class="bk">
<img :src="njzn.img_url" alt="" srcset="">
</div>
   <div class="list_action_title">
  {{mjzn}}>
</div>
<div class="bk">
<img :src="znhw.img_url" alt="" srcset="">
</div>
<ul class="sj">
  <li v-for="(item,index) in znhw1" :key="index" style="width:100vw;height:30vh">
<img :src="item.img_url" alt="" srcset="" style="height:30vh">
<div class="znh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>  
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in  znhw2" :key="index" style="width:100vw;height:30vh">
<img :src="item.img_url" alt="" srcset="" style="height:30vh;float:right">
<div class="znh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>  
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in znhw3" :key="index" style="width:100vw;height:30vh">
<img :src="item.img_url" alt="" srcset="" style="height:30vh">
<div class="znh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>  
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
  </ul>
   <div class="list_action_title">
  {{gdmj}}>
</div>
<!-- <ul>
   <li v-for="(item,index) in mjj" :key="index" style="width:50vw;float:left">
<img :src="item.img_url" alt="" srcset="" style=" width: 50vw;height:40vh">
  </li>
   <li v-for="(item,index) in this.list.data.data.sections[44].body.items" :key="index" style="width:50vw;float:left">
<img :src="item.img_url" alt="" srcset="" style=" width: 50vw;height:40vh">
  </li>
   <li v-for="(item,index) in this.list.data.data.sections[46].body.items" :key="index" style="width:50vw;float:left">
<img :src="item.img_url" alt="" srcset="" style=" width: 50vw;height:40vh">
  </li>
</ul> -->
<!-- <div class="bk">
<img :src="hx.img_url" alt="" srcset="">
</div> -->
<!-- <div class="bk">
<img :src="lj.img_url" alt="" srcset="">
</div> -->
<div style="width:100vw;height:10vh"></div>
  </div> 


</template>
<script>
import Swiper from "swiper";
import {recommend} from '../../api/api'
import 'swiper/swiper-bundle.css';
export default {
  props: {
    tj: {
      type: String,
    },
  },
  data() {
    return {
      nav: "",
      num: "",
      banners: "",
      mss:"",
      rw_r:"",
      rw_r1:"",
      rw_r2:"",
      bk:"",
      xmds:"",
      zncp:"",
      njzn:"",
      znhw:"",
      hx:"",
      lj:"",
      list:{
vvv:""
      },
      sj1:"",
      sj2:"",
      sj3:"",
      sj4:"",
      gdxm:"",
      ds1:"",
      gdds:"",
      bjb1:"",
      bjb2:"",
      gdxm:"",
      mjzn:"",
      znhw1:"",
      znhw2:"",
      znhw3:"",
      gdmj:"",
       data:{
client_id: 180100031051,
        channel_id: "",
        webp: 1,
        page_type: "home",
      }
    };
  },

  methods: {
    // btn(index) {
    //   $(".nav li").eq(index).addClass("ac").siblings().removeClass("ac");
    //   this.num = index;
    // },
       
    initBanner() {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //  autoplay: 1000,
     pagination: {
      el: '.swiper-pagination',
    },
      });
    },
  },
      async mounted() {

             let ad=await recommend()
             this.list=ad.data
    this.banners = ad.data.data.data.sections[0].body.items;
        //  this.banners = this.list.data.data.sections[0].body.items;
    this.mss = ad.data.data.data.sections[1].body.items;
    this.msx = ad.data.data.data.sections[2].body.items;
    this.rw_r=ad.data.data.data.sections[4].body.items[0];
    this.rw_r1=ad.data.data.data.sections[4].body.items[1];
    // this.msx = ad.data.data.data.sections[2].body.items;
    this. rw_r2=ad.data.data.data.sections[4].body.items[2];
      this.bk=ad.data.data.data.sections[6].body.items[0]
      this.sj1=ad.data.data.data.sections[8].body.items
     this.sj2= ad.data.data.data.sections[10].body.items
     this.sj3=ad.data.data.data.sections[12].body.items
     this.sj4=ad.data.data.data.sections[14].body.items
     this.gdxm=ad.data.data.data.sections[16].body.items[0].action_title
    //  this.ds1=ad.data.data.data.sections[20].body.items
     this.gdds=ad.data.data.data.sections[20].body.items[0].action_title
    this.xmds =ad.data.data.data.sections[18].body.items[0];
    this.zncp =ad.data.data.data.sections[22].body.items[0];
    this.bjb1=ad.data.data.data.sections[24].body.items
    this.bjb2=ad.data.data.data.sections[26].body.items
   this.gdxm= ad.data.data.data.sections[28].body.items[0].action_title
    this.njzn = ad.data.data.data.sections[30].body.items[0];
    this.znhw =ad.data.data.data.sections[34].body.items[0];
    // this.list.data.data.sections[36].body.items
this.znhw1=ad.data.data.data.sections[36].body.items
    this.mjzn=this.list.data.data.sections[32].body.items[0].action_title
    this.hx =ad.data.data.data.sections[48].body.items[0];
    this.lj = ad.data.data.data.sections[49].body.items[0];
  this.gdmj=ad.data.data.data.sections[40].body.items[0].action_title
            this.znhw2=ad.data.data.data.sections[37].body.items
            this.znhw3=ad.data.data.data.sections[38].body.items
    },
 

  watch: {
 
    banners() {
      this.$nextTick(function () {
        this.initBanner();
      });
    },
    tj() {
      this.$nextTick(function () {

      });
    },
  },
};
</script>
<style scope>
.conn1 {
  width: 100vw;
  height:10000px ;
  /* background-color: rgb(245, 245, 245) */
  background: #000;
}
 .time5{
  position: fixed;
            top: 13vh;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto;
 }
.swiper-container {
  width: 100vw;
  /* height: 20vh; */
}
#img {
  width: 100vw;
  /* height: 100vh; */
  display: block;
}
.ms{
  width: 100vw;
  height: 22vh;
  position: relative;
}
.s{
  position: absolute;
  top: 0;
}
.x{
  position: absolute;
  top: 10vh;
}
.s,.x{
  margin: 0;
  height: 10vh;

}
.s img,.x img{
  width: 20vw;
  height: 12vh;
}
.rw{
  width: 100vw;

}
.rw_l img{
  width: 50vw;
}
.rw_l{
  float: left;
}
.rw_r{
  float: right;
  width: 50vw;

}
.rw_r img{
  width: 50vw;
}
.listion{
  width: 100vw;
  height: 1vh;
  background-color: rgb(245, 245, 245)
}
.bk img{
  width: 100vw;
}
.sj li{
  width: 50vw;
  height: 44vh;
/* background: white; */
  float: left;
}
li img{
  width: 50vw;
   /* background-color: rgb(245, 245, 245);  */
    height: 25vh;
}
.cr{
  text-align: center;
  width: 50vw;
}
.brief{
  color: rgba(0,0,0,.54);
  font-size: 2vh;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.name{
  font-size: 2vh;
color: rgba(0,0,0,.87);
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.price{
  color: #ea625b;
  font-size: 2vh;
margin-top:1vh
}
.sj{
  width: 100vw;
  display: inline-block;
}

.list_action_title{
  width: 100vw;
  background:white;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
  font-size: 2vh;
    margin-bottom: 1vh;
}
.buybtn{
background: #ea625b;
  width: 25vw;
  height: 4vh;
  margin-left: 13vw;
  font-size: 2vh;
border-radius: 1vh;
line-height: 4vh;
}


.znh{
  float: right;
    width: 50vw;
    height: 32vh;
    background: royalblue;
 padding-top: 5vh;
 padding-left: 2vh;
 box-sizing: border-box;
 background: white;
}
.znh .name{
  font-size: 2.5vh;
}


.divcss5{ text-decoration:line-through} 
</style>