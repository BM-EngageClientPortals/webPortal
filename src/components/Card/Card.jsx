import React from 'react'
import { classNames } from '@/utils/classNames.js'
import './Card.css'

/** Base surface used for services, work, domains and more. Fades in on scroll by default. */
export default function Card({ as: Tag = 'article', reveal = true, className, children, ...rest }) {
  return (
    <Tag className={classNames('card', reveal && 'reveal', className)} {...rest}>
      {children}
    </Tag>
  )
}
