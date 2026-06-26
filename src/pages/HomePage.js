import { Link } from 'react-router-dom';

const featuredFlavors = [
    {
        title: 'Pistachio',
        description: 'Silky and nut-rich, crafted with roasted Sicilian pistachios.',
        tag: 'Signature',
        image:
            'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Strawberry Basil',
        description: 'Fresh berries and aromatic basil in a bright, elegant scoop.',
        tag: 'Seasonal',
        image:
            'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Salted Caramel',
        description: 'Deep caramel notes balanced with a gentle buttery finish.',
        tag: 'Classic',
        image:
            'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80',
    },
];

const HomePage = () => (
    <main className="page home-page container-lg">
        <section className="home-hero" data-aos="fade-up">
            <div className="home-hero-content" data-aos="fade-right" data-aos-delay="200">
                <p className="eyebrow" style={{ color: "#ffd8b9" }}>Fresh Gelato, Waffles & Sweet Moments</p>
                <h1>Fresh gelato, waffles and sweet moments in Mount Eden.</h1>
                <p className="hero-text">
                    La Bella Gelato is a gelato and dessert shop in the heart of Mount Eden, Auckland, serving freshly made gelato, waffles, smoothies, shakes, cheesecakes, brownies and chocolate-dipped treats.
                </p>
                <div className="hero-actions">
                    <Link className="primary-btn" to="/flavors">
                        Explore Our Flavors
                    </Link>
                    <Link className="secondary-btn" to="/products">
                        View Products
                    </Link>
                </div>
            </div>

            <div className="home-hero-panel" data-aos="fade-left" data-aos-delay="400">
                <h3>Why guests love us</h3>
                <ul>
                    <li>Freshly made gelato</li>
                    <li>Premium ingredients</li>
                    <li>Warm, welcoming service</li>
                </ul>
                <Link className="text-link" to="/about">
                    Our Story
                </Link>
            </div>
        </section>

        <section className="home-section">
            <div className="section-heading" data-aos="fade-up">
                <p className="eyebrow">Our Craft</p>
                <h2>Fresh desserts made with quality, flavour and care.</h2>
                <p>
                    From creamy gelato and bubble waffles to smoothies, cheesecakes and brownies, every dessert is made to bring joy to families, friends, students and sweet-tooth visitors alike.
                </p>
            </div>

            <div className="intro-grid">
                <article className="intro-card" data-aos="zoom-in" data-aos-delay="400">
                    <h3>Made fresh every day</h3>
                    <p>
                        Our gelato is smooth, creamy and full of flavour, made with quality ingredients and served with beautiful presentation and friendly service.
                    </p>
                </article>
                <article className="intro-card intro-card-image" data-aos="zoom-in" data-aos-delay="400">
                    <p>“A tasting experience as refined as it is indulgent.”</p>
                </article>
            </div>
        </section>

        <section className="home-section">
            <div className="section-heading" data-aos="fade-up">
                <p className="eyebrow">Signature collection</p>
                <h2>Signature treats for every sweet craving.</h2>
            </div>

            <div className="flavor-grid">
                {featuredFlavors.map((flavor, index) => (
                    <article
                        className="flavor-card"
                        key={flavor.title}
                        data-aos="flip-left"
                        data-aos-delay={index * 150}
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${flavor.image})`,
                        }}
                    >
                        <span className="flavor-tag">{flavor.tag}</span>
                        <h3>{flavor.title}</h3>
                        <p>{flavor.description}</p>
                    </article>
                ))}
            </div>
        </section>

        <section className="home-section home-contact-section" data-aos="fade-up" >
            <div>
                <p className="eyebrow">Contact us</p>
                <h2>Visit us in Mount Eden or contact us for catering, events and special dessert requests.</h2>
            </div>
            <div className="home-contact-actions" data-aos="zoom-in" data-aos-delay="300">
                <a className="primary-btn" href="mailto:hello@labellagelato.com">
                    Email us
                </a>
                <Link className="secondary-btn" to="/contact">
                    View contact page
                </Link>
            </div>
        </section>

        <section className="home-section home-cta" data-aos="zoom-in-up">
            <div>
                <p className="eyebrow">Visit us</p>
                <h2>From a quick gelato stop to a memorable dessert experience.</h2>
            </div>
            <Link className="primary-btn" to="/events">
                Plan an Experience
            </Link>
        </section>
    </main>
);

export default HomePage;
