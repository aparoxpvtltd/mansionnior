import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Experience from './pages/Experience';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App page-loaded">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">M</span>
            <div>
              <p className="brand-label">Maison Muse</p>
              <p className="brand-subtitle">Artisan Cafe</p>
            </div>
          </div>

          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Menu
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Experience
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </nav>

          <NavLink className="reserve-button" to="/contact">
            Reserve a Table
          </NavLink>
        </header>

        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <div>
            <p className="section-label">Maison Muse</p>
            <h2>A refined cafe for curated moments.</h2>
          </div>
          <div className="footer-actions">
            <NavLink className="ghost-btn" to="/menu">
              View Menu
            </NavLink>
            <div className="footer-info">
              <p>hello@maisonmuse.cafe</p>
              <p>128 Muse Avenue, Downtown</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
