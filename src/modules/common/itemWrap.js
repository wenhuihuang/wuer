import React from 'react'
import { Link } from 'react-router-dom'
import './itemWrap.scss'
export default class ItemWrap extends React.Component{
    render(){
        const {title,links,more} = this.props;
        return(
            <div className="item-wrap">
                <div className="item-wrap-title">
                    <div className="line-icon"></div>
                    <div className="text">
                        <span>{title}</span>
                        {
                            links&&links.map((item,index)=>{
                                    return <Link key={index} to={item.url} className={index !=links.length-1?"line":""}>{item.text}</Link>
                             })
                        }
                        {
                            more&&
                            <Link to={more.url?more.url:''} className="more-btn">{more.text}</Link>
                        }
                    </div>
                </div>
                <div className="item-wrap-content">
                {this.props.children}
                </div>
            </div>
        )
    }
}