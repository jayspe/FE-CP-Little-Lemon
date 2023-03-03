import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard name="John Doe" description="Really loved the cozy vibes and delicious food here."/>
                <TestimonialCard name="Maria Augusta" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Jansenio Amado" description="I've had some great Mediterranean food before, but none of them beats
                Little Lemon in flavor and texture."/>
                <TestimonialCard name="Manjeet Kaur" description="Great food, welcoming staff, cozy atmosphere."/>
                <TestimonialCard name="Chris Chung" description="The food here really refreshed me after a late night shift at work."/>
                <TestimonialCard name="Keanu Reeves" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food tasted so delicious."/>
                <TestimonialCard name="Kate Perfect" description="The food here was awesome! Everyone should try this place
                 out at least once if they visit Chicago."/>
                <TestimonialCard name="Paulo Costa" description="This restaurant served a perfect dinner after a long night of
                 studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}