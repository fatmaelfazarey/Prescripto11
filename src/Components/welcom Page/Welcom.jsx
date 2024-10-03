import React from 'react'
import './Welcom.css';
import { assets } from '../../assets/assets.js'

const Welcom = () => {
    return (
        <section className='home'>
            <div className='welcom'>
                {/* ----------- Left ---------- */}
                <div className='left'>
                    <h3>Book Appointment With Trusted Doctors</h3>
                    <div className='flexImgText'>
                        <div className='imgs'>
                            <img src={assets.group_img_3} alt="" />
                            <img src={assets.group_img_1} alt="" />
                            <img src={assets.group_img_2} alt="" />
                        </div>
                        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <a href='#speciality'>
                        <button>Book appointment<img src={assets.arrow_icon} alt='' /></button>
                    </a>


                </div>
                {/* ----------- Right ---------- */}
                <div className='right'>
                    <img src={assets.header_img} alt='Doctors' />
                </div>

            </div>

        </section>
    )
}

export default Welcom
