import { galleryItems } from '../data';

export default function Gallery() {
  return (
    <div className="page-content gallery-page">
      <section className="section-intro">
        <div className="section-heading">
          <p className="section-label">Gallery</p>
          <h2>Moments from Maison Muse</h2>
        </div>
        <p className="section-copy">
          A curated collection of the space, the menu, and the atmosphere you can expect when you visit.
        </p>
      </section>

      <div className="gallery-grid gallery-page-grid">
        {galleryItems.map((item) => (
          <article key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <p>{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
