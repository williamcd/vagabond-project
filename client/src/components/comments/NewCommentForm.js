import React, { Component } from 'react';

class NewCommentForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.createComment}>
                    <input onChange={this.props.handleChange} placeholder="title" type="text" name="title" value={this.props.newComment.title} />
                    <input onChange={this.props.handleChange} placeholder="content" type="text" name="content" valiue={this.props.newComment.content} />
                    <button>Save Comment</button>
                </form>
            </div>
        );
    }
}

export default NewCommentForm;
