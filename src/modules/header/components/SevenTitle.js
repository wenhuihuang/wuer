import React, {Component} from 'react'

export default class SevenTitle extends Component {
    state = {expanded: false}
    static propTypes = {
        title: React.PropTypes.string
    }
    static defaultProps = {
        title: 'Your Name'
    }
}