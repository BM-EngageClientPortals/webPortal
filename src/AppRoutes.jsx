import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ExpertisePage,
  WorkPage,
  ContactPage,
  NotFoundPage,
} from '@/pages/index.js'

/** URL to page map. Add a new page here and in content/navigation.js to show it in the menu. */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/expertise" element={<ExpertisePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
