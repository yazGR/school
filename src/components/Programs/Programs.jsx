import React from 'react'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { useTranslation } from 'react-i18next'

const Programs = () => {
    const { t } = useTranslation()

  return (
    <div class="my-20! mx-auto! flex items-center justify-between">
        <div class="group  basis-[31%] relative ">
            <img src={program_1} alt="" class="w-full rounded-[10px]! block"/>
            <div class="rounded-[10px] absolute top-0 bottom-0 left-0 right-0 bg-blue-950 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%]! delay-[0.4s] group-hover:opacity-[1] group-hover:pt-0!">
                <img src={program_icon_1} alt=""  class="w-[60px] mb-2.5!"/>
                <p>{ t("pages.dashboard.programs.graduation") }</p>
            </div>
        </div>
        <div class="group  basis-[31%] relative ">
            <img src={program_2} alt="" class="w-full rounded-[10px]! block"/>
            <div class="rounded-[10px] absolute top-0 bottom-0 left-0 right-0 bg-blue-950 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%]! delay-[0.4s] group-hover:opacity-[1] group-hover:pt-0!">
                <img src={program_icon_2} class="w-[60px] mb-2.5!" />
                <p>{ t("pages.dashboard.programs.master") }</p>
            </div>
        </div>
        <div class="group  basis-[31%] relative">
            <img src={program_3} alt="" class="w-full rounded-[10px]! block"/>
            <div class="rounded-[10px] absolute top-0 bottom-0 left-0 right-0 bg-blue-950 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%]! delay-[0.4s] group-hover:opacity-[1] group-hover:pt-0!">
                <img src={program_icon_3} class="w-[60px] mb-2.5!" />
                <p>{ t("pages.dashboard.programs.postGraduation") }</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
