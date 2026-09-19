import { useState } from 'react'
import { buildMailtoUrl } from '@/utils/mailto.js'

const emptyForm = { name: '', email: '', company: '', message: '' }

function buildEnquiry({ name, email, company, message }) {
  return {
    subject: `Website enquiry from ${name}${company ? ` (${company})` : ''}`,
    body: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\n${message}`,
  }
}

/**
 * State and submit handling for the contact form.
 * There is no backend: submitting opens the visitor's email app with the enquiry pre-filled.
 * To use a form service later, replace the body of `handleSubmit` and keep the rest.
 */
export default function useContactForm({ to }) {
  const [values, setValues] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = buildMailtoUrl({ to, ...buildEnquiry(values) })
    setSubmitted(true)
  }

  return { values, submitted, handleChange, handleSubmit }
}
