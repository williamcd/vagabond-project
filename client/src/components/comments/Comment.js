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
    //shows delete confirm
    toggleDelete = () => {
        this.setState({ deleteConfirm: !this.state.deleteConfirm })
        this.setState({ editForm: false })
    }
    //shows edit form
    toggleEdit = () => {
        this.setState({ editForm: !this.state.editForm })
        this.setState({ deleteConfirm: false })
    }
    //deletes specific comment
    deleteComment = async () => {
        const cityId = this.props.cityId
        const commentId = this.props.comment.id
        await axios.delete(`/api/cities/${cityId}/comments/${commentId}`)
        await this.props.refreshComments()
        this.toggleDelete()
    }
    render() {
        return (
            <div>
                <h3>{this.props.comment.title}</h3>
                <p>{this.props.comment.content}</p>
                {/* toggle buttons */}
                <button onClick={this.toggleEdit}>edit</button>
                <button onClick={this.toggleDelete}>delete</button>
                {/* ternary statements to display forms and delete confirm */}
                {this.state.editForm ? <EditCommentForm toggleEdit={this.toggleEdit} comment={this.props.comment} cityId={this.props.cityId} refreshComments={this.props.refreshComments}/> : null}
                {this.state.deleteConfirm ? <DeleteConfirm deleteComment={this.deleteComment} cancelDelete={this.toggleDelete}/> : null}
                <hr />
            </div>
        );
    }
}

export default Comment;