import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EditCommentForm from "./EditCommentForm";
import NewCommentForm from "./NewCommentForm";
import Comment from "./Comment";

class CommentList extends Component {
  state = {
    comments: [],
    newComment: {
      title: "",
      content: ""
    },
    toggleEditForm: false
  };

  createComment = async event => {
    event.preventDefault();
    const response = await axios.post(
      `/api/cities/${this.props.cityId}/comments`,
      this.state.newComment
    );
    this.setState({ newComment: {
      title: '',
      content: ''
    }})
    this.props.getSingleCity();
  };

  handleChange = event => {
    const newComment = { ...this.state.newComment };
    newComment[event.target.name] = event.target.value;
    this.setState({ newComment });
    console.log(this.state.newComment);
  };

  toggleCommentForm = () => {
    this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm });
  };

  render() {
    return (
      <div>
        <ButtonWrapper>
          <button negative onClick={this.toggleCommentForm}>
            New Comment
          </button>
          {this.state.showCreateCommentForm ? (
            <NewCommentForm
              handleChange={this.handleChange}
              createComment={this.createComment}
              newComment={this.state.newComment}
            />
          ) : null}
        </ButtonWrapper>
        {this.props.comments.slice(0).reverse().map(comment => {
          return (
            <Comment
              comment={comment}
              cityId={this.props.cityId}
              refreshComments={this.props.getSingleCity}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  button {
    margin: 30px;
  }
`;

const LinkWrapper = styled.div`
  text-decoration: none;
`;
