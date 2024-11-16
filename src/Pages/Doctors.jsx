import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { specialityData } from '../assets/assets';
import { AppContext } from '../Context/AppContext';
import '../Components/Top Doctors/TopDoctors.css';

const Doctors = () => {
    const { speciality } = useParams();
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [filterDocs, setFilterDocs] = useState([]);
    const { darkMode } = useContext(AppContext);
    const { t } = useContext(AppContext);

    function handleFilterDocs() {
        if (speciality) {
            setFilterDocs(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDocs(doctors);
        }
    }

    useEffect(() => {
        handleFilterDocs();

        let allSpeciality = document.getElementsByClassName('showFilterSpeci')[0].children;
        for (let ele of allSpeciality) {
            ele.style.backgroundColor = "transparent";
        }
        let active = document.getElementById(speciality);
        if (active) {
            active.style.backgroundColor = "rgb(226 229 255)";
        }
        else {
            let all = document.getElementById('all');
            all.style.backgroundColor = "rgb(226 229 255)";
        }

    }, [speciality, doctors])

    function showSpeciality() {
        const filter = document.getElementsByClassName('filter')[0];
        const showFilterSpeci = document.getElementsByClassName('showFilterSpeci')[0];

        if (filter.hasAttribute('style')) {
            filter.removeAttribute('style');
            showFilterSpeci.removeAttribute('style');
        } else {
            filter.setAttribute("style", "background-color:var(--primary);color:white;");
            showFilterSpeci.setAttribute("style", "display:flex;");
        }
    }
    return (
        <section className='allDoctorsPage'>
            <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('Browse through the doctors specialist.')}</p>
            <div className='allDoctors'>

                {/* -----------Left--------------- */}
                <div className='left'>
                    <span className='section-subTitle filter' onClick={() => showSpeciality()}>{t('Filter')}</span>
                    <div className='showFilterSpeci'>
                        <Link to={`/doctors`} id='all' onClick={() => showSpeciality()}>
                            <span className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t('All')}</span>
                        </Link>
                        {specialityData.map((item, i) => (
                            <Link key={i} to={`/doctors/${item.speciality}`} id={item.speciality} onClick={() => showSpeciality()}>
                                <span className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t(item.speciality)}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* -----------Right--------------- */}
                <div className='grid-5 right'>
                    {
                        filterDocs.map((item, i) => (
                            <div key={i} className='eachDoctor' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate(`/appointment/${item._id}`); }} >
                                <img src={item.image} alt='' loading='lazy' />
                                <div className='doctorInfo'>
                                    <div className='areAvailable'>
                                        <p className='circle'></p>
                                        <p>{t('Available')}</p>
                                    </div>
                                    <p className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{item.name}</p>
                                    <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{t(item.speciality)}</p>

                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    )
}

export default Doctors
