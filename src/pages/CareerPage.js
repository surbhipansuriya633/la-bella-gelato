import { Link } from 'react-router-dom';

const careers = [
    {
        title: 'Gelato Artisan',
        type: 'Full-time • Milan',
        description: 'Craft house-made flavors, support production, and keep every batch refined and consistent.',
    },
    {
        title: 'Store Lead',
        type: 'Part-time • Rome',
        description: 'Welcome guests, guide flavor selections, and shape the atmosphere of our boutique experience.',
    },
    {
        title: 'Events Specialist',
        type: 'Full-time • Florence',
        description: 'Coordinate pop-ups, private tastings, and seasonal activations with elegance and care.',
    },
];

const benefits = [
    'A creative, hands-on role in a fast-growing artisan brand',
    'Training, mentorship, and room to grow with the business',
    'A warm team culture built around hospitality and craft',
];

const CareerPage = () => (
    <main className="page career-page container-lg">
        <section className="career-hero" data-aos="fade-up">
            <div className="career-hero-copy">
                <p className="eyebrow" style={{ color: "#ffd8b9" }}>Careers at La Bella Gelato</p>
                <h2>Join the craft behind every scoop.</h2>
                <p>
                    We’re looking for thoughtful, hospitality-driven people who love beautiful food, meaningful service, and the joy of creating memorable experiences.
                </p>
                <div className="career-hero-actions">
                    <Link to="/contact" className="button-primary">Apply now</Link>
                    <a href="mailto:careers@labellagelato.com" className="button-secondary">Email us</a>
                </div>
            </div>

            <div className="career-hero-card">
                <p className="career-hero-card-label">Now hiring</p>
                <h3>Passionate team members for our cafés, studios, and events.</h3>
            </div>
        </section>

        <section className="career-intro" data-aos="fade-up" data-aos-delay="90">
            <div className="career-intro-card">
                <p className="eyebrow">Why join us</p>
                <h3>Bring your passion to a brand built on quality and hospitality.</h3>
                <p>
                    At La Bella Gelato, every role helps shape the guest experience — from the first welcome to the final spoonful. We value warmth, precision, and a genuine love for craft.
                </p>
            </div>

            <div className="career-benefits">
                {benefits.map((item) => (
                    <div className="career-benefit" key={item}>
                        <strong>•</strong>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>

        <section className="career-openings">
            {careers.map((item, index) => (
                <article className="career-role-card" key={item.title} data-aos="fade-up" data-aos-delay={90 + index * 70}>
                    <p className="career-role-type">{item.type}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </section>

        <section className="career-cta" data-aos="fade-up" data-aos-delay="110">
            <div>
                <p className="eyebrow">Let’s create something delicious together</p>
                <h3>We’d love to hear from you.</h3>
            </div>
            <Link to="/contact" className="button-primary">Get in touch</Link>
        </section>
    </main>
);

export default CareerPage;
