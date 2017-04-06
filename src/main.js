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
import VueQuillEditor from 'vue-quill-editor'
import "./less/common.less"
/**
 * @desc 引入需要配置路由的组件
 */
import main from './component/pages/Main.vue'
import login from './component/Login.vue'
import chart_1 from './component/pages/Chart-1.vue';
import chart_2 from './component/pages/Chart-2.vue';
import table_1 from './component/pages/Table-1.vue';
import table_2 from './component/pages/Table-2.vue';
import setting from './component/pages/Setting.vue';
import docu from './component/pages/Document.vue';
import adddoc from './component/pages/AddDocument.vue';
import contact from './component/pages/Contact.vue';
import personal from './component/pages/Personal.vue';
import avatar from './component/pages/Avatar.vue';

/**
 * @desc 注册路由、配置路由规则
 */
Vue.use(VueRouter)
Vue.use(VueQuillEditor)

const router = new VueRouter({
  routes: [
    { path: '/', component: main },
    { path: '/login', component: login },
    { path: '/chart_1', component: chart_1 },
    { path: '/chart_2', component: chart_2 },
    { path: '/table_1', component: table_1 },
    { path: '/table_2', component: table_2 },
    { path: '/setting', component: setting },
    { path: '/document', component: docu },
    { path: '/document/adddoc', component: adddoc },
    { path: '/contact', component: contact },
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