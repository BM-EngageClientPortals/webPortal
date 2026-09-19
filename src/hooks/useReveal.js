import { useEffect } from 'react'

/**
 * Fades elements in the first time they scroll into view.
 * Any element with the `reveal` class (see styles/utilities.css) is observed.
 *
 * `watchKey` should change whenever new content is rendered (for example the current URL path),
 * so elements on the newly opened page are picked up too.
 */
export default function useReveal(selector = '.reveal', watchKey) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, watchKey])
}
