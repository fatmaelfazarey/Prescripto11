import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import About from './Pages/About Us/About'
import Contact from './Pages/Contact'
import Login from './Pages/Registration/Login'
import MyProfile from './Pages/MyProfile/MyProfile'
import MyAppointment from './Pages/My Appointment/MyAppointment'
import Appointment from './Pages/Appointment'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AppContextProvider from './Context/AppContext';
import { AppContext } from './Context/AppContext'
// import HII from './Pages/HII';
import Translation from './Translation/Translation';
import i18n from "i18next";

function App() {

  // change Mode
  const { darkMode } = useContext(AppContext);
  useEffect(() => {
    if (darkMode == 'light') {
      document.body.style.backgroundColor = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = "var(--dark-bg)";
    }
  }, [darkMode])


  // Change Language
  const { language } = useContext(AppContext);
  useEffect(() => {
    i18n.changeLanguage(language);
    window.document.dir = i18n.dir();
  }, [language]);

  return (
    <div className={`container`}>
      <Router>
        <AppContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:speciality' element={<Doctors />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/my-appointment' element={<MyAppointment />} />
            <Route path='/appointment/:doctorId' element={<Appointment />} />
            {/* <Route path='/hii' element={<HII />} /> */}
            <Route path='/translation' element={<Translation />} />
          </Routes>
          <Footer />
        </AppContextProvider>
      </Router>



    </div>
  );
}

export default App;
