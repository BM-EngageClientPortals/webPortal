import { useEffect, useState } from 'react'

/** Tracks whether the element in `ref` is currently visible in the viewport. */
export default function useInView(ref, { threshold = 0.3 } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold })
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}
