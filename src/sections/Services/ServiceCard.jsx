import React from 'react'
import { Button, Card, DotList, IconBadge } from '@/components'
import { PANEL_ID, tabId } from './ServiceTabs.jsx'
import './ServiceCard.css'

const pad = (value) => String(value).padStart(2, '0')

/**
 * The large featured card. Give it a new `key` for each service so it re-mounts and plays its
 * entrance animation. `live` makes screen readers announce the change (only while auto-play is
 * paused, otherwise the constant rotation would be noisy).
 */
export default function ServiceCard({ service, index, total, live }) {
  const { icon, title, text, details } = service

  return (
    <Card
      as="div"
      reveal={false}
      className="service-feature"
      role="tabpanel"
      id={PANEL_ID}
      aria-labelledby={tabId(index)}
      aria-live={live ? 'polite' : 'off'}
    >
      <span className="service-index" aria-hidden="true">
        {pad(index + 1)}
      </span>
      <IconBadge name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
      <DotList items={details} />
      <div className="service-feature-actions">
        <Button to="/contact" icon="arrow">
          Talk to us about this
        </Button>
        <span className="service-position">
          Service {index + 1} of {total}
        </span>
      </div>
    </Card>
  )
}
