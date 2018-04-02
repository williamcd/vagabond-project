import React, { Component } from 'react';

class EditCommentForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.saveComment}>
                    <input onChange={this.props.handleChange} type="text" placeholder="title" name="title" value={this.props.comment.title} />
                    <input onChange={this.props.handleChange} type="text" placeholder="content" name="content" value={this.props.comment.content} />
                    <button>save</button>
                </form>
            </div>
        );
    }
}

export default EditCommentForm;