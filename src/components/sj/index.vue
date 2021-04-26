<template>
   <div class="time5" ref="wrapper">
   <div class="rm">
     <img :src="rm.img_url" alt="">
   </div>
   <div class="rm">
     <img :src="bd.img_url" alt="">
   </div>  <div class="rm">
     <img :src="sj1.img_url" alt="">
   </div>  <div class="rm">
     <img :src="sj2.img_url" alt="">
   </div>  <div class="rm">
     <img :src="kj.img_url" alt="">
   </div>  <div class="rm">
     <img :src="sz.img_url" alt="">
   </div>
   <ul class="sj">
  <li v-for="(item,index) in this.list.data.data.sections[12].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li></ul>
    <div class="rm">
     <img :src="pj.img_url" alt="">
   </div>
      <ul class="sj">
  <li v-for="(item,index) in this.list.data.data.sections[16].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
    <li v-for="(item,index) in this.list.data.data.sections[18].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
  </ul>
  <div class="rm">
     <img :src="rmpj.img_url" alt="">
   </div>

      <ul class="sj">
  <li v-for="(item,index) in this.list.data.data.sections[22].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
    <li v-for="(item,index) in this.list.data.data.sections[24].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
      <li v-for="(item,index) in this.list.data.data.sections[26].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
      <li v-for="(item,index) in this.list.data.data.sections[28].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
  </ul>
<div style="width:100vw;height:6vh"></div>
  </div> 


</template>
<script>
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import axios from "axios";
import qs from 'qs'
import {phone} from '../../api/api'
export default {
  props: {
    sj: {
      type: String,
    },
  },
  data() {
    return {
      rm:"",
      bd:"",
      sj1:"",
      sj2:"",
      kj:"",
      sz:"",
      pj:"",
      rmpj:"",
      list:"",
 
    };
  },
async created() { 
  let dat=await phone()
 this.list=dat.data

  //      this.$nextTick(function () {
  //   var dataObj = qs.stringify(this.data)
  //    axios({
  //     method: "post",
  //     url: "api/v1/home/page",
  //   headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  //     data:dataObj

  //   }).then((res) => {
  //     this.list=res.data
  //     console.log(res);
  // 
  //    var li= localStorage.getItem('sj')
  //    if(li==undefined){
  //      localStorage.setItem('sj',JSON.stringify(res.data) )
  //    }else{
  //      this.list=res.data
  //     //  console.log(this.list);
  //    }
  //   });
  //      })
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
  
  mounted() {
       this.rm=this.list.data.data.sections[0].body.items[0];
       this.bd=this.list.data.data.sections[2].body.items[0];
       this.sj1=this.list.data.data.sections[4].body.items[0];
       this.sj2=this.list.data.data.sections[6].body.items[0];
       this.kj=this.list.data.data.sections[8].body.items[0];
       this.sz=this.list.data.data.sections[10].body.items[0];
       this.pj=this.list.data.data.sections[14].body.items[0];
       this.rmpj=this.list.data.data.sections[20].body.items[0];
  },
};
</script>
<style scope>
.rm {width: 100vw;
}
.rm img{
  width: 100vw;

}.sj li{
  width: 50vw;
  height: 44vh;
/* background: white; */
  float: left;
}
li img{
  width: 50vw;

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
</style>