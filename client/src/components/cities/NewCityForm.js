import React, { Component } from 'react';

class NewCityForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.createNewCity}>
                <input onChange={this.props.handleChange} placeholder="name" type="text" name="name" value={this.props.newCity.name} />
                <br />
                <input onChange={this.props.handleChange} placeholder="description" type="text" name="description" value={this.props.newCity.description} />
                <br />
                <input onChange={this.props.handleChange} placeholder="photo_url" type="text" name="photo_url" value={this.props.newCity.photo_url} />
                <br />
                <button>Save City</button>
            </form>
        );
    }
}

export default NewCityForm;