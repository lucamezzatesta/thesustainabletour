import React, { Component } from 'react'
import FlipDown from './flipdown';
import './Flipdown.scss';
import './flipdown.css';


export default class Flipdown extends Component {

    componentDidMount() {
        let {
            number=0,
            id = 'flipdown',
        } = this.props;
        new FlipDown(number, id).start();
        console.log('componentDidMount', this.props.id, this.props.number)
    }

    render() {
        console.log('render', this.props.id)
        return (<div id={this.props.id} className="flipdown"></div>)
    }
}
