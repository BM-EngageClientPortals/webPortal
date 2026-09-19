import React from 'react'
import { expertise } from '@/content'
import './ExpertiseBand.css'

/** Four-column strip of core capabilities. */
export default function ExpertiseBand() {
  return (
    <div className="expertise-band reveal">
      {expertise.map(({ title, text }) => (
        <div key={title}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}
