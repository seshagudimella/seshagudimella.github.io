import { useEffect, useState } from 'react'

const NAV_LINKS = ['impact', 'stack', 'writing', 'principles', 'projects']

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav>
      <a href="#hero" className="nav-brand">
        <span className="nav-brand-dot" />
        <span className="nav-brand-text">Sesha Gudimella</span>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a href="#connect" className="nav-cta">Let's talk →</a>
    </nav>
  )
}
