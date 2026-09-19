import React from 'react'
import { Icon } from '@/components'
import { values } from '@/content'
import './ValueStrip.css'

/** Row of company principles, each with a check icon. */
export default function ValueStrip() {
  return (
    <ul className="values reveal">
      {values.map((value) => (
        <li key={value}>
          <Icon name="check" size={16} /> {value}
        </li>
      ))}
    </ul>
  )
}
