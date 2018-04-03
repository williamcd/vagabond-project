import React, { Component } from "react";
import styled from "styled-components";
import DeleteConfirm from "./DeleteConfirm";
import axios from 'axios'

class EditCommentForm extends Component {
    state = {
        comment: {
            title: '',
            content: ''
        },
        editForm: false,
        deleteConfirm: false,
    }
    componentDidMount() {
        this.setState({ comment: this.props.comment })
    }
    saveComment = async event => {
        event.preventDefault();
        const cityId = this.props.cityId;
        const commentId = this.props.comment.id;
        const payload = this.state.comment;
        await axios.patch(`/api/cities/${cityId}/comments/${this.props.comment.id}`, payload);
        this.props.refreshComments()
        this.props.toggleEdit()
    };
    handleChange = event => {
        const comment = { ...this.state.comment };
        comment[event.target.name] = event.target.value;
        this.setState({ comment });
    };
    render() {
        return (
            <div>
                <FormStyle>
                    <form
                        id="form"
                        onSubmit={this.saveComment}
                        className="topBefore"
                    >
                        <input
                            onChange={this.handleChange}
                            type="text"
                            placeholder="title"
                            name="title"
                            value={this.state.comment.title}
                            maxLength="200"
                            required
                        />
                        <textarea
                            onChange={this.handleChange}
                            type="text"
                            placeholder="content"
                            name="content"
                            value={this.state.comment.content}
                            maxLength="1000"
                            required
                        />
                        <input id="submit" type="submit" value="Update" />
                    </form>
                </FormStyle>
            </div>
        );
    }
}

export default EditCommentForm;

const FormStyle = styled.div`
  display: block;
  margin: 0 auto;
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: black;
    font-size: 0.7em;
  }

  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: black;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: black;
    font-size: 0.7em;
  }

  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder {
    color: black;
  }

  input::placeholder,
  textarea::placeholder {
    color: black;
    font-size: 0.7em;
  }

  input:focus::placeholder,
  textarea::focus:placeholder {
    color: black;
  }

  input::-ms-placeholder,
  textarea::-ms-placeholder {
    color: black;
    font-size: 0.7em;
  }

  input:focus::-ms-placeholder,
  textarea:focus::-ms-placeholder {
    color: black;
  }

  /* on hover placeholder */

  input:hover::-webkit-input-placeholder,
  textarea:hover::-webkit-input-placeholder {
    color: #e2dedb;
    font-size: 0.7em;
  }

  input:hover:focus::-webkit-input-placeholder,
  textarea:hover:focus::-webkit-input-placeholder {
    color: #cbc6c1;
  }

  input:hover::-moz-placeholder,
  textarea:hover::-moz-placeholder {
    color: #e2dedb;
    font-size: 0.7em;
  }

  input:hover:focus::-moz-placeholder,
  textarea:hover:focus::-moz-placeholder {
    color: #cbc6c1;
  }

  input:hover::placeholder,
  textarea:hover::placeholder {
    color: #e2dedb;
    font-size: 0.7em;
  }

  input:hover:focus::placeholder,
  textarea:hover:focus::placeholder {
    color: #cbc6c1;
  }

  input:hover::placeholder,
  textarea:hover::placeholder {
    color: #e2dedb;
    font-size: 0.7em;
  }

  input:hover:focus::-ms-placeholder,
  textarea:hover::focus:-ms-placeholder {
    color: #cbc6c1;
  }

  body {
    font-family: "Lato", sans-serif;
    background: #e2dedb;
    color: #b3aca7;
    text-shadow: 1px 2px gray;
  }

  header {
    position: relative;
    margin: 100px 0 25px 0;
    font-size: 1em;
    color: white;
    text-align: center;
    letter-spacing: 7px;
    text-shadow: 1px 2px gray;
  }

  #form {
    position: relative;
    width: 230px;
    margin: 50px auto 100px auto;
  }

  input {
    font-family: "Lato", sans-serif;
    font-size: 0.7em;
    width: 80%;
    height: 50px;
    padding: 0px 15px 0px 15px;

    background: transparent;
    outline: none;
    color: #726659;

    border: solid 1px #b3aca7;
    border-bottom: none;

    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  input:hover {
    background: #b3aca7;
    color: #e2dedb;
  }

  textarea {
    width: 80%;
    max-width: 470px;
    height: 110px;
    max-height: 110px;
    padding: 15px;

    background: transparent;
    outline: none;

    color: #726659;
    font-family: "Lato", sans-serif;
    font-size: 0.7em;

    border: solid 1px #b3aca7;

    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  textarea:hover {
    background: #b3aca7;
    color: #e2dedb;
  }

  #submit {
    width: 40%;

    padding: 0;
    margin: -5px 0px 0px 0px;

    font-family: "Lato", sans-serif;
    font-size: 0.7em;
    color: black;

    outline: none;
    cursor: pointer;

    border: solid 1px #b3aca7;
    border-top: none;
  }

  #submit:hover {
    color: #e2dedb;
  }
`;