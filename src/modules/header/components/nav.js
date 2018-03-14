import React from 'react'
import { Link } from 'react-router-dom'

import '../style/index.scss'

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const menu = [{
            text:'职位',
            url:'/job'
        },{
            text:'简历',
            url:'/home'
        },{
            text:'公司',
            url:''
        },{
            text:'培训',
            url:''
        },{
            text:'资质',
            url:''
        }]
        return (
            <ul className="navbar">
            {
                menu.map(function (item,index) {
                    return <li key={index}><Link to={item.url} >{item.text}</Link></li>
                })
            }

                {/* <li><Link to="/home" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>home</Link></li>
                <li><Link to="/about" activeStyle={{color: '#555', backgroundColor: '#e7e7e7',display:'inline-block'}}>about</Link></li> */}
            </ul>
        )
    }
}