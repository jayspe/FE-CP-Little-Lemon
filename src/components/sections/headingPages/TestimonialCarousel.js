import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="John Doe" description="Really loved the cozy vibes and delicious food here."/>
            <TestimonialCard name="Maria Augusta" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Jansenio Amado" description="I've had some great Mediterranean food before, but none of them beats
        Little Lemon in flavor and texture."/>
            <TestimonialCard name="Manjeet Kaur" description="Great food, welcoming staff, cozy atmosphere."/>
            <TestimonialCard name="Chris Chung" description="The food here really refreshed me after a late night shift at work."/>
            <TestimonialCard name="Keanu Reeves" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food tasted so delicious."/>
            <TestimonialCard name="Kate Perfect" description="The food here was awesome! Everyone should try this Chicago restaurant
                 out at least once."/>
            <TestimonialCard name="Paulo Costa" description="This restaurant served a perfect dinner after a long night of studying. I highly recommend!"/>
             </Carousel>
    )
}