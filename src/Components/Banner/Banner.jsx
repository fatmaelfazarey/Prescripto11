import React from 'react'
import './Banner.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'


const Banner = () => {
    const navigate = useNavigate();
    return (
        <section className='Banner p-top-bottom-100 p-child-rigt-left-20-w100'>
            <div className='banner-content  p-top-bottom-100  p-child-rigt-left-20-w100 '>
                <div className='left'>
                    <p>Book Appointment With 100+ Trusted Doctors</p>
                    {/* <h1>Book Appointment With 100+ Trusted Doctors</h1> */}
                    <button onClick={() => { navigate('/login'); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>Create acount</button>
                </div>
                <div className='right'>
                    <img src={assets.appointment_img} alt='' loading='lazy'/>
                </div>
            </div>
        </section >
    )
}
export default Banner
