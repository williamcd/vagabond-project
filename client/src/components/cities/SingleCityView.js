import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Header from "../static-components/Header";
import Footer from "../static-components/Footer";
import NewCommentForm from '../comments/NewCommentForm';
import CommentList from '../comments/CommentList';

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
    }
    deleteCity = async () => {
        await axios.delete(`/api/cities/${this.state.city.id}`);
    };

    toggleShowEdit = () => {
        this.setState({ showEditCity: !this.state.showEditCity })
    }

    toggleCommentForm = () => {
        this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm })
    }
    handleChange = (event) => {
        const newComment = { ...this.state.newComment }
        newComment[event.target.name] = event.target.value
        this.setState({ newComment })
    }
    createComment = async (event) => {
        event.preventDefault()
        const payload = this.state.newComment
        const response = await axios.post(`/api/cities/${this.state.city.id}/comments`, payload)
        this.getSingleCity()
        this.setState({
            newComment: {
                title: '',
                content: ''
            }
        })
        this.toggleCommentForm()
    }
    // deleteComment = async (event) => {
    //     event.preventDefault()
    //     const response = await axios.delete(`/api/cities/${this.state.city.id}/comments/${}`)
    // }
    editComment = async (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <CommentList comments={this.state.comments}/>
                {/* <button negative onClick={this.deleteCity}>
                    Delete {this.state.city.name}
                </button> */}
                <button negative onClick={this.toggleCommentForm}>
                    Create a comment
                </button>
                {this.state.showCreateCommentForm ? <NewCommentForm newComment={this.state.newComment} 
                                                                    handleChange={this.handleChange} 
                                                                    createComment={this.createComment}/> : null}
            </div>
        );
    }
}

export default SingleCityView;