import React from 'react'

const Button = ({ icon, text, style = "default" }) => {
    const backgroundColor = style === "dark" ? "bg-blue-950" : "bg-white"
    const color = style === "dark" ? "text-white" : "text-black"
  return (
     <button class={`py-3.5! px-[25px]! text-base rounded-3xl cursor-pointer border-0 outline-0 inline-flex items-center justify-center ${backgroundColor} ${color}`}>{text} {icon && <img src={icon} alt="Arrow" class="w-5 ml-2.5!"/>}</button>
  )
}

export default Button
