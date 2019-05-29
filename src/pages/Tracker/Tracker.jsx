import React, { Component } from 'react'

export default class Tracker extends Component {
    render() {

        return (
            <div>
                Tracker: {this.props.user} {this.props.signOut}
            </div>
        )
    }
}
