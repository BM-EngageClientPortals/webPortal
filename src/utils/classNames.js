/** Joins truthy class names: classNames('a', false && 'b', 'c') -> 'a c' */
export function classNames(...parts) {
  return parts.filter(Boolean).join(' ')
}
