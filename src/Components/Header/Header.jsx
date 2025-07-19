import React, { useState, useContext, useCallback } from 'react';
import { assets } from '../../assets/assets.js';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import BarsIcon from '../Bars Icon/BarsIcon.jsx';
import { AppContext } from '../../Context/AppContext';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const {
        userData,
        registrationStatus,
        setRegistrationStatus,
        darkMode,
        language,
        t
    } = useContext(AppContext);

    const links = [
        { text: 'HOME', url: '/' },
        { text: 'ALLDOCTORS', url: '/doctors' },
        { text: 'ABOUT', url: '/about' },
        { text: 'CONTACT', url: '/contact' },
    ];

    const profileDrop = [
        { text: 'My Profile', url: '/my-profile' },
        { text: 'My Appointments', url: '/my-appointment' },
        { text: 'Logout', url: '/' },
    ];

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
        if (isProfileDropdownOpen) {
            setIsProfileDropdownOpen(false);
        }
    }, [isProfileDropdownOpen]);

    const toggleProfileDropdown = useCallback(() => {
        setIsProfileDropdownOpen(prev => !prev);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobileMenuOpen]);

    const handleNavigation = useCallback((url) => {
        navigate(url);
        if (url === '/') {
            setRegistrationStatus(false);
        }
        setIsProfileDropdownOpen(false);
        setIsMobileMenuOpen(false);
    }, [navigate, setRegistrationStatus]);

    if (pathname === "/login") return null;

    return (
        <header className={`header ${darkMode === 'dark' ? 'dark-mode' : ''}`}>
            <div className='logo' onClick={() => handleNavigation('/')}>
                <img src={assets.logo} alt='logo' />
            </div>


            <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''} ${darkMode === 'dark' ? 'dark' : ''}`
                                }
                                onClick={() => handleNavigation(item.url)}
                            >
                                {t(item.text)}
                                <hr />
                            </NavLink>

                        </li>
                    ))}
                </ul>
            </nav>


            <div className='header-right'>
                {registrationStatus ? (
                    <div className='profile-section'>
                        <div
                            className='profile-trigger'
                            onClick={toggleProfileDropdown}
                        >
                            <img
                                src={userData.image || assets.default_profile}
                                alt='Profile'
                                className='profile-image'
                            />
                            <img
                                src={assets.dropdown_icon}
                                alt='Dropdown'
                                className={`dropdown-icon ${isProfileDropdownOpen ? 'rotate' : ''}`}
                            />
                        </div>

                        <div className={`dropdown-menu ${isProfileDropdownOpen ? 'open' : ''} ${darkMode === 'dark' ? 'dark' : ''}`}>
                            {profileDrop.map((item, index) => (
                                <div
                                    key={index}
                                    className='dropdown-item'
                                    onClick={() => handleNavigation(item.url)}
                                >
                                    {t(item.text)}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <button
                        className={`login-btn ${darkMode === 'dark' ? 'dark' : ''}`}
                        onClick={() => handleNavigation('/login')}
                    >
                        {t('Create account')}
                    </button>
                )}

                <div className='mobile-menu-btn' onClick={toggleMobileMenu}>
                    <BarsIcon isOpen={isMobileMenuOpen} />
                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);