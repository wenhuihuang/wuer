import React from 'react';

import '../style/index.scss'
import Addr from './addr'
import { Link,NavLink  } from 'react-router-dom';

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title">
                <Link to="/home">
                    <div className="logo" />
                </Link>
                <Addr AddrHandler={this.props.AddrHandler} globalReducer={this.props.globalReducer}/>
                <div className="job-type">
                    <NavLink  to="/quan" >全职</NavLink >
                    <NavLink  to="/jian" >兼职</NavLink >
                </div>
                <div className="title-right">
                    {/* <Link to="/about" className="publish-btn">
                        <span className="icon"></span>
                        <span>发布</span>
                    </Link> */}
                    <Link to="/login" className="me-btn">
                        <span className="icon"></span>
                        <span>登录</span>
                    </Link>
                </div>
            </div>
        )
    }
}