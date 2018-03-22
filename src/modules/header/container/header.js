import React from 'react';

import Title from '../components/title'
import Nav from '../components/nav'
import DocTitle from '../components/docTitle'
import  * as GlobalAction from '../../index/actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/index.scss'
class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
       
    }

    render() {
        const { showMenu } = this.props
        return (
            <div>
                <DocTitle title={this.props.globalReducer.title}/>
                <Title AddrHandler={this.AddrHandler} globalReducer={this.props.globalReducer}/>
                {
                    showMenu ? <Nav /> : ''
                }

            </div>
        )
    }
//地址选择
AddrHandler(e){
    alert('3')
    const target = e.target
    const className = target.className

    const searchDOM = ReactDOM.findDOMNode(this.refs.search);

    const top = searchDOM.offsetTop;
    const h = searchDOM.offsetHeight
    if(className === 'search-type' || className == 'type'){ //弹出收起
        this.props.GlobalAction.changePopupAction({
            isShow:!this.props.globalReducer.popup.isShow,
            isClose:true,
            style:{
                top:top+h+'px',
                bottom:0,
                display:!this.props.globalReducer.popup.isShow?'block':'none'
            }
        });
    }else if(className === 'option'){ //选择
        const value = target.getAttribute('value')
        const text_arr = ['招聘','培训','资讯']
        this.setState({
            searchObj:{
                ...this.state.searchObj,
                type_code:value,
                type_text:text_arr[value]
            }
        })
        this.props.GlobalAction.changePopupAction({
            isShow:false,
            isClose:true,
            style:{
                top:0,
                bottom:0,
                display:'none'
            }
        });
    }else if(className == 'search-btn'){ //搜索
        if(this.state.searchObj.keywork == null || this.state.searchObj.keywork ==""){
            alert('请输入关键词')
        }else{
            alert(this.state.searchObj.type_code+":"+this.state.searchObj.keywork)
        }
        
    }
}
}



function mapStateToProps(state) {
    return {
        globalReducer:state.globalReducer,
        showMenu: state.globalReducer.showMenu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)