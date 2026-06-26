import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import HomePage from './pages/HomePage';
import FlavorsPage from './pages/FlavorsPage';
import ProductsPage from './pages/ProductsPage';
import EventsPage from './pages/EventsPage';
// import StoresPage from './pages/StoresPage';
import StoryPage from './pages/StoryPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import Aos from 'aos';

const leftNavItems = [
  { to: '/', label: 'Home' },
  { to: '/flavors', label: 'Flavors' },
  { to: '/products', label: 'Products' },
  // { to: '/stores', label: 'Stores' },
];

const rightNavItems = [
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'Our Story' },
  // { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
];

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/flavors', label: 'Flavors' },
  { to: '/products', label: 'Products' },
  { to: '/events', label: 'Events' },
  // { to: '/stores', label: 'Stores' },
  { to: '/about', label: 'Our Story' },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      mirror: false,
    });
  }, [location.pathname]);

  const handleMobileNavClick = (to) => {
    const offcanvasElement = document.getElementById('mobileNavOffcanvas');

    if (offcanvasElement) {
      const offcanvasInstance = window.bootstrap?.Offcanvas.getOrCreateInstance(offcanvasElement);
      offcanvasInstance?.hide();
    }

    navigate(to);
  };

  return (
    <div className="app-shell">
      <nav className="navbar custom-navbar">
        <div className="container">
          <div className="nav-links nav-links-left d-none d-lg-flex">
            {leftNavItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <Link className="brand" to="/">
            <img src={require('./png.png')} height="80" width="80" alt="La Bella Gelato" />
          </Link>

          <div className="nav-links nav-links-right d-none d-lg-flex">
            {rightNavItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNavOffcanvas"
            aria-controls="mobileNavOffcanvas"
            aria-label="Open navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileNavOffcanvas"
        aria-labelledby="mobileNavOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavOffcanvasLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="mobile-nav-links">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                to={item.to}
                key={item.to}
                className="mobile-link"
                onClick={(event) => {
                  event.preventDefault();
                  handleMobileNavClick(item.to);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mobile-footer">
            <p>La Bella Gelato</p>
            <small>Crafted with care, served with joy.</small>
          </div>
        </div>
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flavors" element={<FlavorsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/stores" element={<StoresPage />} /> */}
          <Route path="/about" element={<StoryPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content container">
          <div className="footer-column">
            <img src={require('./png.png')} height="80" width="80" alt="La Bella Gelato" />
            <p>
              Crafted with passion, served with elegance, and inspired by the joy of slow afternoons and sweet traditions.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <div className="footer-links">
              {footerLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Visit Us</h4>
            <p>440, Mount Eden Road, Mount Eden, Auckland 1024, New Zealand</p>
            <p>Open Daily · 11:00 AM – 11:00 PM <br />
              Opening hours may vary on public holidays</p>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>hello@labellagelato.com</p>
            <p> +64 022 427 8418</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 La Bella Gelato. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
