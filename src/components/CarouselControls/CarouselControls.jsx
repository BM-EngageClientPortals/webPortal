import React from 'react'
import Icon from '../Icon/Icon.jsx'
import { classNames } from '@/utils/classNames.js'
import './CarouselControls.css'

const pad = (value) => String(value).padStart(2, '0')

/**
 * Previous / play-pause / next buttons, a "03 / 07" counter and a segmented progress bar.
 * The active segment fills over `duration` ms; when it completes it calls `onCycleEnd`
 * (wire that to `next`). `running` false freezes the fill, which is how pausing works.
 */
export default function CarouselControls({
  count,
  index,
  playing,
  running,
  duration,
  itemLabel = 'item',
  onPrev,
  onNext,
  onToggle,
  onSelect,
  onCycleEnd,
}) {
  return (
    <div className="carousel-controls" role="group" aria-label={`${itemLabel} carousel controls`}>
      <div className="carousel-buttons">
        <button type="button" className="carousel-btn" onClick={onPrev} aria-label={`Previous ${itemLabel}`}>
          <Icon name="chevronLeft" size={18} />
        </button>
        <button
          type="button"
          className="carousel-btn carousel-btn--primary"
          onClick={onToggle}
          aria-label={playing ? 'Pause automatic rotation' : 'Play automatic rotation'}
        >
          <Icon name={playing ? 'pause' : 'play'} size={16} />
        </button>
        <button type="button" className="carousel-btn" onClick={onNext} aria-label={`Next ${itemLabel}`}>
          <Icon name="chevronRight" size={18} />
        </button>
        <span className="carousel-count" aria-hidden="true">
          <strong>{pad(index + 1)}</strong> / {pad(count)}
        </span>
      </div>

      <ol className="carousel-progress">
        {Array.from({ length: count }, (_, i) => {
          const isActive = i === index
          return (
            <li key={i}>
              <button
                type="button"
                className="segment"
                onClick={() => onSelect(i)}
                aria-label={`Go to ${itemLabel} ${i + 1} of ${count}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="segment-track">
                  {i < index && <span className="segment-fill is-full" />}
                  {isActive && (
                    <span
                      className={classNames('segment-fill', 'is-timed', !running && 'is-paused')}
                      style={{ animationDuration: `${duration}ms` }}
                      onAnimationEnd={onCycleEnd}
                    />
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
