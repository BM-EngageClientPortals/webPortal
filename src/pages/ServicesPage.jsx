import React from 'react'
import { Page } from '@/layout/index.js'
import { Services, EngagementModels } from '@/sections/index.js'

export default function ServicesPage() {
  return (
    <Page
      title="Services"
      description="Resource augmentation, software development, consultancy, testing, digital content, integration and migration from Brinaaya Technologies."
    >
      <Services />
      <EngagementModels />
    </Page>
  )
}
