import React from 'react'
import logoFull from '@/assets/logo-full.jpg'
import { company } from '@/content'
import './LogoCard.css'

/** Full-colour logo on a white card (the artwork has a light background). */
export default function LogoCard() {
  return (
    <div className="logo-card">
      <img src={logoFull} alt={`${company.name}, a unit of ${company.parent}`} />
    </div>
  )
}
