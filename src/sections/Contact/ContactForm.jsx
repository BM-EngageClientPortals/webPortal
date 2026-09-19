import React from 'react'
import { Button, FormField } from '@/components'
import { company } from '@/content'
import useContactForm from './useContactForm.js'
import './ContactForm.css'

export default function ContactForm() {
  const { values, submitted, handleChange, handleSubmit } = useContactForm({ to: company.email })

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormField
        label="Your name"
        name="name"
        value={values.name}
        onChange={handleChange}
        required
        autoComplete="name"
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <FormField
        label="Company"
        optional
        name="company"
        value={values.company}
        onChange={handleChange}
        autoComplete="organization"
      />
      <FormField
        label="How can we help?"
        multiline
        name="message"
        rows="5"
        value={values.message}
        onChange={handleChange}
        required
      />

      <Button type="submit" icon="arrow">
        Send message
      </Button>

      {submitted && (
        <p className="form-note" role="status">
          Your email app should have opened with the message ready to send. If not, write to{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      )}
    </form>
  )
}
