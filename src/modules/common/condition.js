import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalAction from '../index/actions/index'
import * as CommonAction from '../common/actions/index'
import { Link } from 'react-router-dom'
import './condition.scss'
class Condition extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentType:''
        }
    }

    componentDidMount(){
        const current = JSON.parse(window.localStorage.getItem('current_condition'))
        this.props.CommonAction.changeCurrentAction(Object.assign({},current))
        

        //初始化二级
        const second = {
            "Classify":"Major",
            "Province":"City"
        }
        for(let key in second){
            const id = current[`current${key}`].id
            if(id != ''&& id != 0){ //不等空并且不等于不限
                this.props.CommonAction[`fetch${second[key]}Action`]({
                    parentId:id
                });
            }
        }

    }

    render(){
        return (
            <div className="condition" ref="condition">
                <div className="condition-item" onClick={this.clickHandler.bind(this,'classify')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">{this.props.conditionReducer.current.currentClassify.text}</span>
                        <i className="dowm-arrows pointer-events-none"></i>     
                    </div>
                    <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='classify'?"condition-select show" :"condition-select"} ref="conditionSelect-classify">
                        {
                            this.props.conditionReducer.classify.map((item,index)=>{
                                return <Link className="condition-option" key={index} id={item.id} to={`/job/${this.parseParams(`currentClassify:${item.id}`)}`}>{item.text}</Link>
                            })
                        }
                    </div>
                </div>
                {
                    this.props.conditionReducer.major.length!=0&&
                    <div className="condition-item" onClick={this.clickHandler.bind(this,'major')}>
                        <div className="condition-input">
                            <span className="pointer-events-none">{this.props.conditionReducer.current.currentMajor.text}</span>
                            <i className="dowm-arrows pointer-events-none"></i>
                        </div>
                        <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='major'?"condition-select show" :"condition-select"} ref="conditionSelect-major">
                            {
                                this.props.conditionReducer.major.map((item,index)=>{
                                    return <Link className="condition-option" key={index} id={item.id} to={`/job/${this.parseParams(`currentMajor:${item.id}`)}`}>{item.text}</Link>
                                })
                            }
                        </div>
                    </div>
                }
                
                <div className="condition-item" onClick={this.clickHandler.bind(this,'province')}>
                    <div className="condition-input">
                        <span className="pointer-events-none">{this.props.conditionReducer.current.currentProvince.text}</span>
                        <i className="dowm-arrows pointer-events-none"></i>
                    </div>
                    <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='province'?"condition-select show" :"condition-select"} ref="conditionSelect-province">
                        {
                            this.props.conditionReducer.province.map((item,index)=>{
                                return <Link className="condition-option" key={index} id={item.id} to={`/job/${this.parseParams(`currentProvince:${item.id}`)}`}>{item.text}</Link>
                            })
                        }
                    </div>
                </div>
                {
                    this.props.conditionReducer.city.length!=0&&
                    <div className="condition-item" onClick={this.clickHandler.bind(this,'city')}>
                        <div className="condition-input">
                            <span className="pointer-events-none">{this.props.conditionReducer.current.currentCity.text}</span>
                            <i className="dowm-arrows pointer-events-none"></i>
                        </div>
                        <div className={this.props.globalReducer.popup.isShow&&this.state.currentType=='city'?"condition-select show" :"condition-select"} ref="conditionSelect-city">
                            {
                                this.props.conditionReducer.city.map((item,index)=>{
                                    return <Link className="condition-option" key={index} id={item.id} to={`/job/city:${this.parseParams(`currentCity:${item.id}`)}`}>{item.text}</Link>
                                })
                            }
                        </div>
                    </div>
                }
              
            </div>
        )
    }

    clickHandler(type,e){
        const target = e.target
        alert('type:'+type+",className:"+target.className)
        let typeUpperCase = ((type)=>{
            const first = type.substring(0,1)
            const end = type.substring(1)
            return first.toUpperCase()+end;
        })(type)
        //fetchMajorAction
        /**
         * 这里写根据第一级获取第二级内容
         */
        if(target.className == 'condition-option'){ //如果是选择下面选项
            //设置当前选中
            this.props.CommonAction.changeCurrentAction({
                [`current${typeUpperCase}`]:{
                    id:target.id,
                    text:target.innerHTML
                }
            })

            //请求下一级(选中的是分类或省份)
            if(type == 'classify' || type == 'province'){
               
                const second = {
                    "classify":"Major",
                    "province":"City"
                }
                if(target.getAttribute('id')==0){ //如果是选中不限则清除
                    this.props.CommonAction[`clear${second[type]}Action`]()
                }else{
                    this.props.CommonAction[`fetch${second[type]}Action`]({
                        parentId:target.id
                    });
                }
            }

                


           
        }else if(target.className == 'condition-input'){ //弹出下拉选框
            const conditionSelectDOM = ReactDOM.findDOMNode(this.refs[`conditionSelect-${type}`])
            const condition = ReactDOM.findDOMNode(this.refs.condition)
         
            //先显示出来才能计算出top和height
            conditionSelectDOM.setAttribute('class','condition-select show')
    
            const top = conditionSelectDOM.offsetTop
            const h = conditionSelectDOM.offsetHeight
            const conditionTop = condition.offsetTop;
            
            if(this.state.currentType != type){
                /**设置全局弹框 **/
                this.props.GlobalAction.changePopupAction({
                    isShow:true,
                    isClose:true,
                    style:{
                        top:top+h+conditionTop+'px',
                        bottom:0,
                        display:'block'
                    }
                });

            }else{
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
            }
           
            /**设置全局弹框结束 **/
            this.setState({
                currentType:type
            })
        }

        
    }


    parseParams(other){
        const other_arr = other.split(':')
        let params = [];
        for(let key in this.props.conditionReducer.current){
           if(key != other_arr[0] && this.props.conditionReducer.current[key].id !=''){
            params.push(`${key}:${this.props.conditionReducer.current[key].id}`)
           }
            
        }
        params.push(other)
        return params.join(',')
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
        GlobalAction:bindActionCreators(GlobalAction, dispatch),
        CommonAction:bindActionCreators(CommonAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Condition)