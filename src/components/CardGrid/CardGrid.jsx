import React from 'react'
import { classNames } from '@/utils/classNames.js'
import './CardGrid.css'

/**
 * Responsive grid for cards. 3 columns on desktop, 2 on tablet, 1 on phones.
 * Use `auto` to fit as many 290px+ columns as the width allows.
 */
export default function CardGrid({ auto = false, className, children }) {
  return <div className={classNames('card-grid', auto && 'card-grid--auto', className)}>{children}</div>
}
