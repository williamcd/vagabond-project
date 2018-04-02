import React, { Component } from "react";
import axios from "axios";
import EditCommentForm from "./EditCommentForm";
import DeleteConfirm from "./DeleteConfirm";

import styled from "styled-components";

class SingleCommentView extends Component {
  state = {
    comment: {
      title: "",
      content: ""
    },
    editForm: false,
    deleteConfirm: false
  };
  componentDidMount() {
    this.getSingleComment();
  }
  getSingleComment = async () => {
    const cityId = this.props.match.params.city_id;
    const commentId = this.props.match.params.id;
    const response = await axios.get(
      `/api/cities/${cityId}/comments/${commentId}`
    );
    this.setState({
      comment: response.data.comment
    });
  };
  toggleEdit = () => {
    this.setState({ editForm: !this.state.editForm });
  };
  toggleDelete = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm });
  };
  handleChange = event => {
    const comment = { ...this.state.comment };
    comment[event.target.name] = event.target.value;
    this.setState({ comment });
  };
  saveComment = async event => {
    event.preventDefault();
    const cityId = this.props.match.params.city_id;
    const commentId = this.props.match.params.id;
    const payload = this.state.comment;
    await axios.patch(`/api/cities/${cityId}/comments/${commentId}`, payload);
    // await this.getSingleComment()
  };
  deleteComment = async event => {
    event.preventDefault();
    await axios.delete(
      `/api/cities/${this.props.match.params.city_id}/comments/${
        this.props.match.params.id
      }`
    );
  };
  render() {
    return (
      <PageWrapper>
        <CommentWrapper>
          <h1>{this.state.comment.title}</h1>
          <p>{this.state.comment.content}</p>
          <button onClick={this.toggleEdit}>Edit Comment</button>
          <button onClick={this.toggleDelete}>Delete Comment</button>
          <FormWrapper>
            {this.state.editForm ? (
              <EditCommentForm
                saveComment={this.saveComment}
                handleChange={this.handleChange}
                comment={this.state.comment}
                getSingleComment={this.getSingleComment}
              />
            ) : null}
          </FormWrapper>
          {this.state.deleteConfirm ? (
            <DeleteConfirm
              delete={this.deleteComment}
              toggleDelete={this.toggleDelete}
            />
          ) : null}
        </CommentWrapper>
      </PageWrapper>
    );
  }
}

export default SingleCommentView;

const PageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/MXhjt43.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  align-items: center;
`;

const CommentWrapper = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 15px;
  width: 60%;
  margin: 20px;
  font-family: "Nanum Pen Script", cursive;
  font-size: 24px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FormWrapper = styled.div`
  margin: 0 auto;
  align-items: center;
`;
