import React from 'react'
import './FormField.css'

/** Labelled text input or textarea. Pass `multiline` for a textarea. All other props go to the control. */
export default function FormField({ label, optional = false, multiline = false, ...controlProps }) {
  const Control = multiline ? 'textarea' : 'input'

  return (
    <label className="field">
      <span>
        {label}
        {optional && <span className="opt"> (optional)</span>}
      </span>
      <Control {...controlProps} />
    </label>
  )
}
