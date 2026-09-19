import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Opens every new page at the top, like a normal website (the browser Back button still works). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
