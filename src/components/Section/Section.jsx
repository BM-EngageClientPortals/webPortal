import React from 'react'
import { classNames } from '@/utils/classNames.js'
import './Section.css'

/**
 * Page section wrapper: vertical rhythm, optional alternate background and the centred container.
 * tone: 'default' | 'alt'
 */
export default function Section({ id, tone = 'default', className, children }) {
  return (
    <section id={id} className={classNames('section', tone === 'alt' && 'section-alt', className)}>
      <div className="container">{children}</div>
    </section>
  )
}
