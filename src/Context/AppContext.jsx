import { createContext, useState } from "react";
import { doctors } from "../assets/assets";  // the value you want to share with ather component
import { assets } from "../assets/assets";
import { useLocalStorage } from 'usehooks-ts';
import { useTranslation } from "react-i18next";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';

    const [userData, setUserData] = useState({
        name: 'Fatma Mohamed',
        image: assets.upload_area,
        email: 'fatmamohamed58001@gmail.com',
        phone: '+201156267730',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Church Road, London'
        },
        gender: 'Female',
        dob: '2001-11-11'
    });
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const [appointmentWithDocId, setAppointmentWithDocId] = useState([{
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: assets.doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        time: '11:00 am',
        date: 'SUN27'
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: assets.doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        time: '11:00 am',
        date: 'SUN27'
    }]);
    const [darkMode, setDarkMode] = useLocalStorage('mode', 'light');

    const [language, setLanguage] = useLocalStorage('language', 'en');
    const { t } = useTranslation();
    // const [language, setLanguage] = useLocalStorage('language', 'en');
    const value = {
        doctors,
        currencySymbol,
        userData,
        setUserData,
        registrationStatus,
        setRegistrationStatus,
        appointmentWithDocId,
        setAppointmentWithDocId,
        darkMode,
        setDarkMode,
        language,
        setLanguage,
        t


    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;