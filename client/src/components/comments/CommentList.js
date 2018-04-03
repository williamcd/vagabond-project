import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
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
  //posts new comment with newComment data
  createComment = async event => {
    event.preventDefault();
    const response = await axios.post(
      `/api/cities/${this.props.cityId}/comments`,
      this.state.newComment
    );
    //returns state to null
    this.setState({ newComment: {
      title: '',
      content: ''
    }})
    //refreshes comments
    this.props.getSingleCity();
  };
  //changes newComment data
  handleChange = event => {
    const newComment = { ...this.state.newComment };
    newComment[event.target.name] = event.target.value;
    this.setState({ newComment });
    console.log(this.state.newComment);
  };
  //displays createComment form
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
        {/* loops through comments and creates a view for each */}
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
