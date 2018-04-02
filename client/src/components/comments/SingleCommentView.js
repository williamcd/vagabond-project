import React, { Component } from 'react';
import axios from 'axios'

class SingleCommentView extends Component {
    state = {
        comment: {
            title: '',
            content: '',
        },
        editComment: {
            title: '',
            content: ''
        }
    }
    componentDidMount() {
        this.getSingleComment()
    }
    getSingleComment = async () => {
        const cityId = this.props.match.params.city_id
        const commentId = this.props.match.params.id
        const response = await axios.get(`/api/cities/${cityId}/comments/${commentId}`)
        this.setState({
            comment: response.data
        })
    }
    render() {
        return (
            <div>
                single comment path
            </div>
        );
    }
}

export default SingleCommentView;
