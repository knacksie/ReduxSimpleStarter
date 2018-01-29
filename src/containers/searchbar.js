import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchterm: '' };
    }

    inputChange(event) {
        this.setState({searchterm: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    placeholder="Enter city..."
                    className="form-control"
                    value={this.state.searchterm}
                    onChange={(event) => this.inputChange(event)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}