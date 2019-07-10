import React, { Component } from 'react'
import './Tracker.scss';
import firebase, { db } from '../../services/firebase';

// Components
import Button from '../../components/Button/Button';

export default class Tracker extends Component {

    constructor() {
        super();
        this.state = {
            textValue: '',
            geoloc: [],
        }
    }

    componentDidMount() {
        if (this.props.login) this.props.login();

        db.ref('/years/2019/geoloc').once('value').then(s => {
            this.setState({geoloc: s.val()})
        });
        
    }

    componentWillUnmount() {
        if (this.props.logout) this.props.logout();
    }

    sendDataToFirebase = (position) => {
        const geolocRef = db.ref('/years/2019/geoloc/');

        let geolocPoint = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            user: this.props.user,
            note: {
                it: this.state.textValue,
                en: this.state.textValue,
            },
        }

        geolocRef
            .push()
            .set(geolocPoint)
            .then(() => {
                alert('The Sustainable Tracker: tracking data added!');

                db.ref('/years/2019/geoloc').once('value').then(s => {
                    this.setState({
                        geoloc: s.val(),
                        textValue: '',
                    })
                });
            })
    }

    sendTrackingData = () => {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.sendDataToFirebase);
    }

    trackerUI(user) {
        if (user && user.isAdmin) {

            return (
                <div className="tracker__track-area">
                    <textarea 
                        className="tracker__message" 
                        name="tracking-message" 
                        id="tracking-message" 
                        cols="30" 
                        rows="10" 
                        placeholder="insert your message here (optional)"
                        value={this.state.textValue}
                        onChange={this.handleTextChange}
                        >

                    </textarea>
                    <Button className="tracker__track-button"
                        onClick={this.sendTrackingData}
                        >
                            Add tracking point
                    </Button>
                    <div>
                        <h2 className="tracker__list-title">Last tracked points:</h2>
                        <ul>
                            {this.trackPoint(this.state.geoloc)}
                        </ul>
                    </div>
                </div>
            )
        }

        return (<div>You cannot track the journey! :(</div>);
    }

    handleTextChange = (e) => {
        this.setState({textValue: e.target.value})
    }

    trackPoint(geolocPoints) {

        let renderedPoints = []
        for (let key in geolocPoints) {
            let data = geolocPoints[key];
            renderedPoints.push(
                <li key={key} className="tracker__point">
                    <span>User: {data.user? data.user.username : 'undefined'}</span>
                    <span>Lat: {data.lat}</span>
                    <span>Lon: {data.lng}</span>
                    <span>Note: {data.note.en}</span>
                    <span>Timestamp: {data.timestamp}</span>
                </li>
            )
        }
        return renderedPoints.reverse();
    }

    render() {

        let {user} = this.props;

        return (
            <div className="tracker">
                <div className="tracker__header">
                    <h1 className="title">The Sustainable Tracker</h1>
                    <span className="welcome-message">Hello, {user? user.username : 'stranger'}!</span>
                </div>

                {this.trackerUI(user)}

            </div>
        )
    }
}
