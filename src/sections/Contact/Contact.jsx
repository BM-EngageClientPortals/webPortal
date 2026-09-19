import React from 'react'
import { Section } from '@/components'
import ContactInfo from './ContactInfo.jsx'
import ContactForm from './ContactForm.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <Section id="contact" className="contact">
      <div className="contact-card reveal">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  )
}
