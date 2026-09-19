import React from 'react'
import './SectionHead.css'

/**
 * Eyebrow label, title and optional intro that opens a page block.
 * level: use 1 for the main title of a page (one per page), 2 for everything else.
 */
export default function SectionHead({ eyebrow, title, intro, level = 2 }) {
  const Heading = level === 1 ? 'h1' : 'h2'

  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <Heading>{title}</Heading>
      {intro && <p>{intro}</p>}
    </div>
  )
}
