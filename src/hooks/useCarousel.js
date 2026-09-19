import { useCallback, useState } from 'react'

/**
 * State for a looping carousel: which item is active and whether auto-play is on.
 *
 * The timing itself is NOT a setTimeout here. The progress bar in <CarouselControls> runs a CSS
 * animation of `interval` milliseconds and calls `next` when it finishes, so the bar and the
 * slide change can never drift apart, and pausing freezes both at exactly the same moment.
 *
 * autoPlay:  initial play state (the visitor can toggle it with `toggle`)
 * suspended: temporarily hold the timer without changing the play state (hovering, off-screen)
 */
export default function useCarousel({ length, autoPlay = true, suspended = false }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(autoPlay)

  const goTo = useCallback((target) => setIndex(((target % length) + length) % length), [length])
  const next = useCallback(() => setIndex((current) => (current + 1) % length), [length])
  const prev = useCallback(() => setIndex((current) => (current - 1 + length) % length), [length])
  const toggle = useCallback(() => setPlaying((current) => !current), [])

  return { index, playing, running: playing && !suspended, goTo, next, prev, toggle }
}
