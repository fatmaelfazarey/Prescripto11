import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import { useParams, Link, useNavigate } from 'react-router-dom'
import './DocWithId.css'
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RelatedDocs from './RelatedDocs';

const DocWithId = () => {
    const { doctorId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const [doctor, setDoctor] = useState({});
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState();
    const navigate = useNavigate();
    const { registrationStatus } = useContext(AppContext);
    const { setAppointmentWithDocId } = useContext(AppContext);
    const { darkMode } = useContext(AppContext);

    function getDoctor() {
        // setDoctor(doctors.filter(doc => doc._id === doctorId));
        setDoctor(doctors.find(doc => doc._id === doctorId));
    }

    const getAvilableSlots = async () => {
        setDocSlots([]);
        // getting current date
        let today = new Date();
        for (let i = 0; i < 7; i++) {
            // gating date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            let dateAndDate = { name: currentDate.toLocaleDateString(undefined, { weekday: 'short' }).toUpperCase(), date: currentDate.getDate() };

            // setting end time of the date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                // add slot to array 
                timeSlots.push({
                    // datetime: new Date(currentDate),
                    dayName: dateAndDate.name,
                    dayDate: dateAndDate.date,
                    time: formattedTime

                })
                // increment currentDate time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    function saveNewApp() {
        let dataAndTime = document.getElementsByClassName('active');
        if (dataAndTime.length !== 2) {
            toast.warn('You must make an appointment');
            return '';
        }
        if (registrationStatus) {
            toast.success('Appointment Booked');
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setAppointmentWithDocId(e => [...e, {
                _id: doctor.id,
                name: doctor.name,
                image: doctor.image,
                speciality: doctor.speciality,
                fees: doctor.fees,
                address: doctor.address,
                time: dataAndTime[1].textContent,
                date: dataAndTime[0].textContent
            }])
            navigate('/my-appointment');
        } else {
            toast.warn('You must be logged in to book an appointment');
            navigate('/login');
        }
    }

    useEffect(() => {
        getDoctor();
    }, [doctorId, doctors])

    useEffect(() => {
        getAvilableSlots();
    }, [doctor])

    //  return doctor && ( ) if doctor id not found its no error will show header and footer

    return doctor && (
        <>
            <section className='docWithId'>
                <div className='image'>
                    <img src={doctor.image} alt='person' />
                </div>
                <div className='docContent'>
                    <div className='docInfo'>
                        <div className='flex-text-img'>
                            <p className={`section-title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{doctor.name}</p>
                            <img src={assets.verified_icon} />
                        </div>
                        <div className={`docExp section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>
                            <p>{doctor.degree}-{doctor.speciality}</p>
                            <p className={`exp ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{doctor.experience}</p>
                        </div>
                        <div className={`app flex-text-img ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>
                            <p>About</p>
                            <img src={assets.info_icon} alt='' width='13px' />
                        </div>
                        <p className={`section-subTitle aboutContect ${darkMode == 'light' ? '' : 'dark-sub-title'}`} >{doctor.about}</p>
                        <p className={`section-subTitle app ${darkMode == 'light' ? '' : 'dark-sub-title'}`} >Appointment fee : <span>{currencySymbol}{doctor.fees}</span></p>
                    </div>
                    <div className={`booking ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>
                        <p>Booking Slots</p>
                        <div className='days'>
                            {docSlots.length && docSlots.map((ele, index) => (
                                <div onClick={() => setSlotIndex(index)} className={`dateDay ${index === slotIndex ? 'active' : ''} ${darkMode == 'light' ? '' : 'dark-title'}`} key={index} >
                                    <p>{ele[0].dayName}</p>
                                    <p >{ele[0].dayDate}</p>
                                </div >
                            ))}
                        </div>
                        <div className='times'>
                            {docSlots.length && docSlots[slotIndex].map((ele, index) => (
                                <p onClick={() => setSlotTime(index)} className={`${index === slotTime ? 'active' : ''} ${darkMode == 'light' ? '' : 'dark-title'}`} key={index}>{ele.time.toLowerCase()}</p>
                            ))}
                        </div>
                        <button className={`saveAppo ${darkMode == 'light' ? '' : 'light-title'}`} onClick={() => saveNewApp()}>Book an appointment</button>
                        <ToastContainer />
                    </div>
                </div>
            </section>
            <RelatedDocs speciality={doctor.speciality} doctorId={doctorId} />
        </>

    )
}


export default DocWithId
