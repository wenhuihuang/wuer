import React from 'react'
import './itemWrap.scss'
export default class ItemWrap extends React.Component{
    render(){
        const {title} = this.props;
        return(
            <div className="item-wrap">
                <div className="item-wrap-title">
                    <div className="line-icon"></div>
                    <div className="text">{title}</div>
                </div>
                <div className="item-wrap-content">
                {this.props.children}
                </div>
            </div>
        )
    }
}