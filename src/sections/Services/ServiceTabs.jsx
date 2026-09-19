import React, { useEffect, useRef } from 'react'
import { Icon } from '@/components'
import { classNames } from '@/utils/classNames.js'
import './ServiceTabs.css'

export const PANEL_ID = 'service-panel'
export const tabId = (index) => `service-tab-${index}`

const pad = (value) => String(value).padStart(2, '0')

/**
 * The list of all services. Behaves as an accessible tab list: click to select, and use
 * Arrow keys / Home / End to move between tabs. On narrow screens it becomes a swipeable row.
 */
export default function ServiceTabs({ items, activeIndex, onSelect }) {
  const listRef = useRef(null)

  // In the horizontal (mobile) layout keep the active tab centred. Scrolls the row only, never the page.
  useEffect(() => {
    const list = listRef.current
    const tab = list?.children[activeIndex]
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' })
  }, [activeIndex])

  const handleKeyDown = (event) => {
    const last = items.length - 1
    const targets = {
      ArrowDown: (activeIndex + 1) % items.length,
      ArrowRight: (activeIndex + 1) % items.length,
      ArrowUp: (activeIndex - 1 + items.length) % items.length,
      ArrowLeft: (activeIndex - 1 + items.length) % items.length,
      Home: 0,
      End: last,
    }
    if (!(event.key in targets)) return

    event.preventDefault()
    const target = targets[event.key]
    onSelect(target)
    listRef.current?.children[target]?.focus()
  }

  return (
    <div
      className="service-tabs"
      role="tablist"
      aria-label="Our services"
      aria-orientation="vertical"
      ref={listRef}
      onKeyDown={handleKeyDown}
    >
      {items.map(({ title, icon }, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={title}
            type="button"
            role="tab"
            id={tabId(i)}
            aria-selected={isActive}
            aria-controls={PANEL_ID}
            tabIndex={isActive ? 0 : -1}
            className={classNames('service-tab', isActive && 'is-active')}
            onClick={() => onSelect(i)}
          >
            <span className="service-tab-num">{pad(i + 1)}</span>
            <Icon name={icon} size={20} />
            <span className="service-tab-title">{title}</span>
          </button>
        )
      })}
    </div>
  )
}
