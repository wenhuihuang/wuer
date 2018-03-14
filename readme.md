### React脚手架项目

基于`Webpack`、`ES6`、`Babel`、`Less`、`React`、`React-Router`、`Redux`、`React-Redux`、`Redux-Saga`创建的SPA前端脚手架项目！

使用:

#### 项目初始化

安装项目依赖包:

>   npm install

#### 项目启动

详情查看`package.json`

>   开发环境、已经集成Webpack-dev-server、动态编译、预览：
>
>   npm run dev

>   发布环境、项目打包、编译：
>
>   npm run build

#### 项目模块说明

     React-Redux:

         连接React和Redux

     Saga:

         监听异步Action请求、

         自动派发异步请求的成功、失败Action

         通过公共函数、生成Action对应的成功、失败Action类型

     Reducer:

         唯一Reducer入口、用于合并子模块的Reducers

     Modules:
         actions:
             type
             actions
         reducers
     API:
         对Fetch接口进行封装、操作
         目前只封装了get请求











