<template>
<div class="box">
 <router-view></router-view>
<Footer></Footer>
</div>
</template>

<script>
import Footer from './components/footer/index'
export default {
    components:{Footer}
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li{
list-style: none;
  }
.box{
  width:100vw;
  height: 100vh;
  display: flex;
 flex-direction: column;
 position: relative;
}
</style>
