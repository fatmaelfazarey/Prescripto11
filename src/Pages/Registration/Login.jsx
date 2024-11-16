import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const Login = () => {
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    const { setRegistrationStatus } = useContext(AppContext);
    const { darkMode } = useContext(AppContext);

    return (
        <section className='Registration'>
            <form action='' method='' onSubmit={() => { login ? navigate('/') : navigate('/my-profile'); setRegistrationStatus(true); }}>
                {
                    login ?
                        <>
                            <h3 className={`title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Login</h3>
                            <p className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Please login to book appointment</p>
                        </>
                        :
                        <>
                            <h3 className={`title ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Create Account</h3>
                            <p className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Please sign up to book appointment</p>
                            <div>
                                <label htmlFor='name' className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Full Name</label>
                                <input required id='name' type='text' />
                            </div>
                        </>
                }
                <div>
                    <label htmlFor='email' className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Email</label>
                    <input required id='email' type='email' />
                </div>
                <div>
                    <label htmlFor='password' className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Password</label>
                    <input required id='password' type='password' />
                </div>

                <input type='submit' value={login ? "Login" : "Create account"} />
                {
                    login ?
                        <p className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Don't have an account? <u className='link' onClick={() => setLogin(!login)}>Create account</u></p> :
                        <p className={`${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Already have an account? <u className='link' onClick={() => setLogin(!login)}>Login here</u></p>


                }
            </form>
        </section>
    )
}

export default Login
