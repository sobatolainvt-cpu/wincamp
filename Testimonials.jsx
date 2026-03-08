import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote:
      '"Win Camp didn\'t just run ads — they transformed how our ideal clients find us. The results were immediate, and the care they brought to our brand voice was unmatched."',
    author: 'Sarah K.',
    role: 'Director, Luxe Aesthetics',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    borderColor: 'var(--fuchsia)',
  },
  {
    quote:
      '"We went from struggling for leads to having to pause our campaigns because we couldn\'t keep up with the volume. They literally print money."',
    author: 'Mark Thompson',
    role: 'CEO, TheraGroup Legal',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
    borderColor: 'var(--rose)',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="results">
      <div className="container">
        <h2
          className={`chrome-text ${styles.heading}`}
          style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}
        >
          Market Feedback
        </h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={styles.testimonialCard}
              style={{ borderLeftColor: t.borderColor }}
            >
              <span className={styles.stars}>★★★★★</span>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.clientMeta}>
                <div
                  className={styles.clientPhoto}
                  style={{
                    backgroundImage: `url('${t.photo}')`,
                    backgroundSize: 'cover',
                  }}
                />
                <div>
                  <div className={styles.author}>{t.author}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
