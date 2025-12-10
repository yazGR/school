import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import Programs from '../components/Programs/Programs'
import About from '../components/About/About'
import Campus from '../components/Campus/Campus'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Conctac/Contact'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  
  return (
    <>
        <Layout>
            <Hero/>
            <div class="pl-[10%]! pr-[10%]!">
            <Title subTitle={ t("pages.dashboard.programs.subTitle") } title={ t("pages.dashboard.programs.title") } />
            <Programs />
            <About />
            <Title subTitle={ t("pages.dashboard.campus.subTitle") } title={ t("pages.dashboard.campus.title") } />
            <Campus />
            <Title subTitle={ t("pages.dashboard.testimonials.subTitle") } title={ t("pages.dashboard.testimonials.title") } />
            <Testimonials />
            <Title subTitle={ t("pages.dashboard.contact.subTitle") } title={ t("pages.dashboard.contact.title") } />
            <Contact />
            </div>
        </Layout>
    </>
  )
}

export default Dashboard