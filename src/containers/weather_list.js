import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines'

class WeatherList extends Component {
    renderWeather(data) {
        var temperatures = data.list.map(weather => weather.main.temp);

        console.log("Temperatures: ", temperatures);

        return (
            <tr key={data.city.id}>
                <td>
                    {data.city.name}
                </td>
                <td>
                    <Sparklines height={120} width={180} data={temperatures}>
                        <SparklinesLine color={"blue"} />
                    </Sparklines>
                </td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th><th>Temperature</th><th>Pressure</th><th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);