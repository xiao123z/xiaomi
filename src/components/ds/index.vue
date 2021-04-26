<template>
  <div class="time5" ref="wrapper">
    <div class="bk">
<img :src="mx.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[2].body.items" :key="index" style="width:50vw">
<img :src="item.img_url" alt="" srcset="" style="width:50vw">
<div class="znhh" style="width: 46vw;">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[4].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[6].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="bk">
<img :src="zq.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[11].body.items" :key="index" style="width:50vw">
<img :src="item.img_url" alt="" srcset="" style="width:50vw">
<div class="znhh" style="width: 46vw;">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[13].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[15].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="bk">
<img :src="qmp.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[19].body.items" :key="index" style="width:50vw">
<img :src="item.img_url" alt="" srcset="" style="width:50vw">
<div class="znhh" style="width: 46vw;">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[21].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[23].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="bk">
<img :src="th.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[26].body.items" :key="index" style="width:50vw">
<img :src="item.img_url" alt="" srcset="" style="width:50vw">
<div class="znhh" style="width: 46vw;">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[28].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="bk">
<img :src="hw.img_url" alt="" srcset="">
</div>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[32].body.items" :key="index" style="width:50vw">
<img :src="item.img_url" alt="" srcset="" style="width:50vw">
<div class="znhh" style="width: 46vw;">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<ul class="zn">
  <li v-for="(item,index) in this.list.data.data.sections[34].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>   
<div class="price">￥{{item.product_price}}
 <span class="divcss5">￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
    <li v-for="(item,index) in this.list.data.data.sections[36].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>    <li v-for="(item,index) in this.list.data.data.sections[38].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>    <li v-for="(item,index) in this.list.data.data.sections[40].body.items" :key="index">
<img :src="item.img_url" alt="" srcset="">
<div class="znhh">
  <div class="name">{{item.product_name}}</div>
<div class="brief">{{item.product_brief}}</div>
<div class="price" style="">￥{{item.product_price}}
 <span class="divcss5" >￥{{item.product_org_price}}</span>
</div>
</div>
  </li>
</ul>
<div class="bk">
<img :src="db.img_url" alt="" srcset="">
</div>
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
      banners: "",
      mx:"",
    zq:"",
    qmp:"",
    th:"",
    hw:"",
    db:"",
      list:""||JSON.parse( localStorage.getItem('ds')),
       data:{
client_id: 180100031051,
channel_id: "",
webp: 1,
page_type: "activity",
page_id: 19071,
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
  this.$store.commit("addds",res.data)
     var li= localStorage.getItem('ds')
     if(li==undefined){
       localStorage.setItem('ds',JSON.stringify(res.data) )
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
      this.banners = this.list.data.data.sections[0].body.items;
        //  this.banners = this.list.data.data.sections[0].body.items
       this.mx = this.list.data.data.sections[0].body.items[0];
       this.zq = this.list.data.data.sections[9].body.items[0];
       this.qmp = this.list.data.data.sections[17].body.items[0];
       this.th = this.list.data.data.sections[24].body.items[0];
       this.hw = this.list.data.data.sections[30].body.items[0];
       this.db = this.list.data.data.sections[42].body.items[0];


  


  },

  watch: {
 
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
/* background: white; */
  float: left;
  padding: 1vh;
  box-sizing: border-box;
  /* margin-right: 2vh; */
}
.zn li img{
  width: 26vw;
  
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
}


.divcss5{ text-decoration:line-through} 
</style>