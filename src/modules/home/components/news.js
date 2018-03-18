import React from 'react'
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
            <div>
                <ItemWrap title="最新资讯">
                    <ul className="news-list">
                        {
                           list.map((item,index)=>{
                               return  <li key={index} className="news-item border-dashed">
                                <a href=''>{item.text}</a>
                               
                               
                               </li>
                               
                            })
                        }
                    </ul>
                </ItemWrap>
            </div>
        )
    }

   

}