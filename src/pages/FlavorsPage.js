const flavorCards = [
  {
    title: 'Pistachio',
    description: 'Creamy Sicilian pistachio with roasted notes and a silky finish.',
    detail: 'A classic favorite made with premium nuts and fresh milk.',
    image:
      'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Strawberry Basil',
    description: 'Sweet strawberries layered with soft basil for a fresh, garden-like taste.',
    detail: 'Bright, fragrant, and perfect for warm afternoons.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salted Caramel',
    description: 'Golden caramel swirled into a smooth, buttery gelato base.',
    detail: 'Balanced sweetness with a gently salted finish.',
    image:
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80',
  },
];

const FlavorsPage = () => (
  <main className="page content-page flavors-page container-lg">
    <section className="page-header flavors-hero" data-aos="fade-up">
      <div className="flavors-hero-copy">
        <p className="eyebrow"style={{color:"#ffd8b9"}}>La Bella Gelato</p>
        <h2>Flavors</h2>
        <p>
          Discover a carefully curated collection of handcrafted gelato flavors — each one
          created to balance freshness, richness, and timeless Italian style.
        </p>
      </div>
    </section>

    <section className="flavor-intro-card" data-aos="fade-up" data-aos-delay="90">
      <h3>Crafted with elegance</h3>
      <p>
        From velvety classics to seasonal specialties, our flavors are designed to feel both
        refined and comforting, bringing the spirit of artisan dessert-making to every scoop.
      </p>
    </section>

    <section className="flavor-grid-large">
      {flavorCards.map((item, index) => (
        <article className="flavor-card-large" key={item.title} data-aos="fade-up" data-aos-delay={90 + index * 80}>
          <div
            className="flavor-card-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="flavor-card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="muted">{item.detail}</p>
          </div>
        </article>
      ))}
    </section>
  </main>
);

export default FlavorsPage;
