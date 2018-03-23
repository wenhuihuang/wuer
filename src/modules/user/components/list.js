import React from 'react'
import { Link } from 'react-router-dom'
export default class List extends React.Component{
    render(){
        return (
            <div className="job-list">
                {
                    this.props.list.map((item,index)=>{
                        return <div key={index} className="list">
                                    <div className="list-left">
                                        <div className="p-max"><Link to={`/jobDetail/${item.id}`}>{item.title}</Link></div>
                                        <div className="p-middle"><Link to="">{item.type}</Link></div>
                                        <div className="p-middle">{item.company}</div>
                                    </div>
                                    <div className="list-right">
                                        <div className="p-middle">{item.tiem}</div>
                                        <div className="p-middle">{item.addr}</div>
                                        <div>
                                            <a href="javascript:;" className="t-d-btn">投递</a>
                                        </div>
                                    </div>
                                </div>
                    })
                }
                <div className="load-more">点击加载更多</div>
            </div>
        )
    }
}