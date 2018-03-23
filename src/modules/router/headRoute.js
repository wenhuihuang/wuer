import React, {
    Component
} from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as GlobalAction from '../index/actions/index'
/**
 * 包含头部
 */
class HeadRoute extends Component {

    componentDidMount(){
        this.props.GlobalAction.changeTitleAction('test')
    }

    render() {
        const {
            component: InnerComponent,
            ...rest
        } = this.props;
        const {
            location
        } = this.props;


        return ( <
            Route { ...rest
            }
            render = {
                props => ( <
                    InnerComponent { ...props
                    }
                    />

                )
            }
            />
        );
    }


}
function mapStateToProps(state) {
    return {
        globalReducer:state.globalReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GlobalAction:bindActionCreators(GlobalAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeadRoute))