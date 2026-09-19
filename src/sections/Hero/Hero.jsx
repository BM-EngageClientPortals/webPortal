import React from 'react'
import { Button } from '@/components'
import { company, hero, heroPills } from '@/content'
import HeroVisual from './HeroVisual.jsx'
import Tagline from './Tagline.jsx'
import './Hero.css'

export default function Hero() {
  const { before, highlight, after } = hero.headline

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-pill">A unit of {company.parent}</span>
          <h1>
            {before} <span className="grad">{highlight}</span> {after}
          </h1>
          <p className="lead">{hero.lead}</p>

          <div className="hero-actions">
            <Button to="/contact" icon="arrow">
              Start a project
            </Button>
            <Button to="/services" variant="ghost">
              Explore services
            </Button>
          </div>

          <ul className="pills" aria-label="What we do">
            {heroPills.map((pill) => (
              <li key={pill}>{pill}</li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>

      <div className="container">
        <Tagline />
      </div>
    </section>
  )
}
