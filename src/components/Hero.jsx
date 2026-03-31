import { useEffect } from 'react'
import DIAGRAMS from '../diagrams'

function animateCounter(el) {
  const target = +el.dataset.target
  const duration = 1800
  const start = performance.now()
  const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  const update = now => {
    const p = Math.min((now - start) / duration, 1)
    el.textContent = Math.round(ease(p) * target)
    if (p < 1) requestAnimationFrame(update)
    else el.textContent = target
  }
  requestAnimationFrame(update)
}

export default function Hero() {
  useEffect(() => {
    const counterEls = document.querySelectorAll('.counter')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target) }
      })
    }, { threshold: 0.5 })
    counterEls.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="hero">
      <div className="hero-text">
        <div className="eyebrow-pill">Cloud Platform &amp; Engineering Leader</div>
        <h1 className="hero-headline">
          I build systems that<br />scale <span className="gradient-text">teams,</span><br />not just infrastructure.
        </h1>
        <p className="hero-sub">
          Turning cloud reliability, cost discipline, and observability into a competitive advantage — at the intersection of platform engineering and strategic leadership.
        </p>
        <div className="metrics-strip">
          <div className="metric-cell">
            <div className="metric-val green">
              $<span className="counter" data-target="100">0</span>K
              <span style={{ fontSize: '1.1rem' }}>/mo</span>
            </div>
            <div className="metric-label">AWS cost savings</div>
          </div>
          <div className="metric-cell">
            <div className="metric-val accent">
              <span className="counter" data-target="50">0</span>%
            </div>
            <div className="metric-label">CI cost reduction</div>
          </div>
          <div className="metric-cell">
            <div className="metric-val indigo">
              ~1 day<br />
              <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700 }}>→ real-time</span>
            </div>
            <div className="metric-label">CI feedback latency</div>
          </div>
        </div>
      </div>
      <div
        className="hero-visual"
        dangerouslySetInnerHTML={{ __html: DIAGRAMS.heroTopology }}
      />
    </section>
  )
}
