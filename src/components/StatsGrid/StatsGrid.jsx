import React from 'react'
import { classNames } from '@/utils/classNames.js'
import './StatsGrid.css'

/**
 * Key numbers. stats: [{ value, label }]
 * layout: 'grid' (2 x 2, used beside text) | 'row' (one line of four, used full width)
 */
export default function StatsGrid({ stats, layout = 'grid' }) {
  return (
    <div className={classNames('stats', 'reveal', layout === 'row' && 'stats--row')}>
      {stats.map(({ value, label }) => (
        <div className="stat" key={value}>
          <span className="stat-value grad">{value}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  )
}
