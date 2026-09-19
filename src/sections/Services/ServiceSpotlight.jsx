import React, { useRef, useState } from 'react'
import { CarouselControls } from '@/components'
import { useCarousel, useInView, usePrefersReducedMotion } from '@/hooks'
import ServiceTabs from './ServiceTabs.jsx'
import ServiceCard from './ServiceCard.jsx'
import './Services.css'

/**
 * One service in the spotlight at a time, the others listed as tabs.
 * It moves on by itself every `interval` ms, or immediately when the visitor clicks a tab, a
 * progress segment or the previous / next buttons (arrow keys work inside the tab list too).
 *
 * The rotation holds still while the section is off-screen, while a mouse rests on the card,
 * and (by default) for visitors who prefer reduced motion. A play / pause button is always there.
 */
export default function ServiceSpotlight({ items, interval }) {
  const rootRef = useRef(null)
  const inView = useInView(rootRef, { threshold: 0.35 })
  const reducedMotion = usePrefersReducedMotion()
  const [hovering, setHovering] = useState(false)

  const { index, playing, running, goTo, next, prev, toggle } = useCarousel({
    length: items.length,
    autoPlay: !reducedMotion,
    suspended: !inView || hovering,
  })

  return (
    <div className="spotlight reveal" ref={rootRef}>
      <ServiceTabs items={items} activeIndex={index} onSelect={goTo} />

      <div className="spotlight-stage">
        <div
          className="spotlight-panel"
          // Only a real mouse pauses on hover; touch taps would otherwise leave it stuck paused.
          onPointerEnter={(event) => event.pointerType === 'mouse' && setHovering(true)}
          onPointerLeave={() => setHovering(false)}
        >
          <ServiceCard key={index} service={items[index]} index={index} total={items.length} live={!playing} />
        </div>

        <CarouselControls
          count={items.length}
          index={index}
          playing={playing}
          running={running}
          duration={interval}
          itemLabel="service"
          onPrev={prev}
          onNext={next}
          onToggle={toggle}
          onSelect={goTo}
          onCycleEnd={next}
        />
      </div>
    </div>
  )
}
