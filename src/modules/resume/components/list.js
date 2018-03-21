import React from 'react'
import { Link } from 'react-router-dom'
export default class List extends React.Component{
    render(){
        return (
            <div className="resume-list">
                {
                    this.props.list.map((item,index)=>{
                        return <div key={index} className="list">
                                    <div className="list-left">
                                        <div className="p-max">
                                            <Link to={`/resumeDetail/${item.id}`}>{item.name}</Link>
                                            <span>{item.age}岁</span>
                                            <span>|</span>
                                            <span>面议</span>
                                        </div>
                                        <div className="p-middle">{item.resumeType}</div>
                                    </div>
                                    <div className="list-right">
                                        <div className="p-middle">{item.tiem}</div>
                                        <div className="p-middle">{item.addr}</div>
                                        
                                    </div>
                                </div>
                    })
                }
                <div className="load-more">点击加载更多</div>
            </div>
        )
    }
}