import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon.jsx'
import { classNames } from '@/utils/classNames.js'
import './Button.css'

/**
 * A button-styled control that renders the right element for the job:
 *   to="/contact"      opens another page of this site (no full reload)
 *   href="mailto:..."  ordinary link (email, phone, other websites)
 *   neither            a real <button> (forms, toggles)
 * variant: 'primary' | 'ghost'    size: 'md' | 'sm'    icon: any name from iconPaths
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  className,
  children,
  ...rest
}) {
  const classes = classNames('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className)
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
