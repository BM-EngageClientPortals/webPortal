import React from 'react'
import { Card, DetailList } from '@/components'
import './WorkCard.css'

/** Case-study card: Challenge, Solution and a highlighted Result. */
export default function WorkCard({ tag, title, challenge, solution, result }) {
  return (
    <Card>
      <span className="work-tag">{tag}</span>
      <h3>{title}</h3>
      <DetailList
        items={[
          { label: 'Challenge', value: challenge },
          { label: 'Solution', value: solution },
          { label: 'Result', value: result, emphasis: true },
        ]}
      />
    </Card>
  )
}
