import React, { Component } from 'react';

class DeleteConfirm extends Component {
    render() {
        return (
            <div>
                ARE YOU SURE ABOUT THAT?
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>
            </div>
        );
    }
}

export default DeleteConfirm;