import React, { Component } from 'react';
import EditCommentForm from './EditCommentForm'
import DeleteConfirm from './DeleteConfirm'
import axios from 'axios'

class Comment extends Component {
    state= {
        comment: {
            title: '',
            content: ''
        },
        editForm: false,
        deleteConfirm: false,
    }
    toggleDelete = () => {
        this.setState({ deleteConfirm: !this.state.deleteConfirm })
    }
    toggleEdit = () => {
        this.setState({ editForm: !this.state.editForm })
    }
    deleteComment = async () => {
        const cityId = this.props.cityId
        const commentId = this.props.comment.Id
        await axios.delete(`/api/cities/${cityId}/comments/${commentId}`)
        await this.props.refreshComments()
    }
    render() {
        return (
            <div>
                <h3>{this.props.comment.title}</h3>
                <p>{this.props.comment.content}</p>
                <button onClick={this.toggleEdit}>edit</button>
                <button onClick={this.toggleDelete}>delete</button>
                {this.state.editForm ? <EditCommentForm /> : null}
                {this.state.deleteConfirm ? <DeleteConfirm deleteComment={this.deleteComment} cancelDelete={this.toggleDelete}/> : null}
            </div>
        );
    }
}

export default Comment;