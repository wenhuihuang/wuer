import React from 'react'
import { Link } from 'react-router-dom'
export default class List extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return <div key={index}>
                                    <div>
                                        <Link to="">{item.title}</Link>
                                        <Link to=""></Link>
                                        <p>{item.company}</p>
                                    </div>
                                    <div>
                                        <p>{item.tiem}</p>
                                        <p>{item.addr}</p>
                                        <div>
                                            <a href="javascript:;" className="t-d-btn">投递</a>
                                        </div>
                                    </div>
                                </div>
                    })
                }
            </div>
        )
    }
}