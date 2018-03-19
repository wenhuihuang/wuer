import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalAction from '../index/actions/index'
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
                        <span>分类</span>
                        <i className="dowm-arrows"></i>     
                    </div>
                    <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='classify'?"condition-select show" :"condition-select"} ref="conditionSelect">
                        {
                            this.props.conditionReducer.classify.map((item,index)=>{
                                return <div className="condition-option" key={index} id={item.id}>{item.text}</div>
                            })
                        }
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'major')}>
                    <div className="condition-input">
                        <span>专业</span>
                        <i className="dowm-arrows"></i>
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'province')}>
                    <div className="condition-input">
                        <span>省份</span>
                        <i className="dowm-arrows"></i>
                    </div>
                </div>
                <div className="condition-item" onClick={this.clickHandler.bind(this,'city')}>
                    <div className="condition-input">
                        <span>职位</span>
                        <i className="dowm-arrows"></i>
                    </div>
                </div>
            </div>
        )
    }

    clickHandler(type){
        const conditionSelectDOM = ReactDOM.findDOMNode(this.refs.conditionSelect)
        const condition = ReactDOM.findDOMNode(this.refs.condition)
        const top = conditionSelectDOM.offsetTop
        const h = conditionSelectDOM.offsetHeight
        const conditionTop = condition.offsetTop;
        alert('top'+top+"-h:"+h)
        //全局弹框
        this.props.GlobalAction.changePopupAction({
            isShow:!this.props.globalReducer.popup.isShow,
            isClose:true,
            style:{
                top:top+h+conditionTop+'px',
                bottom:0,
                display:!this.props.globalReducer.popup.isShow?'block':'none'
            }
        });
        this.setState({
            currentType:type
        })
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