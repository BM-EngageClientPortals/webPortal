import React from 'react'
import { Page } from '@/layout/index.js'
import { About, WhyPartner } from '@/sections/index.js'

export default function AboutPage() {
  return (
    <Page
      title="About us"
      description="Brinaaya Technologies Pvt. Ltd., a unit of Kabir Enterprise, is led by engineering and architecture leaders with 20+ years of experience in fintech, payments and telecom."
    >
      <About />
      <WhyPartner />
    </Page>
  )
}
