import React from 'react' // 引入react
import { Route, Switch, Redirect } from 'react-router-dom';
import IndexComponent from '../index/container/index'
import HomeContainer from '../home/container/index'
import AboutContainer from '../about/container/index'
import JobContainer from '../job/container/index'
import NoMatch from '../common/noMatch'




export const RoutesComponent = (
    <IndexComponent>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/home" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/job" component={JobContainer} />
            <Route component={NoMatch} />
        </Switch>
    </IndexComponent>
)





