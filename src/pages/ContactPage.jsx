import React from 'react'
import { Page } from '@/layout/index.js'
import { Contact } from '@/sections/index.js'

export default function ContactPage() {
  return (
    <Page
      title="Contact"
      description="Tell Brinaaya Technologies about your project and we will respond with a tailored proposal."
      showCta={false}
    >
      <Contact />
    </Page>
  )
}
