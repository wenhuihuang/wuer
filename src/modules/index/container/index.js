import React from 'react'
import Header from '../../header/container/header'
import Popup from '../../common/popup'
import { connect } from 'react-redux';
import { Success, Failure } from '../../../global/tools'
export default class IndexComponent extends React.Component {



    render() {
        return (
            <div className="app-wrapper" >
                <Header />
                <div>
                    {this.props.children}
                </div>
                <Popup />
            </div>
        )
    }

}


