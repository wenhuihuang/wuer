import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import * as ResumeAction from '../../resume/actions/index'
import { bindActionCreators } from 'redux';
import Condition from '../../common/condition'
import List from '../components/list'

class ResumeContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('简历')
        this.props.ResumeAction.fetchResumeListAction()
    }

    render(){
        return(
            <div>
                <Condition />
                <List list={this.props.resumeReducer.list}/>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { 
        todos: state.homeReducer.todos,
        list:state.homeReducer.list,
        resumeReducer:state.resumeReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // HomeAction:bindActionCreators(HomeAction, dispatch),
        GlobalAction:bindActionCreators(GlobalAction, dispatch),
        ResumeAction:bindActionCreators(ResumeAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResumeContainer)