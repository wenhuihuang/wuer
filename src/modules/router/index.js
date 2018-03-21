import React from 'react' // 引入react
import { Route, Switch, Redirect } from 'react-router-dom';
import IndexComponent from '../index/container/index'
import HomeContainer from '../home/container/index'
import AboutContainer from '../about/container/index'
import JobContainer from '../job/container/index'
import JobDetailContainer from '../job/container/detail'
import CompanyContainer from '../company/container/index'
import NewsContainer from '../news/container/index'
import ResumeContainer from '../resume/container/index'
import TrainContainer from '../train/container/index'
import ZizhiContainer from '../zizhi/container/index'
import NoMatch from '../common/noMatch'



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
            <Route path="/train" component={TrainContainer} />
            <Route path="/zizhi" component={ZizhiContainer} />
            <Route component={NoMatch} />
        </Switch>
    </IndexComponent>
)





