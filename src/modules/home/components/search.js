import React from 'react'
class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <div className="search-type">
                    <span className="type">招聘</span>
                    <i className="dowm-arrows"></i>
                </div>
                <div className="search-key">
                    <input type="text" placeholder="请输入关键词" />
                </div>
                <div className="search-btn">
                    <i className="icon"></i>
                </div>
            </div>
        )
    }
}

export default Search

