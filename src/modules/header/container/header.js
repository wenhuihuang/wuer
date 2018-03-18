import React from 'react';

import Title from '../components/title'
import Nav from '../components/nav'
import  * as GlobalAction from '../../index/actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
       
    }

    render() {
        const { showMenu } = this.props
        return (
            <div>
                <Title />
                {
                    showMenu ? <Nav /> : ''
                }

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        showMenu: state.globalReducer.showMenu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)