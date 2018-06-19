import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
class Header extends Component {
    render() {
        return (
            <nav>     
                <ul>
                    <li><Link to='/'>About me  </Link></li>
                    <li><Link to='/Interests'>Interests  </Link></li>
                    <li><Link to='/Contact'> Contact</Link></li>
                </ul>
                
            </nav>
        
                    )
    }
}

export default Header;