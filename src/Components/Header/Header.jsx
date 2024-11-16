import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets.js'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Header.css';
import BarsIcon from '../Bars Icon/BarsIcon.jsx';
import { AppContext } from '../../Context/AppContext';


// import { AppContext } from './Context/AppContext';
// import { image } from '../../Pages/MyProfile/MyProfile.jsx';

const Header = () => {
    const [checkWidthState, setCheckWidthState] = useState(true);
    // const [registrationStatus, setRegistrationStatus] = useState(true);
    const [checkDropdown, setCheckDropdown] = useState(true);
    const navigate = useNavigate();
    const { userData } = useContext(AppContext);
    const { registrationStatus } = useContext(AppContext);
    const { setRegistrationStatus } = useContext(AppContext);
    const [iconState, setIconState] = useState(true);
    const { darkMode } = useContext(AppContext);
    const { pathname } = useLocation();
    const { language } = useContext(AppContext);
    const { t } = useContext(AppContext);

    const links = [
        {
            text: 'HOME',
            url: '/',
        },
        {
            text: 'ALLDOCTORS',
            url: '/doctors',
        },
        {
            text: 'ABOUT',
            url: '/about',
        },
        {
            text: 'CONTACT',
            url: '/contact',
        },
    ]
    const profileDrop = [
        {
            text: 'My Profile',
            url: '/my-profile',
        },
        {
            text: 'My Appointments',
            url: '/my-appointment',
        },
        {
            text: 'Logout',
            url: '/',
        },

    ]

    function showLinks() {
        let header = document.getElementsByClassName('header')[0];
        let links = document.getElementsByClassName('links')[0];

        if (!checkDropdown) {
            ShowdropDown();
        }
        if (checkWidthState) {
            setCheckWidthState(false);
            header.setAttribute("style", "overflow:visible;");
            links.setAttribute("style", "transform:translateX(0);");
            document.getElementById('dropDown').setAttribute("style", "display:none;");
        } else {
            setCheckWidthState(true);
            header.setAttribute("style", "overflow:visible;");
            links.setAttribute("style", "transform:translateX(110%);");
            document.getElementById('dropDown').setAttribute("style", "display:flex;");
        }
        // setIconState(true);

    }
    function handelNavigate(url) {
        navigate(url);
        if (url === '/') setRegistrationStatus(false);
        ShowdropDown();

    }
    function ShowdropDown() {
        let dropDown = document.getElementsByClassName('dropDown')[0];
        let profileDropdown = document.getElementsByClassName('profileDropdown')[0];

        if (!checkWidthState) {
            showLinks();
        }

        if (checkDropdown) {
            setCheckDropdown(false);
            dropDown.setAttribute("style", "height:95px;padding:10px;");
            profileDropdown.setAttribute('style', 'transform: rotate(180deg);')
        } else {
            setCheckDropdown(true);
            dropDown.setAttribute("style", "height:0px;padding:0px;");
            profileDropdown.setAttribute('style', 'transform: rotate(0deg);');
        }

    }

    // console.log(pathname);
    if (pathname === "/login") return null;
    return (
        <header className='header'>
            <div className='logo' onClick={() => navigate('/')}>
                <img src={assets.logo} alt='logo' />
            </div>
            <div className={`links ${darkMode == 'light' ? '' : 'dark-bg'}`}>
                <ul>
                    {/* {t('Book Appointment With Trusted Doctors')} */}
                    {
                        links.map((item, i) => (
                            <NavLink className={`${darkMode == 'light' ? '' : 'dark-title'}`} key={i} to={item.url} onClick={() => { setIconState(!iconState); showLinks(); }} >
                                <li>{t(item.text)}</li>
                                <hr />
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
            <div className='res'>
                {
                    registrationStatus ?
                        <>
                            <div onClick={() => ShowdropDown()} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px'
                            }} id='dropDown'>
                                <img src={userData.image} alt='profile image' className='profileImg' />
                                <img src={assets.dropdown_icon} alt='dropdown' className='profileDropdown' />
                            </div>
                            <ul className={`dropDown ${darkMode == 'light' ? '' : 'dark-window dark-section-title'} ${language == 'ar' ? 'leftH' : 'rightH'}`}>
                                {
                                    profileDrop.map((item, i) => (
                                        <li key={i} onClick={() => handelNavigate(item.url)}> {t(item.text)} </li>
                                    ))
                                }
                            </ul>
                            <div className='bar' onClick={() => showLinks()}>
                                <BarsIcon close={iconState} />
                            </div>
                        </>
                        : <>
                            <button onClick={() => navigate('/login')} className={`${darkMode == 'light' ? '' : 'light-title'}`}>{t('Create acount')}</button>
                            <div className='bar' onClick={() => { showLinks(); }}>
                                <BarsIcon close={iconState} />
                            </div>
                        </>
                }

            </div>
        </header >
    )
}

export default Header
