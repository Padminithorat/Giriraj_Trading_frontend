// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Statistics from './components/Statistics';
import AppHero from './components/hero';
import ReviewSlider from './components/ReviewSlider';
import AppWorks from './components/services';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

import SignInPage from './components/SIgnInpage';
import SignUpPage from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import UserProfile from './components/UserProfile';

import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

import MainComponent from './components/MainCompoent';



import Wiremesh from './components/Wiremesh';
import ConcealLock from './components/ConcealLock';
import WoolPipe from './components/WoolPipe';
import SlidingWindowRoller from './components/SlidingWindowRoller';
import Louvers from './components/Louvers';
import PvcGasket from './components/PvcGasket';
import DomalAccessories from './components/DomalAccessories';
import SiliconeSealant from './components/SiliconeSealant';
import Frictionstay from './components/Frictionstay';
import FloorSpringDoorCloser from './components/FloorSpringDoorCloser';
import AcrylicFoamTapeSpacerTape from './components/AcrylicFoamTapeSpacerTape';
import FiberBidding from './components/FiberBidding';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage/>} />
          <Route path="/signin" element={<SignInFormPage/>} />
          <Route path="/signup" element={<SignUpFormPage/>} />
         
          {/* <Route path="/profile" component={<ProfileInfoPage/>} /> */}



          <Route path="/userinfo" element={<MainComponentpage/>} />
          <Route path="/aboutus" element={<AboutPage/>} />
          <Route path="/services" element={<AppWorks/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/reviews" element={<ReviewSlider/>} />

          <Route path="/wiremesh" element={<WiremeshPage />} />
          <Route path='/conceal_lock' element={<ConcealLockPage/>}/>
          <Route path='/wool_pipe' element={<WoolPipePage/>}/>
          <Route path='/sliding_window_roller' element={<SlidingWindowRollerPage/>}/>
          <Route path='/louvers' element={<LouversPage/>}/>
          <Route path='/pvc_gasket' element={<PvcGasketPage/>}/>
          <Route path='/domal_accessories' element={<DomalAccessoriesPage/>}/>
          <Route path='/silicone_sealant' element={<SiliconeSealantPage/>}/>
          <Route path='/friction_stay' element={<FrictionstayPage/>}/>
          <Route path='/floor_spring_&_door_closer' element={<FloorSpringDoorCloserPage/>}/>
          <Route path='/Acrylic_Foam_Tape_&_Spacer_Tape' element={<AcrylicFoamTapeSpacerTapePage/>}/>
          <Route path='/Fiber_Bidding' element={<FiberBiddingPage/>}/>
          

          <Route path='/terms_and_conditions' element={<TermsConditionsPage/>}/>
          <Route path='/privacy_policy' element={<PrivacyPolicyPage/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <HeroImage />
    <About />
    <Statistics />
    <AppHero />
    <ReviewSlider />
    <AppWorks />
    <ContactForm />
  </>
);


const AboutPage = () => (
  <>
   
    <About />
    <Statistics />
    <AppHero />
  </>
);




const SignInFormPage = () =>(
  <>
  <SignInPage/>
  </>
  );



  const SignUpFormPage = () =>(
    <>
    <SignUpPage/>
    </>
    );


const ForgotPasswordPage = () =>(
<>
<ForgotPassword/>
</>
);


  
const MainComponentpage =()=>(
<>
<MainComponent/>
</>
);

const WiremeshPage = () => (
  <>
    <Wiremesh />
  </>
);


const TermsConditionsPage = () => (
<>
<TermsConditions/>
</>
);


const PrivacyPolicyPage = () => (
  <>
  <PrivacyPolicy/>
  </>
  );

const ConcealLockPage = () => (
  <>
    <ConcealLock />
  </>
);

const WoolPipePage = () => (
  <>
    <WoolPipe />
  </>
);

const SlidingWindowRollerPage = () => (
<>
<SlidingWindowRoller/>
</>
);


const LouversPage = () => (
  <>
  <Louvers/>
  </>
  );
  

  const PvcGasketPage = () => (
    <>
    <PvcGasket/>
    </>
    );


    

  const DomalAccessoriesPage = () => (
    <>
      <DomalAccessories/>
      </>
      );
  
  const SiliconeSealantPage = () => (
    <>
    <SiliconeSealant/>
    </>
  );


  const FrictionstayPage = () => (
    <>
      <Frictionstay/>
      </>
      );
    
      const FloorSpringDoorCloserPage = () => (
        <>
          <FloorSpringDoorCloser/>
          </>
          );

          const AcrylicFoamTapeSpacerTapePage = () => (
            <>
              <AcrylicFoamTapeSpacerTape/>
              </>
              );

              const FiberBiddingPage = () => (
                <>
                  <FiberBidding/>
                  </>
                  );
export default App;
