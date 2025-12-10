import React, { useState } from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import Button from '../button/Button'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [result, setResult] = useState("");
    const { t } = useTranslation()

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4a7c79e9-b6c3-4ed5-b668-b3f410f57d6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      event.target.reset();
    }
  };
  return (
    <div class="my-20! mx-auto! w-[90%] flex items-center justify-between">
        <div class="basis-[48%] text-gray-500">
            <h3 class="text-blue-950 font-medium text-2xl flex items-center mb-5!">{ t("pages.dashboard.contact.description1") } <img src={msg_icon} alt="" class="w-[35px] ml-2.5!"/></h3>
            <p class="max-w-[450px]">{ t("pages.dashboard.contact.description2") }</p>
            <ul>
                <li class="flex items-center my-5! mx-0!"><img src={mail_icon} alt="" class="w-6 mr-2.5!"/>{ t("pages.dashboard.contact.email") }</li>
                <li class="flex items-center my-5! mx-0!"><img src={phone_icon} alt="" class="w-6 mr-2.5!"/>{ t("pages.dashboard.contact.phone") }</li>
                <li class="flex items-center my-5! mx-0!"><img src={location_icon} alt="" class="w-6 mr-2.5!"/>{ t("pages.dashboard.contact.address") }</li>
            </ul>
        </div>
        <div class="basis-[48%] text-gray-500">
            <form onSubmit={onSubmit}>
                <label>{ t("pages.dashboard.contact.form.name") }</label>
                <input type="text" name='name' class="block w-full bg-indigo-100 p-3.5! border-0 outline-none mb-3.5! mt-1! resize-none" placeholder='Enter your name' required/>
                <label>{ t("pages.dashboard.contact.form.phoneNumber") }</label>
                <input type="tel" name='phone' class="block w-full bg-indigo-100 p-3.5! border-0 outline-none mb-3.5! mt-1! resize-none" placeholder='Enter your mobile number' required/>
                <label>{ t("pages.dashboard.contact.form.message") }</label>
                <textarea name="message"class="block w-full bg-indigo-100 p-3.5! border-0 outline-none mb-3.5! mt-1! resize-none" rows="6" placeholder="Enter your message" required></textarea>
                <Button text={ t("pages.dashboard.contact.form.button") } style="dark" icon={white_arrow} />
            </form>
            <span class="block my-5! mx-0!">{result}</span>
        </div>      
    </div>
  )
}

export default Contact
