import React from 'react'
import { Link,NavLink  } from 'react-router-dom'


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
                    return <li key={index} className="nav-item"><NavLink to={item.url} >{item.text}</NavLink></li>
                })
            }

                {/* <li><Link to="/home" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>home</Link></li>
                <li><Link to="/about" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>about</Link></li> */}
            </ul>
        )
    }
}