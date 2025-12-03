import React from 'react'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div class="my-[100px]! mx-auto! flex items-center justify-between w-[90%]">
      <div class="basis-[40%] relative">
        <img src={about_image} alt="about" class="w-full rounded-[10px]"/>
        <img src={play_icon} alt="play" class="w-[60px] absolute top-1/2 left-1/2 transform-[translate(-50%, -50%)] cursor-pointer"/>
      </div>
      <div class="basis-[56%]">
        <h3 class="font-semibold text-base text-indigo-900">ABOUT UNIVERSITY</h3>
        <h2 class="text-4xl text-shadow-blue-950 my-2.5! mx-0! max-w-[400px]">Nurturing Tomorrow's Leader Today</h2>
        <p class="mb-[15px]! text-gray-500">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p class="mb-[15px]! text-gray-500">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p class="mb-[15px]! text-gray-500">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
