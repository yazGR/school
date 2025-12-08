import React, { useEffect, useState } from 'react'
import logo from '../../assets/icon-multiservicios-white.png'
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next'
import Button from '../button/Button'
import i18next from "i18next"

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const { t } = useTranslation()

    const languages = [
    { value: "en", text: t("navbar.lang.en") },
    { value: "es", text: t("navbar.lang.es") },
    { value: "fr", text: t("navbar.lang.fr") },
];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);
    const handleChange = (e) => {
        console.log(e.target.value);
        i18next.changeLanguage(e.target.value);
    }

  return (
    <nav class={`pl-[10%]! pr-[10%]! w-full text-white py-1! px-0! fixed top-0 left-0 flex items-center justify-between z-10 ${sticky ? 'delay-500 bg-indigo-500' : ''}`}>
      <img src={logo} alt="Logo" class="w-[50px]"/>
      <ul>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="hero" smooth={true} offset={0} duration={500}>{ t("navbar.home") }</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="program" smooth={true} offset={0} duration={500}>{ t("navbar.ourSevices") }</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="about" smooth={true} offset={0} duration={500}>{ t("navbar.aboutUs") }</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Link to="testimonials" smooth={true} offset={0} duration={500}>{ t("navbar.testimonials") }</Link></li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none">
          <select class="block w-full px-3! py-2! bg-white text-indigo-900 text-heading text-sm border-none rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" value={i18next.language} onChange={handleChange}>
                {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>
                    );
                })}
            </select>
        </li>
        <li class="my-[5px]! mx-5! inline-block text-base list-none"><Button text={ t("navbar.contactUs") } /></li>
      </ul>
    </nav>
  )
}

export default Navbar
