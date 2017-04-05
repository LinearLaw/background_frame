/**
 * main.js，作为index.html工程化的入口文件存在，
 * 里面写有vue实例、路由注册
 * 其中，非路由组件的注册写在App.vue中
 * 而，路由组件定义在路由规则中，并需要引入对应模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './component/App.vue'
/**
 * @desc 引入element-ui
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import "./less/common.less"
/**
 * @desc 引入需要配置路由的组件
 */
import main from './component/pages/main.vue'
import page_1_1 from './component/pages/Page_1-1.vue';
import page_1_2 from './component/pages/Page_1-2.vue';
import page_2 from './component/pages/Page_2.vue';
import page_3 from './component/pages/Page_3.vue';
import page_4 from './component/pages/Page_4.vue';
import personal from './component/pages/Personal.vue';
import avatar from './component/pages/Avatar.vue';

/**
 * @desc 注册路由、配置路由规则
 */
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', component: main },
    { path: '/pageoneone', component: page_1_1 },
    { path: '/pageonetwo', component: page_1_2 },
    { path: '/pagetwo', component: page_2 },
    { path: '/pagethree', component: page_3 },
    { path: '/pagefour', component: page_4 },
    { path: '/personal', component: personal },
    { path: '/avatar', component: avatar },
  ]
})
/**
 * @desc 注册element-ui
 */
  Vue.use(ElementUI)
/**
 * @desc 创建实例化vue对象
 */
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
})