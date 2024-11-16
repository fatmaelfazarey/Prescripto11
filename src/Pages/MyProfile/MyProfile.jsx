import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets';
import './MyProfile.css';
import { AppContext } from '../../Context/AppContext';

// import { useLocalStorage } from 'usehooks-ts'


const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const { userData } = useContext(AppContext);
    const { setUserData } = useContext(AppContext);
    const { darkMode } = useContext(AppContext);
    const { setDarkMode } = useContext(AppContext);
    // const { language } = useContext(AppContext);
    const { setLanguage } = useContext(AppContext);
    const { language } = useContext(AppContext);
    // const [language, setLanguage] = useLocalStorage('language', 'en');


    //#region 
    // const [userData, setUserData] = useState({
    //     name: 'Fatma Mohamed',
    //     image: assets.profile_pic,
    //     email: 'fatmamohamed58001@gmail.com',
    //     phone: '+201156267730',
    //     address: {
    //         line1: '57th Cross, Richmond',
    //         line2: 'Circle, Church Road, London'
    //     },
    //     gender: 'Female',
    //     dob: '2001-11-11'
    // });
    //#endregion
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUserData(prev => ({ ...prev, image: imageUrl }));
        }
    }
    console.log(darkMode)

    return (


        <section className={`profile`}>
            <div>
                {
                    isEdit ?
                        <>
                            <div id='uploadImg'>
                                <label htmlFor="upload-input">
                                    <img src={userData.image || assets.upload_area} alt="Click to upload" style={{ cursor: 'pointer' }} min-width='150' min-height='150' max-width='200' />
                                </label>
                                <input
                                    id="upload-input"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                            </div>
                        </> :
                        <div >
                            <img src={userData.image || assets.upload_area} alt='user image' min-width='150' min-height='150' max-width='200' />

                        </div>

                }
            </div>
            {
                isEdit ? <input className={`name ${darkMode == 'light' ? '' : 'dark-title dark-window'}`} style={{ fontSize: '25px' }} type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <h2 className={`name ${darkMode == 'light' ? '' : 'dark-title'}`} >{userData.name}</h2>
            }
            <hr />

            <div>
                <u className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>CONTACT INFORMATION</u>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Email id:</p>
                    <p className={`linkText ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{userData.email}</p>
                </div>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Phone:</p>
                    {isEdit ?
                        <input className='linkText' type='phone' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                        : <p className='linkText'>{userData.phone}</p>
                    }
                </div>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Address:</p>
                    {isEdit ?
                        <div>
                            <input className='address' type='text' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} /><br />
                            <input className='address' type='text' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                        </div>
                        : <div>
                            <p className={`address ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{userData.address.line1}</p>
                            <p className={`address ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{userData.address.line2}</p>
                        </div>
                    }
                </div>
            </div>
            <div>
                <u className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>BASIC INFORMATION</u>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Gender:</p>
                    {isEdit ?
                        <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Engineer'>Engineer</option>
                        </select>
                        : <p className={`address ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{userData.gender}</p>
                    }
                </div>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Birthday:</p>
                    {isEdit ?
                        <input type='date' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                        : <p className={`address ${darkMode == 'light' ? '' : 'dark-section-title'}`}>{userData.dob}</p>
                    }
                </div>
            </div>
            <div>
                <u className={` ${darkMode == 'light' ? '' : 'dark-sub-title'}`}>Settings</u>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Language:</p>
                    <select onChange={(e) => { setLanguage(e.target.value); }} className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>

                        {
                            language === 'en' ?
                                <>
                                    <option value='en' selected >English</option>
                                    <option value='ar' >العربي</option>
                                </> :
                                <>
                                    <option value='en'  >English</option>
                                    <option value='ar' selected >العربي</option>
                                </>

                        }

                    </select>
                </div>
                <div className='flex'>
                    <p className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Dark Mode:</p>
                    <div className={`modeIcon ${darkMode == 'light' ? '' : 'modeIcon-clicked'}`} onClick={() => setDarkMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))}></div>
                </div>
            </div>
            <div className='btns'>
                {isEdit ? <button onClick={() => setIsEdit(false)} className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Save Information</button> : <button onClick={() => setIsEdit(true)} className={` ${darkMode == 'light' ? '' : 'dark-section-title'}`}>Edit</button>
                }

            </div>

        </section >



    );
}




export default MyProfile
