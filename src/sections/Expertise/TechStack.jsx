import React from 'react'
import { SectionHead } from '@/components'
import { techGroups } from '@/content'
import './TechStack.css'

export default function TechStack() {
  return (
    <>
      <SectionHead eyebrow="Capabilities" title="Technologies we work with" />
      <div className="tech reveal">
        {techGroups.map(({ title, items }) => (
          <div className="tech-group" key={title}>
            <h4>{title}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
