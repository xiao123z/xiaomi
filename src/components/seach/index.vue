<template>
  <div class="fl">
    <div class="top">
      <div class="left" @click="back()">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC"
        />
      </div>
      <div class="center">
          <input type="text" placeholder="搜索商品名称"  @input="specifiName"/>
      </div>
      <div class="right">
        <div class="ri"><i></i></div>
      </div>
    </div>
   
       <div class="mi"  v-if="lis">
           <ul><li v-for="(item,index) in lis" :key="index">{{item.title}}</li></ul>


       </div>
        <div class="connst" v-else>
      <div class="min">
        <div class="tou">搜索发现</div>
        <div class="log"><img :src="log" alt="" srcset=""></div>
        <ul class="mna">
            <li v-for="(item,index) in list" :key="index">
                {{item.desc}}
            </li>
        </ul>
      </div>
   
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from 'qs'
export default {
  data() {
    return {
list:"",
log:"",
inp:"",
lis:"",
      data: {
        client_id: 180100031051,
        channel_id: "",
        webp: 1,
        version: 2,
      },
    };
 
  },
     methods: {
         back(){
        this.$router.push('/')
      },
        specifiName(e){
        var val = e.target.value;
var dat={
client_id: 180100031051,
channel_id: "",
webp: 1,
query: val,
}

          var dataObj = qs.stringify(dat);
    axios({
      method: "post",
      url: "api/v1/hisearch/suggestion_v3",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataObj,
    }).then((res) => {
     
    //   console.log(res);
    this.lis=res.data.data.list
  console.log(res.data.data.list);
    });
        }
    },
  created() {
    var dataObj = qs.stringify(this.data);
    axios({
      method: "post",
      url: "api/v1/hisearch/se_default",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataObj,
    }).then((res) => {
      this.list=res.data.data.discover_list
    //   console.log(res);
    this.log=res.data.data.ad_list[0].body.items[0].img_url;
  console.log(this.list);
    });
  },
};
</script>
<style scope>
.fl {
  height: 100vh;
  width: 100vw;
  background: white;
  position: relative;
  z-index: 9999999;
}
.top {
  height: 6vh;
  width: 100vw;
  display: flex;
  background: #f2f2f2;
  position: relative;
  float: left;
  flex-direction: row;
  padding: 2px;
  box-sizing: border-box;
}
.center {
  position: absolute;
  left: 13vw;
  height: 6vh;
  right: 15vw;
  flex: 1;
  background: #f2f2f2;
  /* float: left; */
}
.center .title {
  position: relative;
  line-height: 6vh;
  height: 5vh;
  background: white;
}
input {
  width: 71vw;
  height: 5vh;
  border: 0;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  outline: none;
}
.left {
  box-sizing: border-box;
  position: absolute;
  width: 15vw;
  display: flex;
  height: 6vh;
  flex-direction: row;
  text-align: center;
  background: #f2f2f2;
}
.left img {
  width: 8vw;
  height: 3vh;
  display: block;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin-top: -1.5vh;
}
.title i {
  width: 9vw;
  height: 4vh;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin-top: -2vh;
  background: white;
  display: block;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-size: 4vh;
}
.right i {
  width: 9vw;
  height: 4vh;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  margin-left: -4.5vw;
  margin-top: -2vh;
  background: #f2f2f2;
  display: block;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-size: 3vh;
  float: right;
}
.ri {
  background: #f2f2f2;
}
.right {
  position: absolute;
  width: 15vw;
  height: 6vh;
  background: #f2f2f2;

  right: 0;
}
.connst {
  position: absolute;
  top: 6vh;
  bottom: 0;
  right: 0;
  left: 0;
 background: white;
  padding: 2vh;
  box-sizing: border-box;
}
.mi{
    position: absolute;
  top: 6vh;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 2vh;
  box-sizing: border-box; 
}
.mi ul{
    background: gray;
    height: 92vh;
}
.mi li{
    width: 93vw;
    height: 8vh;
    background: white;
    line-height: 8vh;
    padding-left: 2vh;
    border-bottom: 0.2vh solid gray;
    box-sizing: border-box;
    font-size: 2vh;
}
.min {
  width: 92vw;
  height: 50vh;
  
}
.tou {
  font-size: 3vh;
  width: 92vw;
  height: 6vh;
}
.log{
    width: 92vw;
}
.log img{
    width: 92vw;
}
.mna{
    width: 92vw;
    height: 50vh;
    background: white;
    margin-top: 1vh
}
.mna li{
    float: left;
    width: 42vw;
    font-size: 2vh;
    margin-bottom: 2vh;
    margin-left: 2vh;
}
</style>