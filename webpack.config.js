var path = require('path');
var webpack = require('webpack');

//用于动态导出html文件
var HtmlWebpackPlugin = require('html-webpack-plugin')

//执行完webpack命令后自动打开浏览器
var WebpackBrowserPlugin = require('webpack-browser-plugin')

//独立打包style文件、单入口文件、会把所有的less文件、打包到一个文件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//根据运行环境配置不同的文件路径
const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim() || "";
const styleName = NODE_ENV == "development" ? "[name].[hash].css" : "styles/[name].[hash].css";
const entryName = NODE_ENV == "development" ? "[name].[hash].js" : "js/[name].bundle.js";

var config = {
    //webpack打包入口文件
    entry: {
        app: './src/main.js',
        vendor:['react']
    },

    devtool: 'eval-source-map',

    //webpack打包输出路径
    output: {
        path: __dirname + "/dist",
        filename: entryName
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules|static/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            {

                test: /\.(scss|sass)$/,
                exclude: /node_modules|static/,
                use: ExtractTextPlugin.extract({
                use:[ {
                    loader: 'css-loader',
                    options:{
                        minimize: true //css压缩
                    }
                },'sass-loader'],
                fallback: 'style-loader',
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        //自动生成html
        new HtmlWebpackPlugin({
            filename: NODE_ENV == 'development' ? "index.html" : "index.html",
            template: 'src/template.html'
        }),
        new ExtractTextPlugin(styleName),
        //抽取公共模块、当引用操作默认3次的、就抽出、这里的vendor配置了、react
        new webpack.optimize.CommonsChunkPlugin({name:"vendor"})
    ]
};

//开发环境专用配置
if (NODE_ENV != 'production') {
    // 配置开发环境服务。也可以在package.json 中的命令中配置
    config.devServer = {
        //server的根目录
        contentBase: "./src",
        //server 端口
        port: 8080,
        historyApiFallback: true,  //不跳转
        //用于开发环境的代理配置、解决跨域问题
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api': '/'},
                changeOrigin: true,
                secure: false
            }
        }
    }

    config.plugins.push(
        //项目启动后、自动打开浏览器插件
        new WebpackBrowserPlugin()
    )
}

//部署环境
if (NODE_ENV == "production") {
    config.output.publicPath = "../";
}

module.exports = config;