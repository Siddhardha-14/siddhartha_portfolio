export function smoothScrollTo(selector) {
  if (!selector || selector === '#' || selector === '#!') return
  const target = document.querySelector(selector)
  if (target) {
    const headerOffset = 90
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
