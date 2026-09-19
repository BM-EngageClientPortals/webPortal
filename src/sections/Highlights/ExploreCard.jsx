import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, IconBadge } from '@/components'
import './ExploreCard.css'

/** A whole card that is one link to another page. */
export default function ExploreCard({ icon, title, text, to }) {
  return (
    <Card as={Link} to={to} className="explore-card">
      <IconBadge name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="explore-link">
        Learn more <Icon name="arrow" size={16} />
      </span>
    </Card>
  )
}
