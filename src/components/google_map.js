import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        console.log("Set map");
        new google.maps.Map(this.refs.map, {
            zoom: 10,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div height="100%" ref="map" />;
    }
}

export default GoogleMap;