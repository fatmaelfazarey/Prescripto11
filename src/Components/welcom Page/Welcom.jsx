import React, { useContext, useEffect, useState } from 'react'
import './Welcom.css';
import { assets } from '../../assets/assets.js'
import { AppContext } from '../../Context/AppContext.jsx';
// import { useTranslation } from 'react-i18next';
// import i18n from "i18next";
// <h2>{t('Welcome to React')}</h2>;
const Welcom = () => {
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);
    const { language } = useContext(AppContext);
    return (
        <section className='home'>
            <div className='welcom'>
                {/* ----------- Left ---------- */}
                <div className='left'>
                    {/* <p>{t('welcome')}</p> */}
                    <h3 className={`${darkMode == 'light' ? '' : 'light-title'}`}>{t('Book Appointment With Trusted Doctors')}</h3>
                    <div className='flexImgText'>
                        <div className='imgs'>
                            <img src={assets.group_img_3} alt="" loading='lazy' />
                            <img src={assets.group_img_1} alt="" loading='lazy' />
                            <img src={assets.group_img_2} alt="" loading='lazy' />
                        </div>
                        <p className={`${darkMode == 'light' ? '' : 'light-sub-title'}`}>{t('Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.')}</p>
                    </div>
                    <a href='#speciality'>
                        <button className={`${darkMode == 'light' ? '' : ' dark-section-title dark-window'}`} >{t('Book appointment')}</button>
                        {/* <button className={`${darkMode == 'light' ? '' : ' dark-section-title dark-window'}`} >{t('Book appointment')}<img src={assets.arrow_icon} alt='' loading='lazy' /></button> */}
                    </a>


                </div>
                {/* ----------- Right ---------- */}
                <div className={`right ${language == 'ar' ? 'leftRLT' : 'rightRLT'}`}>
                    <img src={assets.header_img} alt='Doctors' loading='lazy' />
                </div>

            </div>

        </section>
    )
}

export default Welcom
