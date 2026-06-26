import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const contactDetails = [
    {
        title: 'Business name',
        text: 'La Bella Gelato',
    },
    {
        title: 'Phone',
        text: '022 427 8418',
    },
    {
        title: 'Address',
        text: '440, Mount Eden Road, Mount Eden, Auckland 1024, New Zealand',
    },
    {
        title: 'Email',
        text: 'info@labellagelato.com',
    }
];

const ContactPage = () => {

    const form = useRef();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {

                alert("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                setLoading(false);

            })
            .catch((error) => {

                console.log(error);

                alert("Failed to send message");

                setLoading(false);
            });
    };
    return (
        <main className="page contact-page container-lg">
            <section className="contact-hero" data-aos="fade-up">
                <div className="contact-hero-copy">
                    <p className="eyebrow" style={{ color: "#ffd8b9" }}>Contact La Bella Gelato</p>
                    <h2>Visit us in Mount Eden or get in touch for your next sweet treat.</h2>
                    <p>
                        We’d love to hear from you for gelato, waffles, smoothies, catering, events or a simple visit to our dessert shop in Mount Eden.
                    </p>
                </div>
            </section>

            <section className="contact-grid">
                <article className="contact-card contact-details-card" data-aos="fade-right" data-aos-delay="90">
                    <h3>Get in touch</h3>
                    {contactDetails.map((item) => (
                        <div className="contact-detail" key={item.title}>
                            <strong>{item.title}</strong>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </article>

                <article className="contact-card contact-form-card" data-aos="fade-left" data-aos-delay="120">
                    <h3>Send us a message</h3>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact-form"
                    >
                        <label>
                            Name

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </label>
                        <label>
                            Email

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                            />
                        </label>
                        <label>
                            Message

                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your request"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit Inquiry"}
                        </button>
                    </form>
                </article>
            </section>

            <section className="contact-cta" data-aos="fade-up" data-aos-delay="110">
                <div>
                    <p className="eyebrow">Plan something special</p>
                    <h3>Private tastings, events and dessert requests are available on request.</h3>
                </div>
                <Link className="button-primary" to="/events">
                    Explore events
                </Link>
            </section>
        </main>
    );
}

export default ContactPage;
