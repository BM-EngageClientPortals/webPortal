import React from 'react'
import Icon from '../Icon/Icon.jsx'
import './TickList.css'

/** List with a check icon in front of each item. */
export default function TickList({ items }) {
  return (
    <ul className="ticks">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
