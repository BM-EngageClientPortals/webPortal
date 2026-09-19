import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Brand, Button, Icon } from '@/components'
import { useScrolled } from '@/hooks'
import { navLinks } from '@/content'
import { classNames } from '@/utils/classNames.js'
import './Navbar.css'

/** Fixed top navigation. The current page is highlighted; on small screens it becomes a slide-down menu. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  const closeMenu = () => setOpen(false)

  // Whatever way the page changed (link, Back button), the mobile menu should fold away.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={classNames('nav', scrolled && 'nav-scrolled', open && 'nav-open')}>
      <div className="container nav-inner">
        <Brand onClick={closeMenu} />

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <Button to="/contact" size="sm" onClick={closeMenu}>
            Get in touch
          </Button>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
