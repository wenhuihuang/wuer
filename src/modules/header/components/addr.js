import React from 'react'
class Addr extends React.Component{
    render(){
        return (
            <div className="title-addr" onClick={this.props.AddrHandler}>
                <span className="addr-text">广东省</span>
                <i className="dowm-arrows"></i>
                <div className={this.props.globalReducer.popup.isShow?"type-select show":"type-select"}>
                    <span className="option" value="0">广西</span>
                    <span className="option" value="1">北京</span>
                    <span className="option" value="2">湖南</span>
                </div>
            </div>
        )
    }
    
}
export default Addr;