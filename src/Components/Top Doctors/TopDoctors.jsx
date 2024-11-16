import React, { useContext, useState } from 'react'
import './TopDoctors.css'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);
    return (

        <section className='p-top-bottom-100 topDoctors' >
            <h4 className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t('Top Doctors to Book')}</ h4>
            <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Simply browse through our extensive list of trusted doctors.')}</p>
            <div className='grid-5 p-child-rigt-left-20-w100'>
                {
                    doctors.slice(0, 10).map((item, i) => (
                        <div key={i} className='eachDoctor' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate(`/appointment/${item._id}`); }}>
                            <img src={item.image} alt='' loading='lazy' />
                            <div className='doctorInfo'>
                                <div className='areAvailable'>
                                    <p className='circle'></p>
                                    <p>{t('Available')}</p>
                                </div>
                                <p className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t(item.name)}</p>
                                <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t(item.speciality)}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <button onClick={() => { navigate('/doctors'); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className={`${darkMode == 'light' ? '' : 'dark-window dark-sub-title'}`}>{t('See More')}</button>
        </section >
    )
}

export default TopDoctors
