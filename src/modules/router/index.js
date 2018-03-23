import React from 'react' // 引入react
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeadRoute from './headRoute'
import NotHeadRoute from './notHeadRoute'
//组件
import IndexComponent from '../index/container/index'
// import HomeContainer from '../home/container/index' //旧版首页
import HomeContainer from '../home/container/index2' //新版首页
import AboutContainer from '../about/container/index'
import JobContainer from '../job/container/index'
import JobDetailContainer from '../job/container/detail'
import LoginContainer from '../user/container/login'
import CompanyContainer from '../company/container/index'
import NewsContainer from '../news/container/index'
import ResumeContainer from '../resume/container/index'
import ResumeDetailContainer from '../resume/container/detail'
import TrainContainer from '../train/container/index'
import ZizhiContainer from '../zizhi/container/index'
import NoMatch from '../common/noMatch'


/* 
  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  ); */


export const RoutesComponent = (
    <IndexComponent>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/home" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            {/* classify?/:major?/:province?/:city? */}
            <Route path="/job/:params?" component={JobContainer} />
            <Route path="/jobDetail/:id" component={JobDetailContainer} />
            <Route path="/company" component={CompanyContainer} />
            <Route path="/news" component={NewsContainer} />
            <Route path="/resume" component={ResumeContainer} />
            <Route path="/resumeDetail/:id" component={ResumeDetailContainer} />
            <Route path="/train" component={TrainContainer} />
            <Route path="/zizhi" component={ZizhiContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route component={NoMatch} />
        </Switch>
    </IndexComponent>
)





