import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GlobalAction from '../index/actions/index'
import { Link } from 'react-router-dom'
import './noMatch.scss'
class NoMatch extends React.Component{

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(false);
        //设置标题
        this.props.GlobalAction.changeTitleAction('职位详情')
    }

    render(){
        return(
            <div className="home-body">
                <div className="content-404">
                    <h1 className="code">404</h1>
                    <p className="tips">页面不存在!</p>
                    <a className="back-btn" href="javascript:;" onClick={this.backHandler.bind(this)}>返回</a>
                </div>
            </div>
        )
    }

    backHandler(){
        this.props.history.goBack();
    }

}

function mapStateToProps(state) {
    return {
        globalReducer: state.globalReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoMatch)