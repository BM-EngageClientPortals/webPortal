import React from 'react'
import { Card, CardGrid, DetailList, Section, SectionHead } from '@/components'
import { engagementModels } from '@/content'

export default function EngagementModels() {
  return (
    <Section id="engagement">
      <SectionHead eyebrow="Engagement models" title="Flexible ways to work with us" />
      <CardGrid>
        {engagementModels.map(({ title, text, best, billing }) => (
          <Card key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <DetailList
              items={[
                { label: 'Best for', value: best },
                { label: 'Billing', value: billing },
              ]}
            />
          </Card>
        ))}
      </CardGrid>
    </Section>
  )
}
