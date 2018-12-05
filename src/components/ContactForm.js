import React from 'react'
import { Form, Input, TextArea, SubmitButton } from '../components/styled'
import { navigateTo } from "gatsby-link";

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
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="hidden" onChange={this.handleChange} />
        <Input placeholder="Name" type="text" name="name" onChange={this.handleChange} />
        <Input placeholder="Email" type="email" name="email" onChange={this.handleChange} />
        <Input placeholder="Phone" type="text" name="phone" onChange={this.handleChange} />
        <TextArea placeholder="Message" name="message" onChange={this.handleChange} />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>

    );
  }
}
