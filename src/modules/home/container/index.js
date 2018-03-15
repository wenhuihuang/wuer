import React from 'react';

import { connect } from 'react-redux';

import * as HomeAction from '../actions/index'
import  * as globalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Search from  '../components/search'
import HotJob from '../components/hotJob'
import global from '../../../static/app-conf'
import '../style/index.scss'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //没有菜单
        this.props.globalAction.changeIsMenuAction(false);
    }

    render() {
        return (
                <div className="home-container">
                  <Search />
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
                  <button onClick={this.fetchTodo.bind(this)}>Fetch</button>
                  <button onClick={this.fetchHotJob.bind(this)}>hotJob</button>
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

}

const mapStateToProps = state => {
    return { 
        todos: state.homeReducer.todos,
        list:state.homeReducer.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        HomeAction:bindActionCreators(HomeAction, dispatch),
        globalAction:bindActionCreators(globalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)