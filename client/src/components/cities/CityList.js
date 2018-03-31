import React, { Component } from 'react';

class CityList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.cityName}</h1>
                <img src={this.props.cityPhoto} />
            </div>
        );
    }
}

export default CityList;