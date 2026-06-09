import { useState } from 'react';
import { menuItems, categories } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const activeMenu =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleOrder = (id) => {
    setSelectedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-content menu-page">
      <section className="section-intro">
        <div className="section-heading">
          <p className="section-label">Seasonal Menu</p>
          <h2>Today’s refined selections</h2>
        </div>
        <p className="section-copy">
          Discover the carefully selected menu of handcrafted beverages and pastries, each designed to highlight fresh ingredients and elegant flavor pairings.
        </p>
      </section>

      <section className="menu-hero">
        <article className="menu-hero-card">
          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80"
            alt="Cold brew coffee"
          />
          <div>
            <p className="menu-label">Featured craft</p>
            <h3>Smoked Vanilla Cold Brew</h3>
            <p>
              A slow-steeped signature drink with house-made vanilla smoke and cedar honey, served over polished ice.
            </p>
          </div>
        </article>
        <article className="menu-hero-card alt">
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80"
            alt="Specialty dessert"
          />
          <div>
            <p className="menu-label">Chef’s choice</p>
            <h3>Rose Affogato</h3>
            <p>
              Espresso poured over rose-petal gelato, toasted pistachio, and orange blossom for a truly memorable tasting moment.
            </p>
          </div>
        </article>
      </section>

      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'category active' : 'category'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {activeMenu.map((item) => (
          <article key={item.id} className="menu-card">
            <img className="menu-card-image" src={item.image} alt={item.title} />
            <div className="menu-card-top">
              <span className="menu-tag">{item.tag}</span>
              <span className="menu-price">{item.price}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
              className={selectedItem === item.id ? 'menu-order selected' : 'menu-order'}
              onClick={() => handleOrder(item.id)}
            >
              {selectedItem === item.id ? 'Added to order' : 'Order now'}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
