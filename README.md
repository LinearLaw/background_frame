# background_frame
    vue搭建的页面框架

# 安装
    npm install         安装项目依赖
	webpack             打包
## 全局安装webpack
    npm i -g webpack

## 全局安装webpack-dev-server
    npm i -g webpack-dev-server

# 开启服务
    	webpack-dev-server
    		默认地址为localhost:8080
	或
    	npm run dev        
			端口为localhost:8086

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
