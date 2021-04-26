<template>
  <div class="time5" ref="wrapper">
    <div class="nd" style="width:100vw">
<img :src="nd.img_url" alt="" srcset="" style="width:100vw">
</div>
 <div class="rm">
<img :src="rm.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[3].body.items" :key="index" style=" position: relative;">

<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[5].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[7].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
  <div class="nd" style="width:100vw">
<img :src="hx.img_url" alt="" srcset="" style="width:100vw">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[9].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[11].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="nd" style="width:100vw">
<img :src="lx.img_url" alt="" srcset="" style="width:100vw">
</div>
<ul class="zn">
    <li v-for="(item,index) in this.list.data.data.sections[14].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[16].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="nd" style="width:100vw">
<img :src="wx.img_url" alt="" srcset="" style="width:100vw">
</div>
<div class="nd" style="width:100vw">
<img :src="gd.img_url" alt="" srcset="" style="width:100vw">
</div>
<ul class="zn">
    <li v-for="(item,index) in this.list.data.data.sections[20].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
     <li v-for="(item,index) in this.list.data.data.sections[22].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
     <li v-for="(item,index) in this.list.data.data.sections[24].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
     <li v-for="(item,index) in this.list.data.data.sections[26].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[28].body.items" :key="index" style=" position: relative;">
<div class="tx" v-if="item.product_tag_array">
    <img :src="item.product_tag_array" alt="" style="width:15vw;height:9vh">
</div>
<img :src="item.img_url" alt="" srcset="" >
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div style="width:100vw;height:7vh"></div>
  </div> 

</template>
<script>
import Swiper from "swiper";

import 'swiper/swiper-bundle.css';
import axios from "axios";
import qs from 'qs'
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
  nd:"",
  rm:"",
  hx:"",
  lx:"",
  wx:"",
  gd:"",
  db:"",
      list:""||JSON.parse( localStorage.getItem('jd'))||"",
       data:{
client_id: 180100031051,
channel_id:"",
webp: 1,
page_type: "activity",
page_id: 18642,
      }
    };
  },
 created() { 
    var dataObj = qs.stringify(this.data)
       axios({
      method: "post",
      url: "api/v1/home/page",
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
      data:dataObj

    }).then((res) => {
      // this.list=res.data
      this.list=res.data
  this.$store.commit("addjd",res.data)
    });
  },
  mounted() {
    
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
      // this.banners = this.list.data.data.sections[0].body.items;
        //  this.banners = this.list.data.data.sections[0].body.items;
    //    this.jd = this.list.data.data.sections[21].body.items[0];
    //    this.cd = this.list.data.data.sections[29].body.items[0];
    //    this.ej = this.list.data.data.sections[35].body.items[0];
    //    this.dj = this.list.data.data.sections[43].body.items[0];
    //    this.jj = this.list.data.data.sections[49].body.items[0];
    //    this.cx = this.list.data.data.sections[57].body.items[0];
    //   this.qj = this.list.data.data.sections[65].body.items[0];
    //    this.et = this.list.data.data.sections[71].body.items[0];
    //    this.hc = this.list.data.data.sections[75].body.items[0];
    //    this.yh = this.list.data.data.sections[83].body.items[0];

  


  },

  watch: {
 list(){
this.nd = this.list.data.data.sections[0].body.items[0];
       this.rm = this.list.data.data.sections[2].body.items[0];
       this.hx = this.list.data.data.sections[8].body.items[0];
       this.lx = this.list.data.data.sections[13].body.items[0];
       this.wx = this.list.data.data.sections[17].body.items[0];
       this.gd = this.list.data.data.sections[19].body.items[0];

 },
    banners() {
      this.$nextTick(function () {
        this.initBanner();
      });
    },
    num() {
      this.$nextTick(function () {

      });
    },
  },
};
</script>
<style scope>

 .time5{
  position: fixed;
            top: 13vh;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto;
 }
 .tx{
     position: absolute;
        top: 15vh;
    right: 5vw;
    
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
.zn li{
  width: 33vw;
  /* height: 40vh; */
background: white;
  float: left;
  padding: 1vh;
  box-sizing: border-box;
  /* margin-right: 2vh; */
}
.zn li img{
  width: 30vw;

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
.zn{
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


.znhh{
  float: right;
    width: 30vw;
    height: 14vh;
    background: royalblue;
padding-top: 2vh;
    padding-left: 2vh;
 box-sizing: border-box;
 background: white;
}
.znhh .name{
  font-size: 2.5vh;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}


.divcss5{ text-decoration:line-through} 
</style>