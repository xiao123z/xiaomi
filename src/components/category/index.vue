<template>
  <div class="fl">
    <div class="topp">
      <div class="back" @click="back()">
        <i></i>
      </div>
      <div class="center">分类</div>
      <div class="seach" @click="seach()">
        <i></i>
      </div>
    </div>
    <div class="const">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from 'qs'
export default {
  data() {
    return {
      num: 0,
      list: "" || JSON.parse(localStorage.getItem("fl")),
      data: {
        client_id: 180100031051,
        channel_id: "",
        webp: 1,
      },
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    seach(){
          this.$router.push('/seach')
    }
  },
  mounted() {},
  created() {
    var dataObj = qs.stringify(this.data);
    axios({
      method: "post",
      url: "api/v1/home/category_v2",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataObj,
    }).then((res) => {
      // this.list=res.data
      console.log(res);
      this.$store.commit("addfl", res.data);
      var li = localStorage.getItem("fl");
      if (li == undefined) {
        localStorage.setItem("fl", JSON.stringify(res.data));
      } else {
        this.list = JSON.parse(li);
        //  console.log(this.list);
      }
    });
  },
};
</script>
<style scope>
.fl {
  height: 100vh;
  width: 100vw;
  /* background: blue; */
  z-index: 99999;
}
.topp {
  width: 100vw;
  height: 8vh;
  display: flex;
  background: #f2f2f2;
  flex-direction: row;
  position: relative;
}
.topp .center {
  height: 8vh;
  flex: 1;
  text-align: center;
  line-height: 8vh;
  font-size: 3vh;
}

.topp .back,
.seach {
  width: 12vw;
  background: #f2f2f2;
  height: 8vh;
  position: absolute;
}
.topp .back{
    left: 0;
}
.topp .seach{
    right: 0;
}
.topp .back i {
  width: 9vw;
  height: 4vh;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  margin-left: -4.5vw;
  margin-top: -2vh;
  /* background: #f2f2f2; */
  display: block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC);

  background-repeat: no-repeat;
  background-size: 4vh;
  float: right;
}
.topp .seach i {
  width: 9vw;
  height: 4vh;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  margin-left: -5vh;
  margin-top: -2vh;
  /* background: #f2f2f2; */
  display: block;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-size: 5vh;
  float: right;
}
.const {
  position: absolute;
  top: 8vh;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: #000;
}
.const .left {
  width: 25vw;
  background: red;
  height: 92vh;
}
.const .right {
  width: 75vw;
  background: blue;
  overflow: auto;
  height: 92vh;
}
</style>