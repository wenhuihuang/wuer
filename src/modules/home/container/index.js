import React from 'react';

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
    }

    componentWillMount(){
        //没有菜单
        this.props.GlobalAction.changeIsMenuAction(false);

        this.fetchHotJob()
        this.fetchNews()
    }

    componentWillUpdate(){
        // this.props.HomeAction.fetchHotJobAction();
    }

    render() {
        return (
                <div className="home-container">
                  <Search  globalReducer={this.props.globalReducer} onClick={this.searchHandler.bind(this)}/>
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
        const className = e.target.className
        alert(className)
        console.log(this.props.globalReducer.showPop)
        if(className === 'search-type' || className == 'type'){
            this.props.GlobalAction.changePopupAction({
                isShow:!this.props.globalReducer.popup.isShow,
                style:{
                    top:'120px',
                    bottom:0,
                    display:this.props.globalReducer.popup.isShow?'block':'none'
                }
            });
        }
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