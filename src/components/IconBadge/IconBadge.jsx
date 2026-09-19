import React from 'react'
import Icon from '../Icon/Icon.jsx'
import './IconBadge.css'

/** Rounded gradient tile that frames an icon. */
export default function IconBadge({ name }) {
  return (
    <span className="icon-badge">
      <Icon name={name} />
    </span>
  )
}
