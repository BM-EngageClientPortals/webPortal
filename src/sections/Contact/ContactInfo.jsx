import React from 'react'
import { Icon } from '@/components'
import { company } from '@/content'
import './ContactInfo.css'

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <span className="eyebrow">Contact</span>
      <h1>Let&rsquo;s build something together</h1>
      <p>Tell us about your project and we will respond with a tailored proposal.</p>

      <ul className="contact-list">
        <li>
          <Icon name="mail" />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </li>
        <li>
          <Icon name="phone" />
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
        </li>
        <li>
          <Icon name="link" />
          <a href={`https://${company.website}`} target="_blank" rel="noreferrer">
            {company.website}
          </a>
        </li>
        <li>
          <Icon name="pin" />
          <span>
            <strong>Corporate Office</strong>
            <br />
            {company.address}
          </span>
        </li>
      </ul>
    </div>
  )
}
