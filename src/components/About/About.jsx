import React from 'react'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { useTranslation } from 'react-i18next'

const About = () => {

   const { t } = useTranslation()

  return (
    <div class="my-[100px]! mx-auto! flex items-center justify-between w-[90%]">
      <div class="basis-[40%] relative">
        <img src={about_image} alt="about" class="w-full rounded-[10px]"/>
        <img src={play_icon} alt="play" class="w-[60px] absolute top-1/2 left-1/2 transform-[translate(-50%, -50%)] cursor-pointer"/>
      </div>
      <div class="basis-[56%]">
        <h3 class="font-semibold text-base text-indigo-900">{ t("pages.dashboard.about.title") }</h3>
        <h2 class="text-4xl text-shadow-blue-950 my-2.5! mx-0! max-w-[400px]">{ t("pages.dashboard.about.subTitle") }</h2>
        <p class="mb-[15px]! text-gray-500">{ t("pages.dashboard.about.description1") }</p>
        <p class="mb-[15px]! text-gray-500">{ t("pages.dashboard.about.description2") }</p>
        <p class="mb-[15px]! text-gray-500">{ t("pages.dashboard.about.description3") }</p>
      </div>
    </div>
  )
}

export default About
