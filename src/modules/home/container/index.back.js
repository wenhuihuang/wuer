import React from 'react';

import { connect } from 'react-redux';

import * as HomeAction from '../actions/index'
import  * as globalAction from '../../index/actions/index'
import { bindActionCreators } from 'redux';
class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //没有菜单
        this.props.globalAction.changeIsMenuAction(false);
    }

    render() {
        let {todos}=this.props;
        return (
                <div>
                    <button onClick={this.addTodo.bind(this)}>ADD</button>
                    <button onClick={this.fetchTodo.bind(this)}>Fetch</button>
                    <h1>我是Home</h1>
                    {
                        todos.map(function (name,index) {
                            return <div key={index}>Hello, {name}!</div>
                        })
                    }
                </div>
        )
    }

    addTodo(){
        let {addTodoAction} =this.props;
        addTodoAction('用户固定输入的值');
    }

    fetchTodo(){
        let {fetchTodoAction} =this.props;
        fetchTodoAction();
    }
}

const mapStateToProps = state => {
    return { todos: state.homeReducer.todos }
}
const mapDispatchToProps = dispatch => {
    return {
        HomeAction:bindActionCreators(HomeAction, dispatch),
        globalAction:bindActionCreators(globalAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)