import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import ContactUs from './components/ContactUs/ContactUs';
import StorePage from './components/Store/StorePage';
import Cart from './components/Store/Cart';
import About1 from './components/About/About1';
import Information from './components/Information/Information';
import Booking from './components/Booking/Booking';
import NewLicence from './components/Information/NewLicence/NewLicence'; 
import DrivingRules from './components/Information/DrivingRules/DrivingRules';
import DrivingInfo from './components/Information/DrivingInfo/DrivingInfo';
import SpecialLicenseInfo from './components/Information/SpecialLicenseInfo/SpecialLicenseInfo';
import RevenuLicence from './components/Information/RevenuLicence/RevenuLicence';
import HighwayOffenses from './components/Information/HighwayOffenses/HighwayOffenses';
import Expressway from './components/Information/Expressway/Expressway';
import ForeignLicence from './components/Information/ForeignLicence/ForeignLicence';
import OldLicence from './components/Information/OldLicence/OldLicence';
import Landing from './components/Landing/Landing';
import Assesment from './components/Information/Assesment/Assesment';
import Navbar from './components/Navbar/Navbar'; 
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from './ProtectedRoute';
import { Toaster } from "react-hot-toast";
import Profile from "./modules/Profile.jsx";
import Admin from "./modules/Admin.jsx";
import User from "./modules/User/User.jsx";
import Trainees from "./modules/Trainees/Trainees.jsx";
import Dashboard from "./modules/Dashboard.jsx";
import Trainings from "./modules/Training/Trainings.jsx";
import Trainers from "./modules/Trainers/Trainers.jsx";
import UserForm from "./modules/User/UserForm.jsx";
import TraineesAddForm from "./modules/Trainees/TraineesAddForm.jsx";
import TraineesUpdateForm from "./modules/Trainees/TraineesUpdateForm.jsx";
import TrainersAddForm from "./modules/Trainers/TrainersAddForm.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import PaymentSuccess from './components/Payment/PaymentSuccess.jsx';
import PaymentCancel from './components/Payment/PaymentCancel.jsx';

export const UserContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [user, setUser] = useState();
  const element = document.documentElement;

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Theme Management
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem("auth_user")) {
      setUser(JSON.parse(localStorage.getItem("auth_user")));
    }
  }, [theme]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Toaster position="top-right" />
      <Router>
        <div className="w-[100vw] h-[100vh] flex flex-col overflow-y-hidden">
        
        {/* Navbar remains fixed at the top */}
        <Navbar className=" z-50" theme={theme} setTheme={setTheme} />

        {/* Scrollable content area */}
        <div style={{ flex: 1, overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route
              path="/home"
              element={
                <>
                  <Hero theme={theme} setTheme={setTheme} />
                  <About />
                  <Services />
                </>
              }
            />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminRoutes><Admin /></AdminRoutes>}>
              <Route path="" element={<Dashboard />} />
              <Route path="user" element={<User />} />
              <Route path="user-add" element={<UserForm />} />
              <Route path="trainee" element={<Trainees />} />
              <Route path="trainee-add" element={<TraineesAddForm />} />
              <Route path="trainee-update/:username" element={<TraineesUpdateForm />} />
              <Route path="trainings" element={<Trainings />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="trainers-add" element={<TrainersAddForm />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/information" element={<Information />} />
            <Route path="/storepage" element={<StorePage />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/about1" element={<About1 />} />
            <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/newlicence" element={<NewLicence />} />
            <Route path="/drivingrules" element={<DrivingRules />} />
            <Route path="/drivinginfo" element={<DrivingInfo />} />
            <Route path="/speciallicenseinfo" element={<SpecialLicenseInfo />} />
            <Route path="/revenulicence" element={<RevenuLicence />} />
            <Route path="/highwayoffenses" element={<HighwayOffenses />} />
            <Route path="/expressway" element={<Expressway />} />
            <Route path="/foreignlicence" element={<ForeignLicence />} />
            <Route path="/oldlicence" element={<OldLicence />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/assesment" element={<Assesment />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/cancel" element={<PaymentCancel />} />
          </Routes>
        </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
