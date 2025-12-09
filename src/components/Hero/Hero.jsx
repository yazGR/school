import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import Button from '../button/Button'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div class="w-full min-h-screen bg-linear-to-t from-sky-500 to-indigo-500 bg-cover bg-center text-white flex items-center justify-center pl-[10%]! pr-[10%]!">
      <div class="text-center max-w-[800px]">
        <h1 class="text-[60px] font-extrabold">{ t("pages.dashboard.hero.title") }</h1>
        <p class="max-w-[700px] mx-auto! mt-2.5! mb-5!">{ t("pages.dashboard.hero.description") }</p>
        <Button text={ t("pages.dashboard.hero.button") } icon={dark_arrow} />
      </div>
    </div>
  )
}

export default Hero
