import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Button from '../button/Button'

const Hero = () => {
  return (
    <div class="w-full min-h-screen bg-linear-to-t from-sky-500 to-indigo-500 bg-cover bg-center text-white flex items-center justify-center pl-[10%]! pr-[10%]!">
      <div class="text-center max-w-[800px]">
        <h1 class="text-[60px] font-extrabold">We Ensure better education for a better world</h1>
        <p class="max-w-[700px] mx-auto mt-2.5 mb-5">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <Button text="See more here" icon={dark_arrow} />
      </div>
    </div>
  )
}

export default Hero
