import React from 'react'
import { Button, Section, SectionHead } from '@/components'
import { Page } from '@/layout/index.js'

export default function NotFoundPage() {
  return (
    <Page title="Page not found" showCta={false}>
      <Section>
        <SectionHead
          eyebrow="Error 404"
          title="This page could not be found"
          intro="The address may be mistyped, or the page may have moved. Head back to the home page to keep exploring."
          level={1}
        />
        <Button to="/" icon="arrow">
          Back to home
        </Button>
      </Section>
    </Page>
  )
}
