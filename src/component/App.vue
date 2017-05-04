<style lang="less" scoped>
  #index{
    width:100%;
    height:100%;
    padding-top:120px;
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
      float:left;
      width:100%
    }
  }
</style>
<template>
  <div id="index">
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