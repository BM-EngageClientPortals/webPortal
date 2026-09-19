import { useEffect } from 'react'
import { company } from '@/content'

const DEFAULT_TITLE = `${company.name} | Engineering Intelligence. Enabling Growth.`

/** Sets the browser tab title and the search-engine description for the current page. */
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${company.name}` : DEFAULT_TITLE

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
