import React, { useContext, useRef } from 'react'
import './MyAppointment.css';
import { AppContext } from '../../Context/AppContext';
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyAppointment = () => {
    const { appointmentWithDocId } = useContext(AppContext);
    const cancelRef = useRef([]);
    const payRef = useRef([]);
    const payWayStripeRef = useRef([]);
    const payWayRazorpayRef = useRef([]);
    let appointmentLen = appointmentWithDocId.length;
    const { darkMode } = useContext(AppContext);

    const formattedDate = (dayNumber) => {
        const date = new Date();
        date.setDate(dayNumber.match(/\d+/)[0]);
        const options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    }

    const showPayWays = (index) => {
        if (payRef.current[index] && payWayStripeRef.current[index] && payWayRazorpayRef.current[index]) {
            payRef.current[index].setAttribute('style', "display:none");
            let displayBlock = "display:block";
            payWayStripeRef.current[index].setAttribute('style', displayBlock);
            payWayRazorpayRef.current[index].setAttribute('style', displayBlock);
        }
    }

    const HideAllButtons = (index) => {
        if (cancelRef.current[index] && payWayStripeRef.current[index] && payWayRazorpayRef.current[index] && payRef.current[index]) {
            cancelRef.current[index].setAttribute('style', 'background-color: white; color: rgb(239 68 68)!important; border:1px solid rgb(239 68 68);');
            if (darkMode !== 'light') {
                cancelRef.current[index].setAttribute('style', 'background-color: transparent ; color: rgb(239 68 68)!important; border:1px solid rgb(239 68 68); ');
            }
            let displayNone = "display:none";
            payWayStripeRef.current[index].setAttribute('style', displayNone);
            payWayRazorpayRef.current[index].setAttribute('style', displayNone);
            payRef.current[index].setAttribute('style', displayNone);
        }
    }

    return (

        <section className='myAppointment'>
            <p className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}> My appointments</p>
            <hr />
            {
                appointmentLen ?
                    <div className='appointment'>
                        {
                            appointmentWithDocId.map((ele, i) => (
                                <div key={i}>
                                    <div className='eachAppointment'>
                                        <div className='imgAndDetails'>
                                            <div className='img'>
                                                <img src={ele.image} alt="doctor Image" />
                                            </div>
                                            <div className='appointmentDetails'>
                                                <h4 className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{ele.name}</h4>
                                                <p className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{ele.speciality}</p>
                                                <h6 className={`address ${darkMode == 'light' ? '' : 'dark-section-title'}`} >Address:</h6>
                                                <p className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{ele.address.line1}</p>
                                                <p className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>{ele.address.line2}</p>
                                                <p className={`date ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Date & Time: <span className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{formattedDate(ele.date)}</span> | <span className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{ele.time.toUpperCase()}</span></p>
                                            </div>
                                        </div>
                                        <div className='btns'>
                                            <button ref={(el) => (payWayStripeRef.current[i] = el)} onClick={() => { toast.info('In the next update') }} className='payWay'><img src={assets.stripe_logo} alt='' /></button>
                                            <button ref={(el) => (payWayRazorpayRef.current[i] = el)} onClick={() => { toast.info('In the next update') }} className='payWay'><img src={assets.razorpay_logo} alt='' /></button>
                                            <button ref={(el) => (payRef.current[i] = el)}
                                                onClick={() => showPayWays(i)}
                                                className={`pay ${darkMode == 'light' ? '' : 'dark-sub-title'}`} >Pay Online</button>
                                            <button ref={(el) => (cancelRef.current[i] = el)}
                                                onClick={() => HideAllButtons(i)}
                                                className={`cancel ${darkMode == 'light' ? '' : 'dark-sub-title'}`} >Cancel appointment</button>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                    :
                    <figure className='noAppointment'>
                        <img src={assets.notFound} alt='not found' />
                        <figcaption className={`section-subTitle ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>No Appointment...</figcaption>
                    </figure>

            }
        </section>

    )
}

export default MyAppointment
