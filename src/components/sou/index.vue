<template>
  <div class="sy">
    <Top></Top>
   
    <Body :hehe="list"></Body>
    
  </div>
</template>

<script>
import Top from "../top/index";
import Nav from "../Nav/index";
import Body from "../body/index";
import axios from "axios";
import qs from 'qs'
export default {
  components: { Top, Body, Nav },
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list'))||"" ,
      data:{
client_id: 180100031051,
        channel_id: "",
        webp: 1,
        page_type: "home",
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
  this.$store.commit("addList",res.data)
     var li= localStorage.getItem('list')
     if(li==undefined){
       localStorage.setItem('list',JSON.stringify(res.data) )
     }else{
       this.list=JSON.parse(li)

     }
    });
  },
  mounted() {
 
  },
watch:{
           list(){
               this.$nextTick(function () {
              
               
            console.log(this.banners);
  
               });
        },
        }
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.sy {
  width: 100vw;
  height: 100vh;
  background: olive;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
