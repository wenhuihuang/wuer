import React from 'react'
class Addr extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="title-addr" onClick={this.props.AddrHandler}>
                <span className="addr-text">{this.props.globalReducer.addr.oneL.text+this.props.globalReducer.addr.twoL.text}</span>
                <i className="dowm-arrows pointer-events-none"></i>
                <div className={this.props.globalReducer.popup.isShow && this.props.globalReducer.popup.type=="headerAddr"?"type-select show":"type-select"}>
                    <div className="addr-left">
                        <span className="option" value="0" type="oneL">广东</span>
                        <span className="option" value="1" type="oneL">北京</span>
                        <span className="option" value="2" type="oneL">湖南</span>
                        <span className="option" value="0" type="oneL">广西</span>
                        <span className="option" value="1" type="oneL">北京</span>
                        <span className="option" value="2" type="oneL">湖南</span>
                        <span className="option" value="0" type="oneL">广西</span>
                        <span className="option" value="1" type="oneL">北京</span>
                        <span className="option" value="2" type="oneL">湖南</span>
                        <span className="option" value="0" type="oneL">广西</span>
                        <span className="option" value="1" type="oneL">北京</span>
                        <span className="option" value="2" type="oneL">湖南</span>
                    </div>
                    <div className="addr-right">
                        <span className="option" value="0" type="twoL">广州</span>
                        <span className="option" value="1" type="twoL">东莞</span>
                        <span className="option" value="2" type="twoL">深圳</span>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Addr;