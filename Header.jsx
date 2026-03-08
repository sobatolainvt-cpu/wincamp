import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>WIN CAMP</div>
      <nav className={styles.navLinks}>
        <a href="#sectors">Sectors</a>
        <a href="#results">Results</a>
        <a href="#manifesto">Manifesto</a>
      </nav>
      <a href="#" className={styles.btnMain} style={{ padding: '10px 30px', fontSize: '0.7rem' }}>
        Book a Strategy Call
      </a>
    </header>
  )
}
