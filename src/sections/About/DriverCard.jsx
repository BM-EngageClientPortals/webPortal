import React from 'react'
import { Card, IconBadge, TickList } from '@/components'

/** One of Mission / Vision / Goals. */
export default function DriverCard({ icon, title, points }) {
  return (
    <Card>
      <IconBadge name={icon} />
      <h3>{title}</h3>
      <TickList items={points} />
    </Card>
  )
}
