import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import '../Top Doctors/TopDoctors.css';

const RelatedDocs = ({ speciality, doctorId }) => {
    const { doctors } = useContext(AppContext);
    const [RelatedDocs, setRelatedDocs] = useState([]);
    const navigate = useNavigate();
    const { darkMode } = useContext(AppContext);

    useEffect(() => {
        if (doctors.length && speciality && doctorId) {
            setRelatedDocs(doctors.filter(doc => doc.speciality === speciality && doc._id !== doctorId));
        }
    }, [speciality, doctors, doctorId]);

    return (
        <section className='relatedDocs '>
            <h4 className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Related Doctors</ h4>
            <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Simply browse through our extensive list of trusted doctors.</p>
            <div className=' grid-5'>
                {
                    RelatedDocs.slice(0, 5).map((item, i) => (
                        <div key={i} className='eachDoctor' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate(`/appointment/${item._id}`); }} >
                            <img src={item.image} alt='' loading='lazy' />
                            <div className='doctorInfo'>
                                <div className='areAvailable'>
                                    <p className='circle'></p>
                                    <p>Available</p>
                                </div><p className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{item.name}</p>
                                <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{item.speciality}</p>

                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default RelatedDocs
