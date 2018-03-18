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
//重新计算大小
import './common/js/resetSize'
const sagaMiddleware = createSagaMiddleware()
const middleware = []
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())

}
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
        <Router>
            {RoutesComponent}
            {/* <DevTools /> */}
        </Router>
    </Provider>
    , document.getElementById('test'));


