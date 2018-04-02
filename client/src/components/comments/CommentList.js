import React, { Component } from 'react';
import axios from 'axios'

class CommentList extends Component {
    state = {
        comments: [],
        newComment: {
            title: '',
            content: ''
        }
    }
    handleChange = (event) => {
        const newComment = { ...this.state.newComment }
        newComment[event.target.name] = event.target.value
        this.setState({ newComment })
    }
    createComment = async (event) => {
        event.preventDefault()
        const response = await axios.post(`/api/cities/${this.props.cityId}/comments`)
    }
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h3>{comment.title}</h3>
                            <p>{comment.content}</p>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CommentList;