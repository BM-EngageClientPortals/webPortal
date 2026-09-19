import React from 'react'
import { Section } from '@/components'
import Domains from './Domains.jsx'
import ExpertiseBand from './ExpertiseBand.jsx'
import TechStack from './TechStack.jsx'
import ProcessSteps from './ProcessSteps.jsx'

/** Four related blocks share one section so the page keeps a steady rhythm. */
export default function Expertise() {
  return (
    <Section id="expertise">
      <Domains />
      <ExpertiseBand />
      <TechStack />
      <ProcessSteps />
    </Section>
  )
}
