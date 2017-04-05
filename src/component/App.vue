<style lang="less" scoped>
  #index{
    width:100%;
    height:80%;
    #header{
      height:120px;
    }
    #router{
      height:100%;
      float:left;
      width:300px;
      /*padding-left:30px;
      padding-top:10px;*/
      background-color: #eef1f6;
      }
    #routerView{
      float:left;
      height:100%;
      padding:20px 20px;
    }
    #footer{
      float:left;
      width:100%
    }
  }
</style>
<template>
  <div id="index">

    <header id="header">
      <myheader></myheader>
    </header>

    <section id="router">
      <!--<div>这里是路由</div>-->
      <navrooter></navrooter>
    </section>

    <section id="routerView">
      <!--<div>这里是路由显示区域</div>-->
      <router-view></router-view>
    </section>
     <!-- 这里的footer不一定会用到 
    <footer id="footer">
      <myfooter></myfooter>
    </footer>-->
  </div>

</template>

<script>
  /**
   * App.vue，作为vue组件的入口， 
   * 在这里可以定义非路由组件，
   * 也可以写路由的标签入口和配置组件显示位置
   */
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