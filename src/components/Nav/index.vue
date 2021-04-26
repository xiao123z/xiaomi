<template>
    <div class="nav">
     
    </div>
</template>
<script>
export default {
      props:{
            hehe:{
                type:String
            }
        },
        data() {
            return {
                list:''
            }
        },
    mounted() {
      
    },
      watch:{
           hehe(){
               this.$nextTick(function () {
                 this.list=this.hehe.data.tabs
            
               });
        }
       }
}
</script>
<style scope>
  
</style>