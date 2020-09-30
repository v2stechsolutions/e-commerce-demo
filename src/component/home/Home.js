import React from 'react'
import HeroBannnerSlider from '../home/HeroBannnerSlider'
import OurStore from '../home/OurStore'
import Collections from '../home/Collections'
import ClientTestimonial from '../home/ClientTestimonial'
import TestimonialReview from '../home/TestimonialReview'

function Home() {
    return (
        <div className="home">
            <HeroBannnerSlider />
            <OurStore />
            <Collections />
            <ClientTestimonial />
            <TestimonialReview />
        </div>
    )
}

export default Home