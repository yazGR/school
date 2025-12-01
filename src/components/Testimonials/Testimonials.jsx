import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
        if(tx > -50){
            tx -= 25
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div class="my-20! mx-auto! py-0! px-20! relative">
      <img src={next_icon} alt="Next" class="absolute top-[50%] right-0 transform -translate-y-1/2 p-[15px]! w-[50px] rounded-[50%] cursor-pointer bg-blue-800" onClick={slideForward}/>
      <img src={back_icon} alt="Back" class="absolute top-[50%] transform -translate-y-1/2 p-[15px]! w-[50px] rounded-[50%] cursor-pointer bg-blue-800 right-auto left-0" onClick={slideBackward}/>
      <div class="overflow-hidden">
        <ul ref={slider} class="flex w-[200%] overflow-x-hidden duration-500">
            <li class="list-none w-[50%] p-5!">
                <div class="shadow-lg p-10! rounded-[10px] text-gray-500 leading-[1.4]">
                    <div class="flex items-center mt-5! text-sm">
                        <img src={user_1} alt="" class="w-[65px] rounded-[50%] mr-2.5! border-4 border-solid border-blue-900"/>
                        <div>
                            <h3 class="text-blue-800">William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li class="list-none w-[50%] p-5!">
                <div class="shadow-lg p-10! rounded-[10px] text-gray-500 leading-[1.4]">
                    <div class="flex items-center mt-5! text-sm">
                        <img src={user_2} alt="" class="w-[65px] rounded-[50%] mr-2.5! border-4 border-solid border-blue-900"/>
                        <div>
                            <h3 class="text-blue-800">William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li class="list-none w-[50%] p-5!">
                <div class="shadow-lg p-10! rounded-[10px] text-gray-500 leading-[1.4]">
                    <div class="flex items-center mt-5! text-sm">
                        <img src={user_3} alt="" class="w-[65px] rounded-[50%] mr-2.5! border-4 border-solid border-blue-900"/>
                        <div>
                            <h3 class="text-blue-800">William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li class="list-none w-[50%] p-5!">
                <div class="shadow-lg p-10! rounded-[10px] text-gray-500 leading-[1.4]">
                    <div class="flex items-center mt-5! text-sm">
                        <img src={user_4} alt="" class="w-[65px] rounded-[50%] mr-2.5! border-4 border-solid border-blue-900"/>
                        <div>
                            <h3 class="text-blue-800">William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials
