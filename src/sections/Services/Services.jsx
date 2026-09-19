import React from 'react'
import { Section, SectionHead } from '@/components'
import { SERVICE_ROTATION_MS, services } from '@/content'
import ServiceSpotlight from './ServiceSpotlight.jsx'

export default function Services() {
  return (
    <Section id="services" tone="alt">
      <SectionHead
        eyebrow="Our services"
        title="One partner, end to end"
        intro="Everything you need to plan, build, test, connect and modernise your software."
        level={1}
      />
      <ServiceSpotlight items={services} interval={SERVICE_ROTATION_MS} />
    </Section>
  )
}
