import React from 'react'
import { useLocation } from 'react-router-dom'
import { useReveal } from '@/hooks'
import { Navbar, Footer, ScrollToTop } from '@/layout/index.js'
import AppRoutes from './AppRoutes.jsx'

export default function App() {
  const { pathname } = useLocation()

  // Each page brings its own `.reveal` elements, so look for them again after every navigation.
  useReveal('.reveal', pathname)

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}
