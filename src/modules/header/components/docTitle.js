import React, {Component} from 'react'

export default class DocTitle extends Component {
    componentDidMount(){
        const title = this.props.title
        document.title=title
    }
    componentDidUpdate(){
        const title = this.props.title
        document.title=title
    }
    render(){
        return (
            <div></div>
        )
    }
}