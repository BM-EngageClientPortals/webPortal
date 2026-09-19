import React from 'react'
import { classNames } from '@/utils/classNames.js'
import './DetailList.css'

/**
 * Label / value pairs (e.g. Challenge, Solution, Result).
 * items: [{ label, value, emphasis? }]  Set `emphasis` to highlight the key outcome.
 */
export default function DetailList({ items }) {
  return (
    <dl className="detail-list">
      {items.map(({ label, value, emphasis }) => (
        <React.Fragment key={label}>
          <dt className={classNames(emphasis && 'is-emphasis')}>{label}</dt>
          <dd className={classNames(emphasis && 'is-emphasis')}>{value}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
