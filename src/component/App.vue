<style lang="less" scoped>
  #index{
    width:100%;
    height:100%;
    padding-top:120px;

  }
</style>
<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
  /**
   * App.vue，作为vue组件的入口， 
   * 在这里可以定义非路由组件，
   * 也可以写路由的标签入口和配置组件显示位置
   */
   export default{
    data(){
      return{
        testData:""
      }
    },
    mounted(){
      if(!localStorage.getItem('ms_username')){
        this.$router.push({"name":"login"});
      }
      this.addData();
    },
    methods:{
      /**
       * async await 用法，先定义一个promise函数，函数里面写异步操作，
       *       异步操作里面需要加入resolve()，向下呈递函数
       *       接着定义一个async函数，里面写“ await promise函数() ”，
       *       然后.then(()=>{})里面写函数后续要做的事情
       */
      getData(){
        return new Promise((resolve)=>{
          setTimeout(()=>{console.log(123);resolve();},3000)
        })
      },
      async addData(){
        await this.getData().then(()=>{
          console.log(234);
        });
        
      }
    }
   }

</script>