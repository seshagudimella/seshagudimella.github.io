import { useEffect, useState } from 'react'

export default function Footer() {
  const [count, setCount] = useState('...')

  useEffect(() => {
    fetch('https://gvlraghava.goatcounter.com/counter/%2F.json')
      .then(r => r.json())
      .then(d => setCount(d.count))
      .catch(() => {})
  }, [])

  return (
    <footer>
      <p>© 2026 Sesha Gudimella &nbsp;·&nbsp; seshagudimella.com</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>{count}</span> visitors
      </p>
    </footer>
  )
}
