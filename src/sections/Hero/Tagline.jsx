import React from 'react'
import { company } from '@/content'
import './Tagline.css'

/** Brand tagline strip: Engineering Intelligence | Enabling Growth | Lasting Impact */
export default function Tagline() {
  return (
    <div className="tagline">
      {company.tagline.map((phrase, index) => (
        <React.Fragment key={phrase}>
          {index > 0 && <span className="tag-sep" />}
          <span>{phrase}</span>
        </React.Fragment>
      ))}
    </div>
  )
}
