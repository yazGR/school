import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import Button from '../button/Button'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

  return (
    <nav class={`pl-[10%]! pr-[10%]! w-full text-white py-1! px-0! fixed top-0 left-0 flex items-center justify-between z-10 ${sticky ? 'delay-500 bg-indigo-500' : ''}`}>
      <img src={logo} alt="Logo" class="w-[180px]"/>
      <ul>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="program" smooth={true} offset={0} duration={500}>Program</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="about" smooth={true} offset={0} duration={500}>About us</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="campus" smooth={true} offset={0} duration={500}>Campus</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Button text="Contact us" /></li>
      </ul>
    </nav>
  )
}

export default Navbar
