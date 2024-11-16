import React, { useEffect, useContext } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { AppContext } from '../Context/AppContext';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({

        fallbackLng: "en",
        detection: {
            order: ['localStorage', 'htmlTag', 'cookie', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/Translation.json'
        }

    });

export default function Translation() {
    // const { language } = useContext(AppContext);
    // // const { t } = useContext(AppContext);
    // // const { t } = useTranslation();

    // useEffect(() => {
    //     i18n.changeLanguage(language);
    //     window.document.dir = i18n.dir();
    // }, [language])

    // return <h2>{t('Welcome to React')}</h2>;
}
