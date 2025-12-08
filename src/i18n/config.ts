import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es.json'
import en from './en.json'
import fr from './fr.json'


i18n.use(initReactI18next)
    .init({
        lng: 'fr',
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en', 'es'],
        interpolation:{
            escapeValue: false
        },
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            },
            fr: {
                translation: fr
            },
        }
    });

export default i18n;