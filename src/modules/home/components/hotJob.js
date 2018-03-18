import React from 'react'
import ItemWrap from '../../common/itemWrap'
export default class HotJob extends React.Component{

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
                <ItemWrap title="热门职位">
                    <ul className="hotJob-list">
                        {
                           list.map((item,index)=>{
                               return  <li key={index} className="hotJob-item border-dashed">
                                <div className="oneLevel-wrap">{item.oneLevel}</div>
                               
                                {
                                    //第二级
                                    this.renderChild(item.twoLevel,index)
                               
                                }
                               
                               </li>
                               
                            })
                        }
                    </ul>
                </ItemWrap>
            </div>
        )
    }

    renderChild(items,index){
        //显示3个
        const arr_start = items.slice(0,3)
        const arr_end = items.slice(3,items.length)

        return (
            <div className={"twoLevel-wrap "+(arr_end.length!=0?"more-btn":"")}>
            <div className="rep" onClick={ arr_end.length!=0&&this.switchMore.bind(this,index)}>
            {
                arr_start.map((two,i)=>{
                   return  <a href="" key={i}>{two}</a>
                }) 
               
              
            }
            </div>
            {
                arr_end.length!=0 && 
                <div className={((index)=>{
                    const i = this.state.more.get(`list${index}`)
                   return i ? "show twoLevel-more":"twoLevel-more"
                })(index)}>
                {
                    arr_end.map((two,i)=>{

                    return  <a href="" key={i}>{two}</a>

                    })  
                }
                </div>
            }
           
             
            </div>
        )
    }

    switchMore(index,e){
        if(e.target.tagName != 'A'){
             //当前点击目标不是a标签
             this.setState({
                more:this.state.more.set(`list${index}`,!this.state.more.get(`list${index}`))
            },function(){
                //setState是异步的所以要获取setState后的state的值要在这里的回调函数获取
            })
        }
        // e.preventDefault()
    }

}