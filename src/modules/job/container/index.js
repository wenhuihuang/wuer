import React from 'react';
import { connect } from 'react-redux';
import  * as globalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
class JobContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.globalAction.changeIsMenuAction(true);
    }

    render(){
        return(
            <div>
                职位
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
        globalAction:bindActionCreators(globalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobContainer)