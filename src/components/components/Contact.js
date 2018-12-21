import React from "react";

import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  align-self: center;
  grid-gap: 2rem;
  color: black;
  border-radius: 3px;
  padding: 2rem;
  align-items: space-around;
  margin: 0 auto;
  max-width: 500px;
`;

export const Input = styled.input`
  border-radius: 3px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5) inset;
  padding: 2rem 1rem;
  font-size: 2rem;
  border: 0;
  border-bottom: 1px solid black;
  out-line: none;
  display: inline-block;
`;

export const TextArea = styled.textarea`
  border-radius: 3px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5) inset;
  padding: 2rem 1rem;
  font-size: 1.5rem;

  border: 0;
  border-bottom: 1px solid black;
  out-line: none;
  display: inline-block;
`;

export const SubmitButton = styled.button`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-yellow);
  border-radius: 3px;
  padding: 2rem 1rem;
  text-align: center;
  font-size: 3rem;
  span {
    font-size: 3rem;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
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
      <>
        <h1 className="title">Get In Touch</h1>
        <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" type="hidden" onChange={this.handleChange} />
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Phone"
            type="text"
            name="phone"
            onChange={this.handleChange}
          />
          <TextArea
            placeholder="Message"
            name="message"
            onChange={this.handleChange}
          />
          <SubmitButton type="submit">
            Send<span> &#11132;</span>
          </SubmitButton>
        </Form>
      </>
    );
  }
}
