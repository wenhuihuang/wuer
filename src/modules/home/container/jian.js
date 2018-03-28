import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import * as HomeAction from '../actions/index'
import  * as GlobalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Search from  '../components/search'
import JobList from '../components/jobList'
import News from '../components/news'
import Person from '../components/person'
import Footer from '../../common/footer'
import global from '../../../static/app-conf'
import '../style/index.scss'

class JianContainer extends React.Component {

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
        //职位列表
        this.props.HomeAction.fetchTopJobAction();
        //推荐人才
        this.props.HomeAction.fetchPersonListAction();
        // this.fetchHotJob()
        this.fetchNews()
    }

    componentWillUpdate(){
        // this.props.HomeAction.fetchHotJobAction();
    }

    render() {
        const menus = [
            {
                text:"证书库",
                url:"",
                name:"zhengshu-lib"
            },
            {
                text:"聘证信息",
                url:"",
                name:"pingzheng-info"
            },
            {
                text:"资质",
                url:"",
                name:"zhizi"
            },
            {
                text:"建筑黄页",
                url:"",
                name:"huang-page"
            },
            {
                text:"挂靠行情",
                url:"",
                name:"hangqing"
            },
            {
                text:"52猎证部",
                url:"",
                name:"liezheng"
            },
            {
                text:"培训",
                url:"",
                name:"peixun"
            },
            {
                text:"我要推广",
                url:"",
                name:"tuiguang"
            }
        ]
        return (
                <div className="home-container home-body">
                  <Search  globalReducer={this.props.globalReducer} searchObj={this.state.searchObj} onClick={this.searchHandler.bind(this)} onInput={this.inputHandler.bind(this)} ref="search"/>
                  <div className="home-menu">
                  {
                        menus.map(function (item,index) {
                            return <Link className="item" key={index}  to={item.url} >
                                <i className={"icon "+item.name+"-menu-icon"}></i>
                                <span>{item.text}</span>
                            </Link>
                        })
                    }
                  </div>
                  <JobList topJob={this.props.homeReducer.topJob} />
                  <Person personList={this.props.homeReducer.personList} />
                  <News list={this.props.homeReducer.news} />
                  <Footer />
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
                type:"search",
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
        homeReducer:state.homeReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        HomeAction:bindActionCreators(HomeAction, dispatch),
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(JianContainer)