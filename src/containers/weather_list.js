import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(data) {
        var temperatures = data.list.map(weather => weather.main.temp).map(temp => temp - 273);
        var pressure = data.list.map(weather => weather.main.pressure);
        var humidity = data.list.map(weather => weather.main.humidity);

        return (
            <tr key={data.city.id}>
                <td>
                    <GoogleMap lat={data.city.coord.lat} lon={data.city.coord.lon} />
                </td>
                <td><Chart data={temperatures} color="green" units="C" /></td>
                <td><Chart data={pressure} color="red" units="hPa" /></td>
                <td><Chart data={humidity} color="blue" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <h2>5 day forecast</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th><th>Temperature (C)</th><th>Pressure (hPa)</th><th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);