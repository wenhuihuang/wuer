import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import * as CommonAction from '../../common/actions/index'
import * as JobAction from '../../job/actions/index'
import { bindActionCreators } from 'redux';
import Condition from '../../common/condition'
import List from '../components/list'
import { Link } from 'react-router-dom'
import '../style/index.scss'
class LoginContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('登录')


    }

    componentDidUpdate(){
        console.log(this.props.match.params)

         /**设置全局弹框 **/
         this.props.GlobalAction.changePopupAction({
            isShow:false,
            isClose:true,
            style:{
                top:0,
                bottom:0,
                display:'none'
            }
        });
        /**设置全局弹框结束 **/
    }

    render(){
        return(
            <div className="login-wrap">
                <div className="logo-wrap">
                <Link to="/" className="logo-link"><img src="../../../common/images/logo.png" /></Link>
                </div>
                <form action="/login" onSubmit={this.loginHandler.bind(this)}>
                    <div className="userName-wrap">
                        <span className="icon"></span>
                        <input type="text" name="userName" placeholder="请输入手机"/>
                    </div>
                    <div className="password-wrap">
                        <span className="icon"></span>
                        <input type="password" name="password" placeholder="请输入密码"/>
                    </div>
                    <div className="sub-wrap">
                        <input type="submit" value="登录" className="submit-btn" />
                    </div>
                </form>
                <div className="bottom-function">
                    <Link to="">忘记密码</Link>
                    <span>|</span>
                    <Link to="">免费注册</Link>
                </div>
            </div>
        )
    }

    loginHandler(event){
        
    }

}




const mapStateToProps = state => {
    return { 
        conditionReducer:state.conditionReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch),
        CommonAction:bindActionCreators(CommonAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)