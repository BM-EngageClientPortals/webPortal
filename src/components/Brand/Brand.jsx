import React from 'react'
import { Link } from 'react-router-dom'
import logoMark from '@/assets/logo-mark.png'
import { company } from '@/content'
import './Brand.css'

/** Logo mark with the BRINAAYA / TECHNOLOGIES wordmark. Links to the home page. */
export default function Brand({ onClick }) {
  return (
    <Link className="brand" to="/" onClick={onClick} aria-label={`${company.name} home`}>
      <img src={logoMark} alt="" className="brand-mark" />
      <span className="brand-text">
        <span className="brand-name">BRINAAYA</span>
        <span className="brand-sub">TECHNOLOGIES</span>
      </span>
    </Link>
  )
}
