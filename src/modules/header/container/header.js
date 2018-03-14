import React from 'react';

import Title from '../components/title'
import Nav from '../components/nav'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
componentWillMount(){
    console.log('3333333333333')
}
    componentWillUpdate(){
        console.log('changeIsMenuAction')
    }

    render() {
        const { showMenu } = this.props
        console.log( this.props.location)
        return (
            <div>
                <Title />
                {
                    showMenu?<Nav />:''
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

export default connect(mapStateToProps)(Header)