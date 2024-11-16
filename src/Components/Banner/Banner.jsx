import React, { useContext } from 'react'
import './Banner.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext.jsx';


const Banner = () => {
    const navigate = useNavigate();
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);
    const { language } = useContext(AppContext);

    return (
        <section className='Banner p-top-bottom-100 p-child-rigt-left-20-w100'>
            <div className='banner-content p-top-bottom-100 p-child-rigt-left-20-w100 '>
                <div className='left'>
                    <p className={`${darkMode == 'light' ? '' : 'light-title'}`}>{t('Book Appointment With 100+ Trusted Doctors')}</p>
                    {/* <h1>Book Appointment With 100+ Trusted Doctors</h1> */}
                    <button onClick={() => { navigate('/login'); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={`${darkMode == 'light' ? '' : ' dark-section-title dark-window'}`}>{t('Create acount')}</button>
                </div>
                <div className={`right ${language == 'ar' ? 'imgRight' : 'rightEn'}`}>
                    <img src={assets.appointment_img} alt='' loading='lazy' className={`${language == 'ar' ? 'imgRTL' : ''}`} />
                </div>
            </div>
        </section >
    )
}
export default Banner
