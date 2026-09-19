import React from 'react'
import { Page } from '@/layout/index.js'
import { Work } from '@/sections/index.js'

export default function WorkPage() {
  return (
    <Page
      title="Selected work"
      description="Case studies from Brinaaya Technologies: a multi-tenant partner portal, a monolith to microservices migration and an ERP and Forex integration."
    >
      <Work />
    </Page>
  )
}
