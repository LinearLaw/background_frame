<template>
    <div>
        <!--顶部导航-->
        <header id="header">
            <myheader></myheader>
        </header>

        <!--这里是路由-->
        <section id="router">
            <navrooter></navrooter>
        </section>

        <!--这里是路由显示区域-->
        <section id="routerView">
            <router-view></router-view>
        </section>
        
        <!-- 底部部分，用来显示当前状态 -->
        <footer id="footer">
            <myfooter></myfooter>
        </footer>
    </div>
</template>
<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import Navrouter from './Navrouter.vue'
  export default{
    components:{
      myheader:Header,
      myfooter:Footer,
      navrooter:Navrouter
    },
    data:function(){
      return {

        }
    },
    methods:{
  
    }
  }
</script>
<style lang="less" scoped>
    #header{
      position:fixed;
      top:0;
      left:0;
      width: 100%;
      height:120px;
    }
    #router{
      height:100%;
      width:300px;
      position:fixed;
      left:0;
      top:120px;
      float:left;
      background-color: #eef1f6;
      }
    #routerView{
      float:left;
      width:70%;
      height:100%;
      margin-left:300px;
      padding:30px 40px;
    }
    #footer{
      position:fixed;
      bottom:0;
      left:0;
      float:left;
      width:100%;
      height:30px;
      background-color: #cdd2da;
    }
</style>