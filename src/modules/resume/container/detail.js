import React from 'react';
import { connect } from 'react-redux';
import  * as GlobalAction from '../../index/actions/index'
import * as CommonAction from '../../common/actions/index'
import * as JobAction from '../../job/actions/index'
import { bindActionCreators } from 'redux';
import Condition from '../../common/condition'
import List from '../components/list'
import '../style/index.scss'
class ResumeDetailContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.GlobalAction.changeIsMenuAction(true);
        //设置标题
        this.props.GlobalAction.changeTitleAction('职位详情')

        this.props.JobAction.fetchJobDetailAction()

    }

    componentDidUpdate(){
        console.log(this.props.match.params)

       
    }

    render(){
        const detail = this.props.jobReducer.jobDetail
        return(
            <div className="job-detail inner-body">
               <div className="detail-head">
                    <div className="item"><span className="font-icon">聘</span><span>{detail.title}</span></div>
                    <div className="item">
                        <span className="time">{detail.time}</span>
                        <span className="view-count">浏览{detail.view}次</span>
                    </div>
               </div>
                <div className="detail-list">
                    {
                        [
                            {
                                text:"职位分类",
                                value:"jobType"
                            },
                            {
                                text:"注册情况",
                                value:"zcqingkan"
                            },
                            {
                                text:"地区",
                                value:"addr"
                            },
                            {
                                text:"价格",
                                value:"price"
                            },
                            {
                                text:"用途",
                                value:"use"
                            },
                            {
                                text:"学历",
                                value:"edu"
                            },
                            {
                                text:"职称要求",
                                value:"jobChen"
                            },
                            {
                                text:"工作经验",
                                value:"workYear"
                            },
                            {
                                text:"公司名称",
                                value:"comName"
                            },
                            {
                                text:"联系人",
                                value:"contact"
                            },
                            {
                                text:"联系手机",
                                value:"phone"
                            },
                            {
                                text:"QQ",
                                value:"qq"
                            },
                            {
                                text:"联系邮箱",
                                value:"email"
                            },
                            {
                                text:"详细说明",
                                value:"desc"
                            }
                        ].map((item,index)=>{
                            return  <div className="row" key={index}>
                                        <span className="label">{item.text}：</span>
                                        <span className="text-field">{detail[item.value]}</span>
                                    </div>
                        })
                    }
                </div>
              
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
export default connect(mapStateToProps,mapDispatchToProps)(ResumeDetailContainer)