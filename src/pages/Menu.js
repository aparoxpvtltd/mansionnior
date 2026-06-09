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
            <div className="menu-card-top">
              <span className="menu-category">{item.category}</span>
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
