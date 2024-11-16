import React, { useContext } from 'react'
import './About.css';
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext';


const About = () => {
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);

    return (
        <section className={`about`}>
            <h2 className={`page-title ${darkMode == 'light' ? '' : 'dark-title'}`}>{t('ABOUT ')} <span className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('US')}</span></h2>
            <div className='welcomAbout'>
                {/* -------- left -------- */}
                <div className='img left'>
                    <img src={assets.about_image} alt='doctor' />
                </div>
                {/* -------- Right -------- */}
                <div className='aboutContent right'>
                    <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.')}</p>
                    <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you\'re booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.')}</p>
                    <h4>{t('Our Vision')}</h4>
                    <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.')}</p>
                </div>
            </div>
            <div className='chooseUs'>
                <h2 className={`page-title ${darkMode == 'light' ? '' : 'dark-title'}`}>{t('WHY CHOOSE')}<span className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}> {t('US')}</span></h2>
                <div className='chooseReasons'>
                    <div>
                        <h3 className={`${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t('EFFICIENCY:')}</h3>
                        <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Streamlined appointment scheduling that fits into your busy lifestyle.')}</p>
                    </div>
                    <div>
                        <h3 className={`${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t('CONVENIENCE:')}</h3>
                        <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Access to a network of trusted healthcare professionals in your area.')}</p>
                    </div>
                    <div>
                        <h3 className={`${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t('PERSONALIZATION:')}</h3>
                        <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Tailored recommendations and reminders to help you stay on top of your health.')}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
