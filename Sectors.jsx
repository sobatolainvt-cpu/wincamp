import styles from './Sectors.module.css'

const sectors = [
  {
    roi: 'ROI: 840%',
    title: 'Med Spas',
    desc: 'Automated patient acquisition systems that turn foot traffic into high-value repeat procedures.',
  },
  {
    roi: 'ROI: 12.5X',
    title: 'Dental',
    desc: 'Precision targeting for implant and Invisalign cases. We bypass the price-shoppers and capture the intent.',
  },
  {
    roi: 'SCALE: 7-FIG',
    title: 'Coaching',
    desc: 'Aggressive scaling funnels for digital offers. We handle the spend; you handle the impact.',
  },
]

export default function Sectors() {
  return (
    <section className={styles.sectors} id="sectors">
      <div className="container">
        <div className={styles.sectorGrid}>
          {sectors.map((s) => (
            <div key={s.title} className={styles.sectorCard}>
              <span className={styles.roiCallout}>{s.roi}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
