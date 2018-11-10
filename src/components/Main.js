import React, { Component } from 'react';
//components
import NavFooter from './navbar/NavFooter';


class Main extends Component {
    render(){
        const NavigationApp = NavFooter(this.state);
        return(
            <NavigationApp />
        )
    }
}

export default Main;