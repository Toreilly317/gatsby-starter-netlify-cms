import React, { Component } from 'react'
import { Form, Input, TextArea, SubmitButton } from '../components/styled'

export class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    tel: '',
    message: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, tel, message } = this.state

    return (
      <Form
        method="post"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Input name="name" onChange={this.onChange} placeholder="Your Name" value={name} />
        <Input name="email" onChange={this.onChange} type="email" placeholder="Your Email mail" value={email} />
        <Input name="tel" onChange={this.onChange} placeholder="Your Phone Number" value={tel} />
        <TextArea name="message" cols="10" rows="10" onChange={this.onChange} placeholder="Your Message" value={message} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    )
  }
}

export default ContactForm
