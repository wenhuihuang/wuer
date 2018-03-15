import React from 'react'
import { Link } from 'react-router-dom'

import '../style/index.scss'
import global from '../../../static/app-conf'

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      
        return (
            <ul className="navbar">
            {
                global.menus.map(function (item,index) {
                    return <li key={index}><Link to={item.url} >{item.text}</Link></li>
                })
            }

                {/* <li><Link to="/home" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>home</Link></li>
                <li><Link to="/about" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>about</Link></li> */}
            </ul>
        )
    }
}