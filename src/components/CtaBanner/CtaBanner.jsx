import React from 'react'
import Button from '../Button/Button.jsx'
import './CtaBanner.css'

/** Closing call to action shown at the bottom of every page except Contact. */
export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-card reveal">
          <div>
            <h2>Ready to build something together?</h2>
            <p>Tell us about your project and we will respond with a tailored proposal.</p>
          </div>
          <Button to="/contact" icon="arrow">
            Start a conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
