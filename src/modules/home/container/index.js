import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import * as HomeAction from '../actions/index'
import  * as GlobalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Search from  '../components/search'
import HotJob from '../components/hotJob'
import News from '../components/news'
import global from '../../../static/app-conf'
import '../style/index.scss'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            searchObj:{
                type_code:1,
                type_text:'招聘',
                keywork:''
            }
        }
    }

    componentDidMount(){
        //没有菜单
        this.props.GlobalAction.changeIsMenuAction(false);
        //设置标题
        this.props.GlobalAction.changeTitleAction('首页')
        this.fetchHotJob()
        this.fetchNews()
    }

    componentWillUpdate(){
        // this.props.HomeAction.fetchHotJobAction();
    }

    render() {
        return (
                <div className="home-container">
                  <Search  globalReducer={this.props.globalReducer} searchObj={this.state.searchObj} onClick={this.searchHandler.bind(this)} onInput={this.inputHandler.bind(this)} ref="search"/>
                  <div className="home-menu">
                  {
                        global.menus.map(function (item,index) {
                            return <Link className="item" key={index}  to={item.url} >
                                <i className={"icon "+item.name+"-menu-icon"}></i>
                                <span>{item.text}</span>
                            </Link>
                        })
                    }
                  </div>
                  <HotJob list={this.props.list} />
                  <News list={this.props.news} />
                  <div className="more-news-wrap">
                    <Link className="more-news" to="">查看更多&gt;</Link>
                  </div>
                  {/* <button onClick={this.fetchTodo.bind(this)}>Fetch</button>
                  <button onClick={this.fetchHotJob.bind(this)}>hotJob</button> */}
                </div>
        )
    }

    fetchTodo(){
        let {fetchTodoAction} =this.props.HomeAction;
        fetchTodoAction();
    }

    fetchHotJob(){
        let {fetchHotJobAction} =this.props.HomeAction;
        fetchHotJobAction();
    }
    fetchNews(){
        this.props.HomeAction.fetchNewsAction();
    }

    //处理search组件事件
    searchHandler(e){
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

    inputHandler(e){
        const target = e.target;
        this.setState({
            searchObj:{
                ...this.state.searchObj,
                keywork:target.value
            }
        })
    }

}

const mapStateToProps = state => {
    return { 
        globalReducer:state.globalReducer,
        todos: state.homeReducer.todos,
        list:state.homeReducer.list,
        news:state.homeReducer.news
    }
}
const mapDispatchToProps = dispatch => {
    return {
        HomeAction:bindActionCreators(HomeAction, dispatch),
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)