import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const pills = ['Medical Aesthetics', 'Luxury Real Estate', 'Legal Systems', 'High Ticket SaaS']

export default function Hero() {
  const chromeRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!chromeRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      chromeRef.current.style.backgroundPosition = `${x}% ${y}%`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className="container">
        <p className={styles.heroTagline}>Your Growth Deserves a Strategy That Actually Works.</p>
        <h1 className={`chrome-text ${styles.heroTitle}`} ref={chromeRef}>
          WIN<br />CAMP
        </h1>

        <div className={styles.sectorPills}>
          {pills.map((pill) => (
            <span key={pill} className={styles.pill}>{pill}</span>
          ))}
        </div>

        <p className={styles.subText}>
          Female-founded. Results-driven. We craft marketing and advertising strategies that connect
          your brand with the right people — with empathy, precision, and creative that converts.
        </p>

        <a href="#" className={styles.btnMain}>Book a Strategy Call</a>
      </div>
    </section>
  )
}
