import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import * as CommonAction from '../../common/actions/index'
import * as JobAction from '../../job/actions/index'
import { bindActionCreators } from 'redux';
import Condition from '../../common/condition'
import List from '../components/list'
import '../style/index.scss'
class JobContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('职位')

        this.props.JobAction.fetchJobListAction()
        this.props.CommonAction.fetchClassifyAction();
        this.props.CommonAction.fetchProvinceAction();

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
                <List list={this.props.jobReducer.jobList} />
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { 
        todos: state.homeReducer.todos,
        list:state.homeReducer.list,
        conditionReducer:state.conditionReducer,
        jobReducer:state.jobReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // HomeAction:bindActionCreators(HomeAction, dispatch), 
        GlobalAction:bindActionCreators(GlobalAction, dispatch),
        CommonAction:bindActionCreators(CommonAction, dispatch),
        JobAction:bindActionCreators(JobAction, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobContainer)