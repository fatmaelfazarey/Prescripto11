import React from 'react'
import { specialityData } from '../../assets/assets';
import './speciality.css'
import { Link } from 'react-router-dom';

const Speciality = () => {
    return (
        <section id='speciality' className='p-top-bottom-100'>
            <h4 className='section-title'>Find by Speciality</ h4>
            <p className='section-subTitle '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='specialityParent'>
                {specialityData.map((item, i) => (
                    <Link onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} key={i} to={`/doctors/${item.speciality}`}>
                        <img src={item.image} alt='' />
                        <span className='section-subTitle '>{item.speciality}</span>
                    </Link>
                ))}
            </div>

        </section >
    )
}

export default Speciality
