const path = require("path");
const Hwp = require("html-webpack-plugin");

var obj = {
  /**
   * entry用于指定需要处理的js入口文件
   * 对于vue，这里处理创建vue对象的main.js
   */
  entry:{
    app:"./src/main.js"
  },
  /**
   * output用于指定输出文件的路径和打包之后的js名称
   */
  output:{
    path:path.join(__dirname,"./dist"),
    filename:"bundle.js"
  },
  /**
   * module指定less文件和vue文件的处理工具，
   * ————loader
   * vue用vue-loader，
   * less用vue-style-loader、style-loader、css-loader、less-loader
   */
  module:{
    loaders:[
    //   {
    //   test:/\.js$/,
    //   loader:'babel-loader',
    //   query:{
    //     presets:['es2015']
    //   }
    // },
    {
      test:/\.vue$/,
      loader:'vue-loader'
    },
    {
      test:/\.less$/,
      loader:'vue-style-loader!style-loader!css-loader!less-loader'
    }]
  },
  /**
   * plugins里面写一个new HtmlWebpackPlugin，
   * 里面的template指定了需要插入script标签的html文件
   */
  plugins:[
    new Hwp({
      template:'./src/index.html'
    })
  ]
}
module.exports = obj