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
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h3>{comment.title}</h3>
                            <p>{comment.content}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CommentList;
