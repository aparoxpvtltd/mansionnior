import { Link } from 'react-router-dom';
import { features, testimonials } from '../data';

export default function Home() {
  return (
    <div className="page-content home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="overline">Crafted coffee. Curated calm.</p>
          <h1>Welcome to Maison Muse, a sanctuary for coffee lovers.</h1>
          <p className="hero-text">
            A premium cafe experience with handcrafted beverages, artisanal pastries, and an atmosphere designed for slow mornings and elegant afternoons.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/menu">
              Explore the Menu
            </Link>
            <Link className="ghost-btn" to="/experience">
              Discover the Space
            </Link>
          </div>
          <div className="hero-info-grid">
            <article>
              <p className="stat-number">12+</p>
              <p>Seasonal recipes</p>
            </article>
            <article>
              <p className="stat-number">4.9</p>
              <p>Guest rating</p>
            </article>
            <article>
              <p className="stat-number">Daily</p>
              <p>Freshly roasted</p>
            </article>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-image" />
          <div className="hero-visual-card hero-card-top">
            <span className="tag">House favorite</span>
            <h3>Rose Affogato</h3>
            <p>Decadent espresso over rose petal gelato, toasted pistachio, and orange blossom.</p>
          </div>
          <div className="hero-visual-card hero-card-bottom">
            <p className="eyebrow">Featured craft</p>
            <h3>Smoked Vanilla Cold Brew</h3>
            <p>Slow-steeped cold brew infused with house-made vanilla smoke and cedar honey.</p>
          </div>
        </div>
      </section>

      <section className="overview-section">
        <div className="section-heading">
          <p className="section-label">The Muse Experience</p>
          <h2>Design, flavor, and warmth in every detail.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <p className="eyebrow">Elegant detail</p>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <p className="section-label">What guests are saying</p>
          <h2>Stories from our regulars</h2>
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
