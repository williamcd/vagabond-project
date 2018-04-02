import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Header from "../static-components/Header";
import Footer from "../static-components/Footer";
import NewCommentForm from '../comments/NewCommentForm';

class SingleCityView extends Component {
    state = {
        city: {},
        comments: [],
        showEditCity: false,
        showCreateCommentForm: false,
        newComment: {
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        this.getSingleCity()
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
        await axios.delete(`/api/cities/${this.state.city.id}`);
    };

    toggleShowEdit = () => {
        this.setState({ showEditCity: !this.state.showEditCity })
    }

    toggleCommentForm = () => {
        this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm })
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
        newCity[city] = event.target.value
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
                <button negative onClick={this.toggleCommentForm}>
                    Create a comment
                </button>
                {this.state.showCreateCommentForm ? <NewCommentForm /> : null}
            </div>
        );
    }
}

export default SingleCityView;