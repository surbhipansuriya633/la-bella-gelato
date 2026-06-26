const productCollections = [
    {
        title: "Fresh Bubble Waffles",
        subtitle: "Golden, Crispy & Loaded With Toppings",
        image: require("../Images/WAFFLES.jpg"),
        products: [
            { name: "Kinder Cloud", price: "$15.99" },
            { name: "Oreo Dinosaur", price: "$15.99" },
            { name: "Lotus Crunch", price: "$15.99" },
            { name: "Berry Pistachio Dream", price: "$15.99" },
            { name: "Nutella & Choco Cookies", price: "$16.99" },
            { name: "Pistachio Luxe", price: "$16.99" },
            { name: "Nutella Pistachio", price: "$16.99" }
        ]
    },

    {
        title: "Belgian Waffles",
        subtitle: "Freshly Baked To Order",
        image: require("../Images/BELGIANWAFFLE.jpg"),
        products: [
            { name: "Nutella Velvet Banana", price: "$13.99" },
            { name: "Belgian Biscoff Bliss", price: "$13.99" },
            { name: "Dark Oreo Fantasy", price: "$13.99" },
            { name: "Cinnamon Orchard Dream", price: "$13.99" },
            { name: "Berry Velvet Delight", price: "$13.99" },
            { name: "Golden Banoffee Crush", price: "$13.99" },
            { name: "Pistachio Paradise", price: "$13.99" }
        ]
    },

    {
        title: "Chocolate Dipped Bananas",
        subtitle: "Premium Belgian Chocolate",
        image: require("../Images/Dipped Bananas.jpg"),
        products: [
            { name: "Belgian Chocolate Banana", price: "$9.99" },
            { name: "Party Pop Banana", price: "$9.99" },
            { name: "Lotus Crunch Banana", price: "$9.99" },
            { name: "Snow Coconut Dream Banana", price: "$9.99" },
            { name: "Oreo Volcano Banana", price: "$9.99" },
            { name: "Peanut Crunch Banana", price: "$10.99" },
            { name: "Pistachio Royal Banana", price: "$10.99" }
        ]
    },

    {
        title: "New York Cheesecake",
        subtitle: "Creamy & Rich",
        image: require("../Images/CHEESECAKE.jpg"),
        products: [
            { name: "Berry Bliss Cheesecake", price: "$12.99" },
            { name: "Choco Crunch Cheesecake", price: "$12.99" },
            { name: "Biscoff Heaven Cheesecake", price: "$12.99" },
            { name: "Banana Caramel Dream", price: "$13.99" },
            { name: "Pistachio Royal Cheesecake", price: "$14.99" }
        ],
        extra: "Add Extra Gelato Scoop - $3.00"
    },

    {
        title: "Brownies",
        subtitle: "Warm, Fudgy & Indulgent",
        image: require("../Images/BROWNIES.jpg"),
        products: [
            { name: "Brownie Blast", price: "$11.99" },
            { name: "Biscoff Brownie Crunch", price: "$12.99" },
            { name: "Pistachio Brownie Royal", price: "$13.99" },
            { name: "Berry Brownie Delight", price: "$13.99" },
            { name: "Banana Brownie Dream", price: "$13.99" }
        ],
        extra: "Add Extra Gelato Scoop - $3.00"
    },

    // {
    //     title: "Smoothies",
    //     subtitle: "Blended Fresh With Real Fruit",
    //     image: "/images/products/smoothie.jpg",
    //     products: [
    //         {
    //             name: "Island Breeze",
    //             description: "Mango, Pineapple, Banana & Yogurt",
    //             regular: "$8.99",
    //             large: "$11.99"
    //         },
    //         {
    //             name: "Summer Berry Splash",
    //             description: "Strawberry, Banana & Yogurt",
    //             regular: "$8.99",
    //             large: "$11.99"
    //         },
    //         {
    //             name: "Mango Magic",
    //             description: "Mango, Banana & Yogurt",
    //             regular: "$8.99",
    //             large: "$11.99"
    //         },
    //         {
    //             name: "Berry Blast",
    //             description: "Mixed Berries, Strawberry, Banana & Yogurt",
    //             regular: "$8.99",
    //             large: "$11.99"
    //         },
    //         {
    //             name: "Golden Lagoon",
    //             description: "Mango, Pineapple, Kiwi, Passionfruit & Yogurt",
    //             regular: "$8.99",
    //             large: "$11.99"
    //         },
    //         {
    //             name: "Protein Power",
    //             description: "Banana, Protein, Peanut Butter & Honey",
    //             regular: "$9.99",
    //             large: "$12.99"
    //         }
    //     ]
    // }
];
const productHighlights = [
    {
        title: 'Gelato & Waffle favourites',
        text: 'Enjoy our signature gelato, bubble waffles and Belgian waffles made fresh for every visit.',
    },
    {
        title: 'Desserts for every occasion',
        text: 'Perfect for families, students, casual treats and special celebrations alike.',
    },
    {
        title: 'Takeaway options available',
        text: 'Enjoy takeaway gelato tubs and sweet treats to enjoy at home or on the go.',
    },
];

const ProductsPage = () => (
    <main className="page content-page products-page container-lg">
        <section className="products-hero" data-aos="fade-up">
            <div className="products-hero-copy">
                <p className="eyebrow" style={{ color: "#ffd8b9" }}>La Bella Gelato</p>
                <h2>Fresh gelato, waffles and desserts for every sweet moment</h2>
                <p>
                    Discover a range of treats made fresh in Mount Eden, from creamy gelato and bubble waffles to cheesecakes, smoothies and indulgent chocolate desserts.
                </p>
                <div className="hero-actions">
                    <a href="/contact" className="primary-btn">
                        Request a Consultation
                    </a>
                    <a href="/events" className="secondary-btn">
                        Explore Events
                    </a>
                </div>
            </div>
        </section>

        <section className="products-showcase">
            <div className="products-showcase-intro" data-aos="fade-up" data-aos-delay="90">
                <p className="eyebrow">Collections</p>
                <h3>Crafted for sharing, treating and celebrating</h3>
                <p>
                    Every item reflects our attention to flavour, texture and presentation, bringing a premium dessert experience to every visit.
                </p>
            </div>

            <main className="page container-lg">

                {productCollections.map((item, index) => (
                    <section
                        key={item.title}
                        className={`premium-product-section ${index % 2 !== 0 ? "reverse" : ""
                            }`}
                        data-aos="fade-up"
                    >
                        <div className="container-fluid">
                            <div className="row align-items-center g-5">

                                {/* Image */}
                                <div className="col-lg-6">
                                    <div className="premium-image col-lg-10 col-md-8 col-sm-10 mx-auto">
                                        <img src={item.image} alt={item.title} className="img-fluid" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="col-lg-6 px-sm-5 px-0">
                                    <div className="premium-content">

                                        <span className="premium-subtitle">
                                            {item.subtitle}
                                        </span>

                                        <h2>{item.title}</h2>

                                        <p>{item.description}</p>

                                        <div className="menu-list">

                                            {item.products.map((menu) => (
                                                <div className="menu-item" key={menu.name}>
                                                    <div>
                                                        <h5>{menu.name}</h5>

                                                        {menu.description && (
                                                            <small>{menu.description}</small>
                                                        )}
                                                    </div>

                                                    <div className="price-box">

                                                        {menu.price && (
                                                            <span>{menu.price}</span>
                                                        )}

                                                        {menu.regular && (
                                                            <>
                                                                <span>R {menu.regular}</span>
                                                                <span>L {menu.large}</span>
                                                            </>
                                                        )}

                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                        {item.extra && (
                                            <div className="extra-info">
                                                {item.extra}
                                            </div>
                                        )}

                                        {/* <button className="primary-btn mt-4">
                                            Order Now
                                        </button> */}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ))}

            </main>
        </section>

        <section className="products-highlights">
            {productHighlights.map((item) => (
                <article className="card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </article>
            ))}
        </section>

        <section className="products-cta" data-aos="fade-up" data-aos-delay="100">
            <div>
                <p className="eyebrow">Bring the experience home</p>
                <h3>Let us help you choose the perfect dessert to enjoy.</h3>
            </div>
            <a href="/contact" className="primary-btn">
                Contact Us
            </a>
        </section>
    </main>
);

export default ProductsPage;
