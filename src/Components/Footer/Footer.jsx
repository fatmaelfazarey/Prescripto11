import React from 'react'
import './Footer.css'
import { assets, company, getInTouch } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer p-child-rigt-left-20-w100'>
            <div className='links p-top-bottom-100 '>
                <div className='firstDiv'>
                    <div className='logo'>
                        <img src={assets.logo} alt='logo' loading='lazy'/>
                    </div>
                    <p className='text section-subTitle'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='Link-Col'>
                    <p className='section-title'>COMPANY</p>
                    {
                        company.map((item, i) => (
                            <Link to={item.url} className='text section-subTitle' key={i} target='blank'>{item.title}</Link>
                        ))
                    }
                </div>
                <div className='Link-Col'>
                    <p className='section-title'>GET IN TOUCH</p>
                    {
                        getInTouch.map((item, i) => (
                            <Link to={item.url} className='text section-subTitle' key={i} target='blank'>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <hr />
                <p className='text section-subTitle copyRight'>Copyright &copy; 2024 GreatStack - All Right Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer
