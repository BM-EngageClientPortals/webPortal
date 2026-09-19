/** Builds a safely encoded mailto: URL. */
export function buildMailtoUrl({ to, subject = '', body = '' }) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
