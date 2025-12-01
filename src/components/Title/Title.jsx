import React from 'react'
import './Title.css'

const Title = ({ subTitle, title }) => {
  return (
    <div class="text-center text-blue-900 text-base font-semibold uppercase mx-0! mt-[70px]! mb-[30px]!" >
        <p>{subTitle}</p>
        <h2 class="text-3xl text-blue-950 mt-[5px]! normal-case">{title}</h2>
    </div>
  )
}

export default Title
