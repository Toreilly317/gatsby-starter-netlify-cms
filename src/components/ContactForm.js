import React, { Component } from 'react'
import { Form, Input, SubmitButton } from '../components/styled'

export class ContactForm extends Component {
  state = {

  }

  render() {
    return (
      <Form>
        <Input id="name" type="name" placeholder="Name" />
        <Input id="email" type="email" placeholder="email" />
        <Input id="tel" type="tel" placeholder="Phone Number" />
        <Input id="email" type="email" placeholder="email" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    )
  }
}

export default ContactForm
