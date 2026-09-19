import React from 'react'
import { Card, CardGrid, IconBadge, SectionHead } from '@/components'
import { domains } from '@/content'
import './Domains.css'

export default function Domains() {
  return (
    <>
      <SectionHead
        eyebrow="Domain expertise"
        title="Domains we know deeply"
        intro="Experience you can rely on, built across fintech, payments, banking and telecom."
        level={1}
      />
      <CardGrid>
        {domains.map(({ icon, title, text }) => (
          <Card key={title} className="domain">
            <IconBadge name={icon} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Card>
        ))}
      </CardGrid>
    </>
  )
}
