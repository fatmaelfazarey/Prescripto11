import React, { useContext } from 'react';
import './About Us/About.css';
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext';

const Contact = () => {
    const { darkMode } = useContext(AppContext);
    return (
        <section className='contact about'>
            <h2 className={`page-title ${darkMode == 'light' ? '' : 'dark-title'}`} >Contact <span className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>US</span></h2>
            <div className='welcomAbout'>
                {/* -------- left -------- */}
                <div className='img left'>
                    <img src={assets.contact_image} alt='client' />
                </div>
                {/* -------- Right -------- */}
                <div className='contactRight'>
                    <h4 className={`${darkMode == 'light' ? '' : 'dark-section-title'}`} >OUR OFFICE</h4>
                    <div className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>
                        <p>00000 Willms Station</p>
                        <p>Suite 000, Washington, USA</p>
                    </div>

                    <div className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>
                        <p>Tel: (000) 000-0000</p>
                        <p>Email: greatstackdev@gmail.com</p>
                    </div>
                    <h4 className={`${darkMode == 'light' ? '' : 'dark-section-title'}`}>CAREERS AT PRESCRIPTO</h4>
                    <p className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Learn more about our teams and job openings.</p>
                    <button className='explore'>Explore Jobs</button>

                </div>
            </div>
        </section>
    )
}

export default Contact
