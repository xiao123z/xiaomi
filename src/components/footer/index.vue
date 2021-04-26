<template>
  <div class="footer">
    <div @click="btn">
      <router-link to="/" tag="li" active-class="active">
        <div class="it"><i></i> <span> 首 页</span></div>
      </router-link>
      <router-link to="/category" tag="li" active-class="active">
        <div class="it"><i></i> <span> 分 类</span></div> </router-link
      ><router-link to="/discover" tag="li" active-class="active">
        <div class="it"><i></i> <span> 星 球</span></div> </router-link
      ><router-link to="cart" tag="li" active-class="active">
        <div class="it"><i></i> <span> 购物车</span></div> </router-link
      ><router-link to="/user" tag="li" active-class="active">
        <div class="it"><i></i> <span> 我 的</span></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $("a").click(function(){
      console.log($(this).index());
});
  },
  methods: {
   
  },
};
</script>
<style scoped>
.footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
}
a {
  display: flex;
  width: 20vw;
  text-align: center;
  height: 8vh;
  align-items: center;
  background: white;
  float: left;
  color: #999;
  flex-direction: column;
  text-decoration: none;
  padding: 5px;
  font-size: 2vh;
  box-sizing: border-box;
}
span {
  text-align: left;
  display: block;
  /* width: 9vw; */
  height: 5vh;
  flex-direction: column;
}
.it {
  flex-direction: column;
}
i {
  width: 9vw;
  height: 4vh;
  justify-content: center;
  background: white;
  display: block;
}
a:nth-child(1) i {
  background-image: url("https://m.mi.com/static/img/icon-home-selected.598ca2c8f9.png");
  background-repeat: no-repeat;
  background-size: 4vh;
}
a:nth-child(2) i {
  background-image: url("https://m.mi.com/static/img/icon-category.be93273636.png");
  background-repeat: no-repeat;
  background-size: 4vh;
}
a:nth-child(3) i {
  background-image: url("https://m.mi.com/static/img/icon-star.d051789804.png");
  background-repeat: no-repeat;
  background-size: 4vh;
}
a:nth-child(4) i {
  background-image: url("https://m.mi.com/static/img/icon-cart.585c3aa4d3.png");
  background-repeat: no-repeat;
  background-size: 4vh;
}
a:nth-child(5) i {
  background-image: url("https://m.mi.com/static/img/icon-user.23496a0116.png");
  background-repeat: no-repeat;
  background-size: 4vh;
}
.active {
  color: #ff6700;
}
</style>