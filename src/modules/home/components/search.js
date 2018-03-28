import React from 'react'
class Search extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="search" onClick={this.props.onClick}>
                <div className="search-type" >
                    <span className="type" value={this.props.searchObj.type_code}>{this.props.searchObj.type_text}</span>
                    <i className="dowm-arrows pointer-events-none"></i>
                    <div className={this.props.globalReducer.popup.isShow&&this.props.globalReducer.popup.type=="search"?"type-select show":"type-select"}>
                        <span className="option" value="0">招聘</span>
                        <span className="option" value="1">培训</span>
                        <span className="option" value="2">资讯</span>
                    </div>
                </div>
                <div className="search-key">
                    <i className="search-icon" />
                    <input type="text" placeholder="请输入关键词" onInput={this.props.onInput} value={this.props.searchObj.keyword} />
                </div>
                <div className="search-btn" >
                    <i className="icon pointer-events-none"></i>
                </div>
            </div>
        )
    }
 
}

export default Search

