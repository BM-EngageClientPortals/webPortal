import React from 'react'
import { SectionHead } from '@/components'
import { processSteps } from '@/content'
import './ProcessSteps.css'

export default function ProcessSteps() {
  return (
    <>
      <SectionHead eyebrow="Our process" title="How we deliver" />
      <ol className="steps">
        {processSteps.map(({ title, text }, index) => (
          <li className="step reveal" key={title}>
            <span className="step-num">{index + 1}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
