import React from 'react';
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import { Heading1 } from '../components/styled'

const Contact = () => {
  return (
    <Layout>
      <Heading1>Get In Touch</Heading1>
      <ContactForm />
    </Layout>
  )
}

export default Contact