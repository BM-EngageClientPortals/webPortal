import React from 'react'
import { CtaBanner } from '@/components'
import { usePageMeta } from '@/hooks'
import { classNames } from '@/utils/classNames.js'
import './Page.css'

/**
 * Frame for every page: sets the tab title / description, fades the page in and, unless turned
 * off, finishes with the "start a conversation" banner.
 * home: the home page starts with the full-height hero, so it needs no top offset.
 */
export default function Page({ title, description, home = false, showCta = true, children }) {
  usePageMeta({ title, description })

  return (
    <main className={classNames('page', home && 'page--home')}>
      {children}
      {showCta && <CtaBanner />}
    </main>
  )
}
