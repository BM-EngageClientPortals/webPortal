import React from 'react'
import { CardGrid, Section, SectionHead, StatsGrid } from '@/components'
import { exploreCards, stats } from '@/content'
import ExploreCard from './ExploreCard.jsx'
import './Highlights.css'

/** Home page block: headline numbers, then cards that lead to the main pages. */
export default function Highlights() {
  return (
    <Section>
      <SectionHead eyebrow="At a glance" title="Built on two decades of engineering leadership" />
      <StatsGrid stats={stats} layout="row" />

      <CardGrid className="highlights-cards">
        {exploreCards.map((card) => (
          <ExploreCard key={card.to} {...card} />
        ))}
      </CardGrid>
    </Section>
  )
}
