import { Link } from 'react-router-dom';

const storyHighlights = [
    {
        title: 'A local dessert destination',
        text: 'What began as a passion for premium desserts has grown into a welcoming Mount Eden destination for gelato, waffles, smoothies, cheesecakes and more.',
    },
    {
        title: 'Freshly prepared daily',
        text: 'We focus on quality ingredients and beautiful presentation so every scoop, waffle and shake feels fresh, inviting and memorable.',
    },
    {
        title: 'A welcoming experience',
        text: 'We create a warm and friendly dessert experience for families, friends, students and anyone looking for a sweet treat.',
    },
];

const storyJourney = [
    'Inspired by the joy of Italian-style desserts and the charm of a welcoming local shop.',
    'Built around premium ingredients, fresh preparation and beautiful presentation.',
    'Shared with guests through gelato, waffles, smoothies, cheesecakes, brownies and sweet treats made for everyday enjoyment.',
];

const StoryPage = () => (
    <main className="page story-page container-lg">
        <section className="story-hero" data-aos="fade-up">
            <div className="story-hero-copy">
                <p className="eyebrow"style={{color:"#ffd8b9"}}>About La Bella Gelato</p>
                <h2>Fresh desserts, warm hospitality, and a sweet experience in Mount Eden.</h2>
                <p>
                    La Bella Gelato is a gelato and dessert shop in the heart of Mount Eden, Auckland, created to offer high-quality desserts made with premium ingredients, beautiful presentation and friendly service.
                </p>
                <div className="story-hero-actions">
                    <Link to="/flavors" className="button-primary">Discover our flavors</Link>
                </div>
            </div>

            <div className="story-hero-card">
                <p className="story-hero-card-label">Since 2012</p>
                <h3>Italian-inspired recipes, hand-finished every day.</h3>
            </div>
        </section>

        <section className="story-intro" data-aos="fade-up" data-aos-delay="90">
            <div className="story-intro-copy">
                <p className="eyebrow">Our philosophy</p>
                <h3>Every dessert is made to be enjoyed and remembered.</h3>
                <p>
                    Our mission is to serve delicious, fresh and high-quality gelato and desserts with excellent customer service, giving every customer a sweet experience with great taste and a welcoming atmosphere.
                </p>
            </div>

            <div className="story-stats">
                <div className="story-stat">
                    <strong>Small-batch</strong>
                    <span>Made fresh with care</span>
                </div>
                <div className="story-stat">
                    <strong>Seasonal</strong>
                    <span>Flavors that evolve beautifully</span>
                </div>
                <div className="story-stat">
                    <strong>Handcrafted</strong>
                    <span>Texture, aroma, and finish matter</span>
                </div>
            </div>
        </section>

        <section className="story-grid">
            {storyHighlights.map((item, index) => (
                <article className="story-card" key={item.title} data-aos="fade-up" data-aos-delay={90 + index * 70}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </article>
            ))}
        </section>

        <section className="story-feature" data-aos="fade-up" data-aos-delay="100">
            <div className="story-feature-image" />
            <div className="story-feature-copy">
                <p className="eyebrow">From our kitchen</p>
                <h3>Fresh ingredients, timeless technique.</h3>
                <p>
                    We blend premium dairy, hand-selected fruit, and carefully toasted nuts to create gelato that feels both classic and contemporary. The result is a dessert that is lush, balanced, and unmistakably memorable.
                </p>
            </div>
        </section>

        <section className="story-quote" data-aos="fade-up" data-aos-delay="110">
            <p>“The best gelato is made with care, patience, and a little bit of wonder.”</p>
            <span>— The La Bella Gelato team</span>
        </section>

        <section className="story-journey" data-aos="fade-up" data-aos-delay="120">
            <h3>How our story unfolds</h3>
            <ul>
                {storyJourney.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    </main>
);

export default StoryPage;
