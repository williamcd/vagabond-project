import React, { Component } from "react";
import styled from "styled-components";

class NewCommentForm extends Component {
  render() {
    return (
      <div>
        <FormStyle>
          <form
            id="form"
            onSubmit={this.props.createComment}
            className="topBefore"
          >
            <input
              onChange={this.props.handleChange}
              placeholder="Title"
              type="text"
              name="title"
              value={this.props.newComment.title}
              //validations
              maxLength="200"
              required
            />

            <textarea
              onChange={this.props.handleChange}
              placeholder="Content"
              type="text"
              name="content"
              value={this.props.newComment.content}
              //validations
              maxLength="1000"
              required
            />
            <input id="submit" type="submit" value="Add" />
          </form>
        </FormStyle>
      </div>
    );
  }
}

export default NewCommentForm;

const FormStyle = styled.div`
  width: 50%;

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
