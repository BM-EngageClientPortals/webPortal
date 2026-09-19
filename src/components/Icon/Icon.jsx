import React from 'react'
import iconPaths from './iconPaths.jsx'

/** Decorative inline SVG icon. `name` must exist in iconPaths.jsx. */
export default function Icon({ name, size = 22, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name] ?? null}
    </svg>
  )
}
