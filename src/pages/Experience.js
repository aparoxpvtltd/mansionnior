import { features, testimonials } from '../data';

export default function Experience() {
  return (
    <div className="page-content experience-page">
      <section className="section-intro">
        <div className="section-heading">
          <p className="section-label">The Muse Experience</p>
          <h2>Quiet design, thoughtful service, and memorable moments.</h2>
        </div>
        <p className="section-copy">
          Maison Muse blends timeless hospitality with a refined environment so that every visit feels considered, calm, and luxurious.
        </p>
      </section>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.detail}</p>
          </article>
        ))}
      </div>

      <section className="testimonial-section">
        <div className="section-heading">
          <p className="section-label">Guest Reviews</p>
          <h2>What people remember after their visit.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <p>“{item.quote}”</p>
              <span>{item.author}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
