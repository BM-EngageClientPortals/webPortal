import React from 'react'
import { Card, CardGrid, Section, SectionHead } from '@/components'
import { audiences } from '@/content'
import ValueStrip from './ValueStrip.jsx'

export default function WhyPartner() {
  return (
    <Section id="why-partner" tone="alt">
      <SectionHead eyebrow="Our value" title="Why partner with Brinaaya" />
      <CardGrid>
        {audiences.map(({ title, text }) => (
          <Card key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </Card>
        ))}
      </CardGrid>
      <ValueStrip />
    </Section>
  )
}
