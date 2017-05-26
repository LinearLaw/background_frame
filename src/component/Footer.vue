<template>
    <div id="footer">
        <!-- <h2>This is footer!</h2> -->
        <div class="fr">
          <span>{{nowTime}}</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    #footer{
      width:100%;
      height:30px;
      padding:4px 10px;;
      >div{
        font-size:12px;
      }
    }
    
</style>
<script>
  export default{
    /**
     * @desc footer.vue在页面中没有实际调用，仅占位用
     */
    data:function(){
      return{
        nowTime:""
      }
    },
    mounted:function(){
      this.nowTime = new Date();
    }
  }
</script>