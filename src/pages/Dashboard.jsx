import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import Programs from '../components/Programs/Programs'
import About from '../components/About/About'
import Campus from '../components/Campus/Campus'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Conctac/Contact'

const Dashboard = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <div class="pl-[10%]! pr-[10%]!">
            <Title subTitle="Our Programs" title="What We Offer" />
            <Programs />
            <About />
            <Title subTitle="Gallery" title="Campus Photos" />
            <Campus />
            <Title subTitle="Testimonials" title="What Our Students Say" />
            <Testimonials />
            <Title subTitle="Contact Us" title="Get in Touch" />
            <Contact />
            </div>
        </Layout>
    </>
  )
}

export default Dashboard