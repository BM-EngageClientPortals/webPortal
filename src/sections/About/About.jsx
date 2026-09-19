import React from 'react'
import { CardGrid, Section, SectionHead, StatsGrid } from '@/components'
import { aboutParagraphs, drivers, stats } from '@/content'
import DriverCard from './DriverCard.jsx'
import LogoCard from './LogoCard.jsx'
import './About.css'

export default function About() {
  return (
    <Section id="about">
      <SectionHead eyebrow="About Brinaaya" title="Who we are" level={1} />

      <div className="about-grid">
        <div className="about-copy reveal">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <LogoCard />
        </div>
        <StatsGrid stats={stats} />
      </div>

      <CardGrid className="about-drivers">
        {drivers.map((driver) => (
          <DriverCard key={driver.title} {...driver} />
        ))}
      </CardGrid>
    </Section>
  )
}
