const storeCards = [
  {
    city: 'Downtown',
    address: '123 Gelato Street',
    hours: 'Daily • 11:00 AM - 10:00 PM',
    highlight: 'Best for evening strolls and artisan scoops',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  },
  {
    city: 'Riverside',
    address: '88 Harbor Avenue',
    hours: 'Daily • 12:00 PM - 9:00 PM',
    highlight: 'Scenic views and seasonal tasting flights',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    city: 'West Village',
    address: '45 Market Lane',
    hours: 'Daily • 10:00 AM - 11:00 PM',
    highlight: 'A cozy destination for weekend visits',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
  },
];

const StoresPage = () => (
  <main className="page content-page stores-page container-lg">
    <section className="stores-hero">
      <div className="stores-hero-copy">
        <p className="eyebrow">La Bella Gelato</p>
        <h2>Visit a store that feels like a destination</h2>
        <p>
          Discover our welcoming locations, each designed to offer fresh scoops, beautiful surroundings, and a calm place to linger.
        </p>
        <div className="hero-actions">
          <a href="/contact" className="primary-btn">
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>

    <section className="stores-showcase">
      <div className="stores-showcase-intro">
        <p className="eyebrow">Our Locations</p>
        <h3>Find the store that suits your moment</h3>
        <p>
          Whether you are stopping by for a quick treat or settling in for a slow afternoon, each location offers something special.
        </p>
      </div>

      <div className="stores-grid">
        {storeCards.map((item) => (
          <article className="store-card" key={item.city}>
            <div className="store-card-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="store-card-content">
              <h3>{item.city}</h3>
              <p className="store-card-highlight">{item.highlight}</p>
              <p>{item.address}</p>
              <p className="muted">{item.hours}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="stores-cta">
      <div>
        <p className="eyebrow">Experience the boutique atmosphere</p>
        <h3>Each location is crafted to feel warm, inviting, and memorable.</h3>
      </div>
      <a href="/contact" className="primary-btn">
        Contact Us
      </a>
    </section>
  </main>
);

export default StoresPage;
