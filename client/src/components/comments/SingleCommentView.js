import React, { Component } from 'react';
import axios from 'axios'
import EditCommentForm from './EditCommentForm'
import DeleteConfirm from './DeleteConfirm'

class SingleCommentView extends Component {
    state = {
        comment: {
            title: '',
            content: '',
        },
        editForm: false,
        deleteConfirm: false,
    }
    componentDidMount() {
        this.getSingleComment()
    }
    getSingleComment = async () => {
        const cityId = this.props.match.params.city_id
        const commentId = this.props.match.params.id
        const response = await axios.get(`/api/cities/${cityId}/comments/${commentId}`)
        this.setState({
            comment: response.data.comment
        })
    }
    toggleEdit = () => {
        this.setState({ editForm: !this.state.editForm })
    }
    toggleDelete = () => {
        this.setState({ deleteConfirm: !this.state.deleteConfirm })
    }
    handleChange = (event) => {
        const comment = { ...this.state.comment }
        comment[event.target.name] = event.target.value
        this.setState({ comment })
    }
    saveComment = async (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.city_id
        const commentId = this.props.match.params.id
        const payload = this.state.comment
        await axios.patch(`/api/cities/${cityId}/comments/${commentId}`, payload)
        // await this.getSingleComment()
    }
    deleteComment = async (event) => {
        event.preventDefault()
        await axios.delete(`/api/cities/${this.props.match.params.city_id}/comments/${this.props.match.params.id}`)
    }
    render() {
        return (
            <div>
                <h1>{this.state.comment.title}</h1>
                <p>{this.state.comment.content}</p>
                <button onClick={this.toggleEdit}>edit</button><button onClick={this.toggleDelete}>delete</button>
                {this.state.editForm ? <EditCommentForm saveComment={this.saveComment} 
                                                        handleChange={this.handleChange} 
                                                        comment={this.state.comment} 
                                                        getSingleComment={this.getSingleComment} /> : null}
                {this.state.deleteConfirm ? <DeleteConfirm delete={this.deleteComment} toggleDelete={this.toggleDelete}/> : null}
            </div>
        );
    }
}

export default SingleCommentView;
