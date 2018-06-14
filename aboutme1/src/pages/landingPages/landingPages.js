import React, { Component } from 'react';
import Header from '../../common/Header/header';
import Content from '../Content/content';
import Footer from '../../common/Footer/footer';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage