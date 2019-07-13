import React, { Component } from 'react'
import './Number.scss';


export default class Number extends Component {
    render() {

        let number = this.props.value || '0';
        let letters = [...number.toString()].map((e,i) => (<span key={i} className="number__letter">{e}</span>))

        return (
            <div className="number">
                {letters}
                {
                    this.props.textAfter &&
                    <span className="number__text-after">{this.props.textAfter}</span>
                }
            </div>
        )
    }
}
