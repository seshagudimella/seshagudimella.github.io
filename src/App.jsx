import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Writing from './components/Writing'
import Principles from './components/Principles'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  // Global fade-up scroll animation — mirrors the original script.js behaviour
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <div className="page-wrap"><Hero /></div>
      <div className="page-wrap"><Impact /></div>
      <div className="page-wrap"><Writing /></div>
      <div className="page-wrap"><Principles /></div>
      <div className="page-wrap"><Stack /></div>
      <div className="page-wrap"><Projects /></div>
      <div className="page-wrap"><Connect /></div>
      <Footer />
    </>
  )
}
