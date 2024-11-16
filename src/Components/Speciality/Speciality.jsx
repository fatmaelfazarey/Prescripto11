import React, { useContext } from 'react'
import { specialityData } from '../../assets/assets';
import './speciality.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const Speciality = () => {
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);
    return (
        <section id='speciality' className='p-top-bottom-100'>
            <h4 className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{t('Find by Speciality')}</ h4>
            <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.')}</p>
            <div className='specialityParent'>
                {specialityData.map((item, i) => (
                    <Link onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} key={i} to={`/doctors/${item.speciality}`}>
                        <img src={item.image} alt='' loading='lazy' />
                        <span className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t(item.speciality)}</span>
                    </Link>
                ))}
            </div>

        </section >
    )
}

export default Speciality
