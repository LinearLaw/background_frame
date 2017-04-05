const path = require("path");
const Hwp = require("html-webpack-plugin");

var obj = {
  /**
   * entry用于指定需要处理的js入口文件
   * 对于vue，这里处理创建vue对象的main.js
   */
  entry: {
    app: "./src/main.js"
  },
  /**
   * output用于指定输出文件的路径和打包之后的js名称
   */
  output: {
    path: path.join(__dirname, "./dist"),
    // publicPath: '/dist/',
    filename: "bundle.js"
  },
  /**
   * module指定less文件和vue文件的处理工具，
   * ————loader
   * vue用vue-loader，
   * less用vue-style-loader、style-loader、css-loader、less-loader
   */
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'vue-style-loader!style-loader!css-loader!less-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true
  // },
  // devtool: '#eval-source-map',
  /**
   * plugins里面写一个new HtmlWebpackPlugin，
   * 里面的template指定了需要插入script标签的html文件
   */
  plugins: [
    new Hwp({
      template: './src/index.html'
    })
  ]
}
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ])
// }
module.exports = obj