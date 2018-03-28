import React from 'react'
import { Link } from 'react-router-dom'
import ItemWrap from '../../common/itemWrap'
export default class Person extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            more :new Map()
        }
    }

    render(){
        const {personList}=this.props
        return(
            <div className="outer-item">
                <ItemWrap title="推荐人才" more={{text:"",url:"/news"}}>
                    <ul className="person-list">
                        {
                           personList.map((item,index)=>{
                               return  <li key={index} className="item">
                                <div className="img"><img src={item.head} /></div>
                                <div className="right">
                                    <div className="right-top">
                                        <Link to='' className="name">{item.name}</Link>
                                        <span className="time">{item.workYear}</span>
                                    </div>
                                    <div className="right-bottom">
                                       {item.job}
                                    </div>
                                    <div className="right-bottom">
                                       <span className="addr">{item.addr}</span>
                                       <span>{item.education}</span>
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