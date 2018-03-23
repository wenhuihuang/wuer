import React from 'react'
import Header from '../../header/container/header'
import Popup from '../../common/popup'
import { connect } from 'react-redux';
import { Success, Failure } from '../../../global/tools'
import '../style/index.scss'
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
class IndexComponent extends React.Component {
    componentDidMount(){
        console.log('-=',this)
    }
    render() {
        const {pathname} = this.props.location
        //没有头部的
        const notHead = ['login']
        return (
            <div className="app-wrapper" >
                {
                    !notHead.includes(pathname.split('/')[1])&&
                    <Header />
                }
                
                <div className="body">
                    {this.props.children}
                </div>
                <Popup />
            </div>
        )
    }

}

export default withRouter(IndexComponent)

