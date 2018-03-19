import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
class ResumeContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('简历')
    }

    render(){
        return(
            <div>
                简历
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { 
        todos: state.homeReducer.todos,
        list:state.homeReducer.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // HomeAction:bindActionCreators(HomeAction, dispatch),
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResumeContainer)