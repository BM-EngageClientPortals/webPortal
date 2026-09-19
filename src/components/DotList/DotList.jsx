import React from 'react'
import './DotList.css'

/** Compact bullet list separated from the content above by a divider line. */
export default function DotList({ items }) {
  return (
    <ul className="dots">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
