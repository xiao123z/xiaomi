<template>
   <div class="time5" ref="wrapper">
   <div class="rm">
     <img :src="rm.img_url" alt="">
   </div>
   <ul class="bjb">
       <li v-for="(item,index) in this.list.data.data.sections[3].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
    <div style="float:left"> <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div></div>
 <div style="float:right"><div class="price" style="">￥{{item.product_price}}起</div>
<div class="buybt">立即购买</div>
</div>
</div>
  </li>
      <li v-for="(item,index) in this.list.data.data.sections[5].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
    <div style="float:left"> <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div></div>
 <div style="float:right"><div class="price" style="">￥{{item.product_price}}起</div>
<div class="buybt">立即购买</div>
</div>
</div>
  </li>
      <li v-for="(item,index) in this.list.data.data.sections[7].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
    <div style="float:left"> <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div></div>
 <div style="float:right"><div class="price" style="">￥{{item.product_price}}起</div>
<div class="buybt">立即购买</div>
</div>
</div>
  </li>
   </ul>
     <div class="rm">
     <img :src="nd.img_url" alt="">
   </div>
       <ul class="sj">
  <li v-for="(item,index) in this.list.data.data.sections[11].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
   <li v-for="(item,index) in this.list.data.data.sections[13].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li> <li v-for="(item,index) in this.list.data.data.sections[15].body.items" :key="index">
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
     <img :src="jd.img_url" alt="">
   </div>
    <ul class="sj">
  <li v-for="(item,index) in this.list.data.data.sections[19].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="cr">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
<div class="buybtn mauto"> 立即购买</div>

</div>

  </li>
   <li v-for="(item,index) in this.list.data.data.sections[21].body.items" :key="index">
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
     <img :src="qt.img_url" alt="">
   </div>
    <ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[25].body.items" :key="index" >
<img :src="item.img_url" alt="" srcset=""  style="width:32vw">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>
</div>

  </li>
   <li v-for="(item,index) in this.list.data.data.sections[27].body.items" :key="index" >
<img :src="item.img_url" alt="" srcset="" style="width:32vw">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>


</div>
   </li>
     <li v-for="(item,index) in this.list.data.data.sections[29].body.items" :key="index" >
<img :src="item.img_url" alt="" srcset=""  style="width:32vw">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price">￥{{item.market_price}}</div>


</div>
   </li>
  </ul>
   <div class="rm">
     <img :src="gw.img_url" alt="">
   </div>
       <ul class="rq">
  <li v-for="(item,index) in this.list.data.data.sections[32].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">

  </li>
   <li v-for="(item,index) in this.list.data.data.sections[33].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">

  </li> <li v-for="(item,index) in this.list.data.data.sections[34].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
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
export default {
  props: {
    sj: {
      type: String,
    },
  },
  data() {
    return {
      rm:"",
      nd:"",
      jd:"",
      qt:"",
      gw:"",
      list:""||JSON.parse( localStorage.getItem('bjb')),
       data:{
client_id: 180100031051,
channel_id: "",
webp: 1,
page_type: "activity",
page_id: 13176
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
      console.log(res);
  this.$store.commit("addbjb",res.data)
     var li= localStorage.getItem('bjb')
     if(li==undefined){
       localStorage.setItem('bjb',JSON.stringify(res.data) )
     }else{
       this.list=JSON.parse(li)
      //  console.log(this.list);
     }
    });
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
       this.rm=this.list.data.data.sections[1].body.items[0]
       this.nd=this.list.data.data.sections[9].body.items[0]
       this.jd=this.list.data.data.sections[17].body.items[0]
       this.qt=this.list.data.data.sections[23].body.items[0]
       this.gw=this.list.data.data.sections[31].body.items[0]
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
.swiper-container {
  width: 100vw;
  /* height: 20vh; */
}
.rm li{
  width: 33vw;
  /* height: 40vh; */
/* background: white; */
  float: left;
  padding: 1vh;
  box-sizing: border-box;
  /* margin-right: 2vh; */
}
.rm li img{
  width: 26vw;
  /* background-color: rgb(245, 245, 245);
    height: 25vh; */
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
.bjb li{
  width: 100vw;
  /* height: 40vh; */
/* background: white; */
  float: left;
  padding: 1vh;
  box-sizing: border-box;
  /* margin-right: 2vh; */
}
.bjb li img{
  width: 96vw;
  /* background-color: rgb(245, 245, 245);
    height: 25vh; */
}
.sj li{
  width: 50vw;
  height: 44vh;
/* background: white; */
  float: left;
}
li img{
  width: 50vw;
  /* background-color: rgb(245, 245, 245); */
    /* height: 25vh; */
}
.rq li{
  width: 50vw;
/* background: white; */
  float: left;
}
.rq li img{
 width: 50vw;
 height: 20vh;
}
/* li img{
  width: 50vw;
  /* background-color: rgb(245, 245, 245); */
    /* height: 25vh; */
.cr{
  text-align: center;
  width: 50vw;
}
.bjb .brief{
  color: rgba(0,0,0,.54);
  font-size: 2vh;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
float: left;
}
.name{
  font-size: 2vh;
color: rgba(0,0,0,.87);
}
 .price{
  color: #ea625b;
  font-size: 2vh;
/* margin-top:1vh */
/* text-align: center; */
}
.bjb,.rq{
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
.buybt{
background: #ea625b;
  width: 25vw;
  height: 4vh;
  text-align: center;
  /* margin-left: 13vw; */
  font-size: 2vh;
border-radius: 1vh;
line-height: 4vh;
}


.bjb .znhh{
  float: right;
    width: 100vw;
    height: 10vh;
    background: royalblue;
padding-top: 2vh;

    padding-left: 2vh;
 box-sizing: border-box;
 background: white;
}
.znhh .name{
  font-size: 2.5vh;
  /* float: left; */
}

.zn li{
  width: 32vw;
  /* height: 40vh; */
/* background: white; */
  float: left;
  padding: 1vh;
  box-sizing: border-box;
  /* margin-right: 2vh; */
}
.zn li img{
  width: 23vw;
 
    height: 25vh; 
}
.divcss5{ text-decoration:line-through} 
</style>