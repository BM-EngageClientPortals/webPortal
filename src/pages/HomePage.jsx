import React from 'react'
import { Page } from '@/layout/index.js'
import { Hero, Highlights } from '@/sections/index.js'

export default function HomePage() {
  return (
    <Page home>
      <Hero />
      <Highlights />
    </Page>
  )
}
