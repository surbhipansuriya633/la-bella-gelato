const eventOffers = [
    {
        title: 'Birthday Parties',
        subtitle: 'Sweet celebrations for every age',
        description:
            'From intimate backyard gatherings to full-scale celebrations, we create a playful and elegant gelato experience with custom flavors and service.',
        features: ['Custom station setup', 'Flavor tasting boards', 'Party favors and add-ons'],
        image:
            'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Weddings',
        subtitle: 'A refined alternative to traditional dessert tables',
        description:
            'Add a memorable finish to your celebration with elegant gelato service, signature pairings, and a beautifully curated display.',
        features: ['Wedding dessert bar', 'Signature flavor pairings', 'Elegant presentation'],
        image:
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Corporate Events',
        subtitle: 'Premium catering for teams and clients',
        description:
            'Impress guests with polished service, branded presentation, and premium dessert moments tailored to your event goals.',
        features: ['Client entertaining', 'Team celebrations', 'Custom seasonal menus'],
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXY1agKmePS6iEg2w8jWJZpHZXeEn6jF6yBg0SnVHhA&s=1024w',
    },
];

const experienceHighlights = [
    {
        title: 'Curated Presentation',
        text: 'Every setup is styled to feel warm, polished, and memorable from the first glance to the last spoonful.',
    },
    {
        title: 'Flexible Service',
        text: 'Whether you need a small tasting station or a full event production, our team adapts to your vision.',
    },
    {
        title: 'Seasonal Menus',
        text: 'We bring thoughtful flavor combinations and seasonal selections that make each event feel uniquely special.',
    },
];

const EventsPage = () => (
    <main className="page content-page events-page container-lg" >
        <section className="events-hero" data-aos="fade-up">
            <div className="events-hero-copy">
                <p className="eyebrow" style={{ color: "#ffd8b9" }}>La Bella Gelato</p>
                <h2>Events that feel effortless, elegant, and unforgettable</h2>
                <p>
                    From intimate gatherings to large-scale celebrations, we bring a refined gelato experience to every moment.
                </p>
                <div className="hero-actions">
                    <a href="/contact" className="primary-btn">
                        Book an Event
                    </a>
                    <a href="/products" className="secondary-btn">
                        View Products
                    </a>
                </div>
            </div>
        </section>

        <section className="events-showcase">
            <div className="events-showcase-intro" data-aos="fade-up" data-aos-delay="90">
                <p className="eyebrow">Special occasions</p>
                <h3>Designed for celebrations with style and substance</h3>
                <p>
                    Our event service blends hospitality, beauty, and flavor into a memorable dessert experience.
                </p>
            </div>


            <div className="row g-4">
                {eventOffers.map((item, index) => (
                    <div
                        className="col-12 col-lg-4 col-sm-6"
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={90 + index * 70}
                    >
                        <article className="event-card h-100">
                            <div
                                className="event-card-image"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            <div className="event-card-content d-flex flex-column">
                                <p className="event-card-subtitle">{item.subtitle}</p>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                                <ul className="mt-auto">
                                    {item.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>

        <div className="events-showcase-intro" data-aos="fade-up" data-aos-delay="90">
            <p className="eyebrow">Our services</p>
            <h3>We bring a polished gelato experience to every event.</h3>
        </div>
        <section className="events-highlights" data-aos="fade-up" data-aos-delay="100">
            {experienceHighlights.map((item) => (
                <article className="card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </article>
            ))}
        </section>

        <section className="events-cta" data-aos="fade-up" data-aos-delay="120">
            <div>
                <p className="eyebrow">Let’s create something memorable</p>
                <h3>Share your vision and we’ll craft the perfect experience.</h3>
            </div>
            <a href="/contact" className="primary-btn">
                Contact Us
            </a>
        </section>
    </main>
);

export default EventsPage;
