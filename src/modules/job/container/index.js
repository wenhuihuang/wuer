import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import * as CommonAction from '../../common/actions/index'
import { bindActionCreators } from 'redux';
import Condition from '../../common/condition'
import '../style/index.scss'
class JobContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('职位')

        this.props.CommonAction.fetchClassifyAction();
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
            <div>
                <Condition />
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { 
        todos: state.homeReducer.todos,
        list:state.homeReducer.list,
        conditionReducer:state.conditionReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // HomeAction:bindActionCreators(HomeAction, dispatch), 
        GlobalAction:bindActionCreators(GlobalAction, dispatch),
        CommonAction:bindActionCreators(CommonAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobContainer)