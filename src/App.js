import React, { Component } from 'react';
import Screener from './lambda/screener';
import styles from './App.css';

class App extends Component {
    componentDidMount() {
        handleIframe();
    }

    render() {
        return (
            <div className={styles.holder}>
                <Screener />
            </div>
        );
    }
}

export default App;

export const handleIframe = () => {
    if (window.self === window.top) {
        var antiClickjack = document.querySelector('#antiClickjack');
        antiClickjack.parentNode.removeChild(antiClickjack);
    } else {
        window.top.location = window.self.location;
    }
};
