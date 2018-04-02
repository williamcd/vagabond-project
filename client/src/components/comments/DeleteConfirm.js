import React, { Component } from 'react';

class DeleteConfirm extends Component {
    render() {
        return (
            <div>
                ARE YOU SURE ABOUT THAT?
                <button onClick={this.props.delete}>yes</button><button onClick={this.props.toggleDelete}>no</button>
            </div>
        );
    }
}

export default DeleteConfirm;