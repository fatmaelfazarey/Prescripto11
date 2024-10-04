import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css';
import BarsIcon from '../Bars Icon/BarsIcon.jsx';

const Header = () => {
    const [checkWidthState, setCheckWidthState] = useState(true);
    const [registrationStatus, setRegistrationStatus] = useState(true);
    const [checkDropdown, setCheckDropdown] = useState(true);
    const navigate = useNavigate();

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
        } else {
            setCheckWidthState(true);
            header.setAttribute("style", "overflow:visible;");
            links.setAttribute("style", "transform:translateX(110%);");
        }

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

    return (
        <header className='header'>
            <div className='logo' onClick={() => navigate('/')}>
                <img src={assets.logo} alt='logo' />
            </div>
            <div className='links'>
                <ul>
                    {
                        links.map((item, i) => (
                            <NavLink key={i} to={item.url}>
                                <li> {item.text} </li>
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

                            <img src={assets.profile_pic} alt='profile image' className='profileImg' />
                            <img src={assets.dropdown_icon} alt='dropdown' className='profileDropdown' onClick={() => ShowdropDown()} />
                            <ul className='dropDown'>
                                {
                                    profileDrop.map((item, i) => (
                                        <li key={i} onClick={() => handelNavigate(item.url)}  > {item.text} </li>
                                    ))
                                }
                            </ul>

                            <div className='bar' onClick={() => showLinks()}>
                                <BarsIcon />
                            </div>
                        </>
                        : <>
                            <button onClick={() => navigate('/login')}>Create acount</button>
                            <div className='bar' onClick={() => showLinks()}>
                                <BarsIcon />
                            </div>
                        </>
                }

            </div>
        </header>
    )
}

export default Header
