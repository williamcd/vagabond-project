import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Header from "../static-components/Header";
import Footer from "../static-components/Footer";

class SingleCityView extends Component {
    state = {
        city: {},
        comments: [],
        showEditCity: false
    }

    componentDidMount () {
        this.getSingleCity ()
    }

    getSingleCity = async () => {
        const cityId = this.props.match.params.id
        const response = await axios.get(`/api/cities/${cityId}`)
        this.setState({
            city: response.data.city, 
            comments: response.data.comments
        })
        console.log(response.data)
    }

    deleteCity = async event => {
        const singleCityId = this.props.match.params.cityId;
        await axios.delete(`/api/cities/${singleCityId}`);
        console.log(this.props.match.params.id);
        this.history.push("/");
      };

      toggleShowEdit = () => {
          this.setState({ showEditCity: !this.state.showEditCity })
      }

      handleSubmit = async event => {
          event.preventDefault()
          const cityId = this.state.city.id
          const cityUpdate = { ...this.state.city }
          await axios.patch(`/api/cities/${cityId}`, cityUpdate)
          this.toggleShowEdit()
          await this.getSingleCity()
      }

      handleChange = event => {
          const city = event.target.name 
          const newCity = { ...this.state.city }
          newCity[ city ] = event.target.value 
          this.setState({ city: newCity })
      }
    
    render() {
        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <img src={this.state.city.photo_url} />
                <p>{this.state.city.description}</p>
                <button negative onClick={this.deleteCity}>
                  Delete {this.state.city.name}
                </button>
            </div>
        );
    }
}

export default SingleCityView;