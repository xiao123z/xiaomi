<template>
    <div class="top">
        <div class="left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATKADAAQAAAABAAAAMgAAAABQW5lOAAADMUlEQVRoBe2bPYgTQRTH/5NcFBU9ULQQtREUET3FQsXGyuLQRhDBxtqP4xBUsDsbQYRDPRGsBNsT4RoRVBA7PxpBQe1EPT/AIqJ3553J879JhjRmfS+3I9lkHmxmNvPftzO/vJmd3Z0A0UwEnBzHCwi2mo7KTjxHV3NwmK2lSR74we0Tt8naJkwdPqLAeo7hjXOsbUYmp7EEU3hLj6tVLgsYdXIsuwqoTjo/UZnwHnMbJ8AJN4bv83Enw1jHn+qd2ofDw4Ja3BnCfv68B1DFLVQwKSdwQU5h+f+sWt6ANdkIu1MV5/ALr+Uk9jYLwubyC8xzEawkuPsciw/7r0Km+QeW0BH08fOmDGEgJKzEd3cAS1oiWITfhCa8JAS07gFWh7QdQzgYkFcXRZinVMGwz4ZIuy3CwA65h1dN3US0DaLJYKk3h58cXnehhM/6g1KU0/TmsKy2VbCGyo3MD3A8GmS+P+XI1kXCXlPlXA240VrUfokNGG9Z3FW8bP90fz3Sw3/uS2UEC/AV+7l/mfDW+u/VqWA3tUGAdWSXdCOYdddxB0uxhQ1/oAblhQ47fTbrtCOB+Ua6iyijiKPcL/vvVKlgfajpRUcDS+C4a7WnFedVoJqiEs7wDiCAdTywRptvm9s+FeZKmQtgHM/e8+r5ygTN9TCwBqgnJmAIA8w6rVDVmU8ONlG4TSWuP2W9xyhKnrS2NocPnGJYbJVFrNUGAcaTj7Nxm7WV4FTzLLWXUvVCYDZbaJPr1KHGsMW60zdUAo3+m8kneD8SwEIBy76qwmerFhPeLQSw/AAr1N4sWRD0eIS52is4PTDp9S6pR+WVRZ/JMs1Pl7S22nGqG8C6F1gAWInLCMwINgKLwIwEjPIYYRGYkYBRHiMsAjMSMMpjhEVgRgJGeYywCMxIwCiPERaBGQkY5THCIjAjAaM8RlgEZiRglMcIi8CMBIzyGGFtAJtRHyPQarW6+qk1fp363L450z6TktrepgMzfVzHvI//DNuQ4rRZJHjW3EnNHeFLrh2pCl/o+P+NEib8bst0BZ5yofAhlv97dbVwHXUJd1v6ahS4K/jCJeqDVOuWqRfx6A+5CpLYo3H97gAAAABJRU5ErkJggg==">
        </div>
        <div class="center" @click="back()">
            <div class="title">
                <i></i>
                <input type="text" placeholder="搜索商品名称"></div>
            
        </div>
        <div class="right" >
              <div class="ri"><i></i></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
      back(){
        this.$router.push('/seach')
      }
    },
}
</script>
<style scoped>
 .top{
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
 .center{
        position: absolute;
        left:13vw ;
         height: 6vh;
        right: 15vw;
        flex: 1;
       background: #f2f2f2;
        /* float: left; */
 }
 .center .title{
position: relative;
line-height: 6vh;
         height: 6vh;
background:white;

 }
 input{
      width: 65vw;
      height: 6vh;
      border: 0;
      position: absolute;
      right: 0;
      top: 0;
      outline: none
 }
.left{
    box-sizing: border-box;
    position: absolute;
    width: 15vw;
    display: flex;
     height: 6vh;
     flex-direction: row;
     text-align: center;
     background: #f2f2f2;

}
.left img{
     width: 8vw;
    height: 3vh;;
     display: block;
      position: absolute;
  top:50%;
  bottom: 50%;
  margin-top: -1.5vh;
}
.title i {
  width: 9vw;
  height: 4vh;
  position: absolute;
  top:50%;
  bottom: 50%;
  margin-top: -2vh;
  background: white;
  display: block;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=');
background-repeat: no-repeat;
  background-size: 4vh;
}
.right i{
      width: 9vw;
  height: 4vh;
  position: absolute;
  top:50%;
  bottom: 50%;
 left: 50%;
 right: 50%;
 margin-left: -4.5vw;
  margin-top: -2vh;
 background: #f2f2f2;
  display: block;
  background-image: url('https://m.mi.com/static/img/icon-user.23496a0116.png');
background-repeat: no-repeat;
  background-size: 3vh;
  float: right;
}
.ri{
   background: #f2f2f2;
}
.right{
    position: absolute;
  width: 15vw;
     height: 6vh;
   background: #f2f2f2;

    right: 0;
}
</style>