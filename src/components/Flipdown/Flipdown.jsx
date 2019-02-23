import React, { Component } from 'react'
import FlipDown from './flipdown';
import './Flipdown.scss';
import './flipdown.css';


export default class Flipdown extends Component {


    componentDidMount() {
        let {
                date=0
            } = this.props;
        new FlipDown(date).start();
    }

    render() {
        return (<div id="flipdown" className="flipdown"></div>)
    }
}
