import React from 'react'
import Header from '../../header/container/header'
import { connect } from 'react-redux';
import { Success, Failure } from '../../../global/tools'
export default class IndexComponent extends React.Component {



    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


