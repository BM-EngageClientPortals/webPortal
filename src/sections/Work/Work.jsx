import React from 'react'
import { CardGrid, Section, SectionHead } from '@/components'
import { work } from '@/content'
import WorkCard from './WorkCard.jsx'

export default function Work() {
  return (
    <Section id="work" tone="alt">
      <SectionHead
        eyebrow="Representative engagements"
        title="Selected work"
        intro="A few examples of the results we have delivered for fintech and payments clients."
        level={1}
      />
      <CardGrid>
        {work.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </CardGrid>
    </Section>
  )
}
