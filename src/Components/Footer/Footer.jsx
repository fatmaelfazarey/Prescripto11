import React, { useContext } from 'react'
import './Footer.css'
import { assets, company, getInTouch } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { AppContext } from '../../Context/AppContext.jsx';

const Footer = () => {
    const { pathname } = useLocation();
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);

    // console.log(pathname);
    if (pathname === "/login") return null;
    return (
        <footer className='footer p-child-rigt-left-20-w100'>
            <div className='links p-top-bottom-100 '>
                <div className='firstDiv'>
                    <div className='logo'>
                        <img src={assets.logo} alt='logo' loading='lazy' />
                    </div>
                    <p className={`section-subTitle text ${darkMode == 'light' ? '' : 'dark-sub-title'}`}> {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')} </p>
                </div>
                <div className='Link-Col'>
                    <p className={`section-title ${darkMode == 'light' ? '' : 'dark-title'}`}>{t('COMPANY')}</p>
                    {
                        company.map((item, i) => (
                            <Link to={item.url} className={`section-subTitle text ${darkMode == 'light' ? '' : 'dark-sub-title'}`} key={i} target='blank'>{t(item.title)}</Link>
                        ))
                    }
                </div>
                <div className='Link-Col'>
                    <p className={`section-title ${darkMode == 'light' ? '' : 'dark-title'}`}>{t('GET IN TOUCH')}</p>
                    {
                        getInTouch.map((item, i) => (
                            <Link to={item.url} className={`section-subTitle text ${darkMode == 'light' ? '' : 'dark-sub-title'}`} key={i} target='blank'>{t(item.title)}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <hr />
                <p className={`text section-subTitle copyRight ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Copyright')} &copy; 2024 GreatStack - {t('All Right Reserved')} - fatmamohamed</p>
            </div>
        </footer>
    )
}

export default Footer
