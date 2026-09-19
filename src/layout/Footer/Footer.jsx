import React from 'react'
import { Link } from 'react-router-dom'
import { Brand } from '@/components'
import { company, navLinks } from '@/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Brand />
          <p className="footer-line">
            {company.legal}
            <br />A unit of {company.parent}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {company.legal} All rights reserved.
          </p>
          <p className="footer-tag">{company.tagline.join('  |  ')}</p>
        </div>
      </div>
    </footer>
  )
}
