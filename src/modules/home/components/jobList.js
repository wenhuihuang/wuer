import React from 'react'
import ItemWrap from '../../common/itemWrap'
import List from '../../job/components/list'
export default class JobList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            more :new Map()
        }
    }

    render(){
        const {topJob}=this.props
        return(
            <div className="outer-item">
                <ItemWrap title="职位列表" more={{text:"",url:"/job"}} links={this.props.ItemWrap_links}>
                <List list={topJob} settings={{noPutBtn:true,noMore:true}}  />
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