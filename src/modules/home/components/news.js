import React from 'react'
import { Link } from 'react-router-dom'
import ItemWrap from '../../common/itemWrap'
export default class News extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            more :new Map()
        }
    }

    render(){
        const {list}=this.props
        return(
            <div className="outer-item">
                <ItemWrap title="最新资讯" more={{text:"",url:"/news"}}>
                    <ul className="news-list">
                        {
                           list.map((item,index)=>{
                               return  <li key={index} className="news-item">
                                <div className="img"><img src={item.img} /></div>
                                <div className="right">
                                    <div className="right-top">
                                        <Link to='' className="tit">{item.text}</Link>
                                        <span className="time red">{item.time}</span>
                                    </div>
                                    <div className="right-bottom">
                                        <div className="like-count">
                                            <span className="icon"></span>
                                            <span>32</span>
                                        </div>
                                        <div className="view-count">
                                            <span className="icon"></span>
                                            <span>32</span>
                                        </div>
                                    </div>
                                </div>
                               
                               
                               </li>
                               
                            })
                        }
                    </ul>
                </ItemWrap>
            </div>
        )
    }

   

}