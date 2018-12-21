import React from "react";
import { navigateTo } from "gatsby-link"
import Button from "./styled/Button"
import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-row-gap: .5rem;
  padding: 5rem;
  width: 100%;
  margin: auto;

  & input, textarea{
  padding: 2rem 1rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  display: block;
  outline: none;
  color: black;
  border: 1px solid black;
}`;







function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (

      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="hidden" onChange={this.handleChange} />
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={this.handleChange}
        />
        <input
          placeholder="Phone"
          type="text"
          name="phone"
          onChange={this.handleChange}
        />
        <textarea
          placeholder="Message"
          name="message"
          onChange={this.handleChange}
        />
        <Button type="submit">
          Send
        </Button>
        <div style={{ fontSize: "1rem" }}>Also available @ <a href="mailto:toreilly317@gmail.com">TOReilly317@gmail.com</a></div>
      </Form>
    );
  }
}
