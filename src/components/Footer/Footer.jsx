import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div class="my-2.5! mx-auto! flex items-center justify-between border-t border-solid border-gray-500 py-3.5! px-0!">
      <p>{ t("pages.dashboard.footer.rightsReserved") }</p>
      <ul>
        <li class="list-none inline-block ml-5!">{ t("pages.dashboard.footer.termsServices") }</li>
        <li class="list-none inline-block ml-5!">{ t("pages.dashboard.footer.privacyPolicy") }</li>
      </ul>
    </div>
  )
}

export default Footer
