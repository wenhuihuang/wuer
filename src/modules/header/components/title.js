import React from 'react';

import '../style/index.scss'
import Addr from './addr'
import { Link } from 'react-router-dom';

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title">
                <div className="logo">
                </div>
                <Addr />
                <div className="title-right">
                    <Link to="/about" className="publish-btn">
                        <span className="icon"></span>
                        <span>发布</span>
                    </Link>
                    <Link to="/about" className="me-btn">
                        <span className="icon"></span>
                        <span>我的</span>
                    </Link>
                </div>
            </div>
        )
    }
}