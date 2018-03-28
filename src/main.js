import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, hashHistory, HashRouter, Route, Switch } from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

import { RootReducer } from './reducer';
import rootSaga from './saga'
// import DevTools from './global/DevTools'



import { RoutesComponent } from './modules/router/index'
//导入公共样式
import './common/style/normalize.scss'
import './common/style/reset.scss'
import './common/style/comm.scss'
import './common/style/public.scss'
//重新计算大小
import './common/js/resetSize'

const middleware = []
//如果是开发环境
if (process.env.NODE_ENV.trim() === 'development') {
    middleware.push(createLogger())

}else{ //打包环境
    //将console.log去除
    console.log=function(){}
}
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware);
//store
const finalCreateStore = compose(
    applyMiddleware(...middleware),
    // DevTools.instrument()
)(createStore);

const store = finalCreateStore(RootReducer);
sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {RoutesComponent}
            {/* <DevTools /> */}
        </HashRouter>
    </Provider>
    , document.getElementById('app'));


