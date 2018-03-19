import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalAction from '../index/actions/index'
class Popup extends React.Component{
    render(){
        
            if(this.props.popup.isShow)
            {
                return <div className="g-popup" style={this.props.popup.style} onClick={this.hide.bind(this)}>Popup</div>
            }else{
                return  <div></div>
            }
            
    }

    hide(){
        if(this.props.popup.isClose){
            this.props.GlobalAction.changePopupAction({
                isShow:false,
                style:{
                    display:'none'
                }
            })
        }
    }

}

function mapStateToProps(state) {
    return {
        popup: state.globalReducer.popup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Popup)