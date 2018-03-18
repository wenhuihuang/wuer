import React from 'react'
class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={
            typeObj:{
                isShow:false,
                type:1
            }
        }
    }

    render(){
        return(
            <div className="search" onClick={this.props.onClick}>
                <div className="search-type" >
                    <span className="type">招聘</span>
                    <i className="dowm-arrows"></i>
                    <div className={this.props.globalReducer.showPop?"type-select show":"type-select"}>
                        <span className="option">招聘</span>
                        <span className="option">培训</span>
                        <span className="option">资讯</span>
                    </div>
                </div>
                <div className="search-key">
                    <input type="text" placeholder="请输入关键词" />
                </div>
                <div className="search-btn" onClick={this.searchHandler.bind(this)}>
                    <i className="icon"></i>
                </div>
            </div>
        )
    }

    typeHandler(e){
        const className = e.target.className
        console.log(this.props.globalReducer.showPop)
        if(className === 'search-type' || className == 'type'){
            // this.setState({
            //     typeObj:Object.assign({},this.state.typeObj,{isShow:!this.state.typeObj.isShow})
            // })
        }
    }
    
    searchHandler(){
        alert('search')
    }
}

export default Search

