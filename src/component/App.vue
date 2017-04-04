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
      margin-left:30px;
      margin-top:10px;
      >ul{
          border:1px solid #f0f0f0;
          border-radius:5px;
          height:90%;      
        >li{
            width:100%;
            height:30px;
          >a{
            width:100%;
            height:100%;
            display:block;
            padding-left:20px;            
            cursor:pointer;
            font:14px/30px "";
            &:hover{
              background-color:skyblue;
              color:#fff;
            }
          }
          &+li{
            border-top:1px solid #f0f0f0;
          }
        }
      }
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
      <ul>
        <li>
          <router-link to="/pageone" >点击切换pageone</router-link>
        </li>
        <li>
          <router-link to="/pagetwo" >点击切换pagetwo</router-link>
        </li>
        <li>
          <router-link to="/pagethree" >点击切换pagethree</router-link>
        </li>
        <li>
          <router-link to="/pagefour" >点击切换pagefour</router-link>
        </li>
      </ul>
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
  export default{
    components:{
      myheader:Header,
      myfooter:Footer
    },
    data:function(){
      return {

        }
    },
    methods:{
  
    }
  }

</script>