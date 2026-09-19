import React from 'react'
import logoMark from '@/assets/logo-mark.png'
import { heroHighlights } from '@/content'
import './HeroVisual.css'

/** Decorative glowing logo mark with floating highlight cards. Hidden from assistive tech. */
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="glow-ring" />
      <img src={logoMark} alt="" className="hero-mark" />
      {heroHighlights.map(({ value, label }, index) => (
        <div key={value} className={`float-card fc-${index + 1}`}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
