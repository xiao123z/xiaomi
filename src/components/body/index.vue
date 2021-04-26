<template>
    <div class="main">
        <div class="time4">
       <ul class="nav">
       <li  v-for="(item ,index) in nav" :key="index" @click="btn(index)" :class="index==0?'ac':''">
           {{item.name}}</li>
    </ul>
        </div>
  
    <Tj :tj="hehe" v-if="num==0?true:false">1</Tj>
    <Sj :sj="hehe" v-if="num==1?true:false">2</Sj>
    <Zn  v-if="num==2?true:false">3</Zn>
    <Ds v-if="num==3?true:false">4wwwwww</Ds>
    <Jd v-if="num==4?true:false">5</Jd>
    <Bjb v-if="num==5?true:false">6</Bjb>
 
     </div>
</template>
<script>
import BS from  'better-scroll'
import Zn from "../zn/index";
import Sj from "../sj/index";
import Jd from "../jd/index";
import Bjb from "../bjb/index";
import Ds from "../ds/index";
import Tj from "../tj/index";
export default {
     components: { Zn, Sj, Jd ,Bjb,Ds,Tj},
     props:{
            hehe:{
                type:String
            },
            sj:{type:String}
        },
        data() {
            return {
                nav:'',
                num:"",
                banners:"",
                sj:localStorage.getItem("sj")
            }
        },
        methods: {
            btn(index){
              $('.nav li').eq(index).addClass('ac').siblings().removeClass('ac');
                 this.num=index
                 console.log(111111,this.num);
            
        },
     
            },
    mounted() {
   var nav=JSON.parse( localStorage.getItem('list'))
     this.nav=nav.data.tabs
     
     console.log(this.num);
    },
  
}
</script>
<style>
.main{
    flex: 1;
    width: 100vw;
       background: #f2f2f2;
    position: relative;
    box-sizing: border-box;
}  
.time4{
  position: absolute;
  top: 0;
}
.ac{
        color: rgb(237, 91, 0);
    border-color: rgb(237, 91, 0);
   border-bottom: solid 1px;
}
.nav{
     height: 7vh;
     width: 100vw;
     padding: 2px;
box-sizing: border-box;
          background: #f2f2f2;

padding-left: 11px;
 }
 .nav li{
     float: left;
     line-height: 7vh;
     width: 16vw;
     font-size: 2vh;
     height: 6vh;
     text-align: center;
 }


        .box2{background: #f0f;}
        .box3{background: #ff0;}
        .box4{background: #00f;}
</style>