import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import Button from '../button/Button'

const Campus = () => {
  return (
    <div class="my-[100px]! mx-auto! text-center">
        <div class="flex items-center justify-between mb-10!" >
            <img src={gallery_1} alt="Campus 1" class="w-[23%] rounded-xl" />
            <img src={gallery_2} alt="Campus 2" class="w-[23%] rounded-xl"/>
            <img src={gallery_3} alt="Campus 3" class="w-[23%] rounded-xl"/>
            <img src={gallery_4} alt="Campus 4" class="w-[23%] rounded-xl"/>
        </div>
        <Button text="See more here" style="dark" icon={white_arrow} />
    </div>
  )
}

export default Campus
