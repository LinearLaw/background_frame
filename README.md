# background_frame
    vue搭建的页面框架
##  用法
    npm install         安装项目依赖
    webpack             打包

    webpack-dev-server  开启服务进行开发，端口为localhost:8080
    或者
    npm run dev         端口为localhost:8086

	tips:注意，webpack-dev-server需要另外全局安装才能生效。

##  项目结构
    |-dist              生成的静态页面文件夹
    |-node_modules      项目依赖

    |-src               开发文件夹
    |---less            less文件夹    
    |---images          图片文件夹
    |---component       vue组件文件夹
    |-----pages         子组件文件夹
    |-----App.vue       主要的vue组件

    |---index.html      主页面
    |---main.js         js入口文件

##  说明
    这是一个使用vue2 + vue-router + element-ui构建的单页面应用。
    功能：信息管理系统。
    用到的模块：
        vue-router            vue路由组件
        element-ui            vue的一个ui框架  
        vue-echarts-v3        echarts插件的vue版，用于绘制图表
        async-validator       表单提交验证插件
        vue-quill-editor      vue富文本组件

    ————————————更新中
