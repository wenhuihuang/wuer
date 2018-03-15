import React from 'react'
import ItemWrap from '../../common/itemWrap'
export default class HotJob extends React.Component{

    componentWillMount(){

    }

    render(){
        console.log('==')
        console.log(this.props.list)
        const {list}=this.props
        return(
            <div>
                <ItemWrap title="热门职位">
                    <ul className="">
                        {
                           list.map((item,index)=>{
                                console.log(item)
                               return  <li key={index}>{item.oneLevel}</li>
                            })
                        }
                    </ul>
                </ItemWrap>
            </div>
        )
    }
}