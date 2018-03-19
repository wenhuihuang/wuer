import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalAction from '../index/actions/index'
import { Link } from 'react-router-dom'
import './condition.scss'
class Condition extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentType:''
        }
    }

    render(){
        return (
            <div className="condition" ref="condition">
                <div className="condition-item" onClick={this.clickHandler.bind(this,'classify')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">分类</span>
                        <i className="dowm-arrows pointer-events-none"></i>     
                    </div>
                    <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='classify'?"condition-select show" :"condition-select"} ref="conditionSelect">
                        {
                            this.props.conditionReducer.classify.map((item,index)=>{
                                return <Link className="condition-option" key={index} id={item.id} to={`/job/${item.id}`}>{item.text}</Link>
                            })
                        }
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'major')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">专业</span>
                        <i className="dowm-arrows pointer-events-none"></i>
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'province')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">省份</span>
                        <i className="dowm-arrows pointer-events-none"></i>
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'city')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">职位</span>
                        <i className="dowm-arrows pointer-events-none"></i>
                    </div>
                </div>
            </div>
        )
    }

    clickHandler(type,e){
        const target = e.target
        alert('type:'+type)
        alert(target.className)
        const config = {

        }
        //fetchMajorAction
        /**
         * 这里写根据第一级获取第二级内容
         */
        if(target.className == 'condition-option'){ //如果是选择下面选项

        }else if(target.className == 'condition-input'){ //弹出下拉选框
            const conditionSelectDOM = ReactDOM.findDOMNode(this.refs.conditionSelect)
            const condition = ReactDOM.findDOMNode(this.refs.condition)
         
            //先显示出来才能计算出top和height
            conditionSelectDOM.setAttribute('class','condition-select show')
    
    
            const top = conditionSelectDOM.offsetTop
            const h = conditionSelectDOM.offsetHeight
            const conditionTop = condition.offsetTop;
            /**设置全局弹框 **/
            this.props.GlobalAction.changePopupAction({
                isShow:!this.props.globalReducer.popup.isShow,
                isClose:true,
                style:{
                    top:top+h+conditionTop+'px',
                    bottom:0,
                    display:!this.props.globalReducer.popup.isShow?'block':'none'
                }
            });
            /**设置全局弹框结束 **/
            this.setState({
                currentType:type
            })
        }

        
    }
}

function mapStateToProps(state) {
    return {
        globalReducer: state.globalReducer,
        conditionReducer:state.conditionReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Condition)