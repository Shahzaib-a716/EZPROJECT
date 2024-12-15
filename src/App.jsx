// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'; // Your main page component
import Home from './Components/Home'; // Your next page component
import FreeRegistration1 from './Components/FreeRegistration1';
import Flag1 from './Components/Flag1';
import LookAround from './Components/LookAround.jsx';
import Registration2 from './Components/Registration2'; // Import Registration component
import RegistrationForm31 from './Components/RegistrationForm31';
import EmailNotRecognized from './Components/EmailNotRecognized';
import SavedEmail from './Components/SavedEmail';
import Virtual2 from './Components/Virtual2';
import Proof from './Components/Proof';
import ContactUs from './Components/ContactUs';
import VBEnd from './Components/VBEnd';
import i18n from './Components/i18n.jsx';
import Calculator from './Components/Calculator';
import Callback from './Components/Callback';
import VirtualPage from './Components/VirtualPage';
import TradePerson from './Components/TradePerson';
import Enter from './Components/Enter';
import Unrecognized from './Components/Unrecognized';
import Enter1 from './Components/Enter1';
import SalutationPage from './Components/SalutationPage';
import StepComponent from './Components/StepComponent';
import Apartment from './Components/Apartment';
import Step2 from './Components/Step2';
import Emergency from './Components/Emergency';
import VirtualHouse from './Components/VirtualHouse';
import Parking from './Components/Parking';
import Booking from './Components/Booking';
import Step1 from './Components/Step1';
import EmergencyPage from './Components/EmergencyPage';
import ServiceSelection from './Components/ServiceSelection';
import WaitingList from './Components/WaitingList';
import Estimate from './Components/Estimate';
import LesWork from './Components/LesWork';
import VideoReference from './Components/VideoReference';
import LESTHEHANDYMAN from './Components/LESTHEHANDYMAN';
import Page1 from './Components/Page1';
import Page2 from './Components/Paage2.jsx';
import Paage4 from './Components/Paage4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page9 from './Components/Page9';
import Page16 from './Components/Page16';

import Page3 from './Components/Page3';
import NewTradePerson from './Components/NewTradePerson';
import Add from './Components/Add';
import Add1 from './Components/Add1';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Main page */}
        <Route path="/Home" element={<Home />} /> {/* Navigating to Home component */}
        <Route path="/FreeRegistration1" element={<FreeRegistration1 />} />
        <Route path="/Flag1" element={<Flag1 />}/>
        <Route path="/LookAround" element={<LookAround />}/> {/* Add FreeRegistration route */}
        <Route path="/Registration2" element={<Registration2 />} /> {/* Add Registration route */}
        <Route path="/RegistrationForm31" element={<RegistrationForm31 />} /> 
          {/* Email Not Recognized page */}
          <Route path="/EmailNotRecognized" element={<EmailNotRecognized />} />
          <Route path="/SavedEmail" element={<SavedEmail />} />
          <Route path="/Virtual2" element={<Virtual2/>} />
          <Route path="/Proof" element={<Proof />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/VBEnd" element={<VBEnd />}/>
          <Route path="/i18n" element={<i18n />}/>
          <Route path="/Calculator" element={<Calculator />}/>
          <Route path="/Callback" element={<Callback />}/>
          <Route path="/VirtualPage" element={<VirtualPage/>}/>
          <Route path="/TradePerson" element={<TradePerson/>}/>
          <Route path="/Enter" element={<Enter/>}/>
          <Route path="/Unrecognized" element={<Unrecognized/>}/>
          <Route path="/Enter1" element={<Enter1/>}/>
          <Route path="/SalutationPage" element={<SalutationPage/>}/>
          <Route path="StepComponent" element={<StepComponent/>}/>
          <Route path="Apartment" element={<Apartment/>}/>
          <Route path="Step2" element={<Step2/>}/>
          <Route path="Emergency" element={<Emergency/>}/>
          <Route path="/VirtualHouse" element={<VirtualHouse/>}/>
          <Route path="/Parking" element={<Parking/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="Step1" element={<Step1/>}/>
          <Route path="EmergencyPage" element={<EmergencyPage/>}/>
          <Route path="ServiceSelection" element={<ServiceSelection/>}/>
      
          <Route path="Estimate" element={<Estimate/>}/>
          
          <Route path="WaitingList" element={<WaitingList/>}/>
          <Route path="LesWork" element={<LesWork/>}/>
          <Route path="VideoReference" element={<VideoReference/>}/>
          <Route path="LESTHEHANDYMAN" element={<LESTHEHANDYMAN/>}/>
          <Route path="Page1" element={<Page1/>}/>
          <Route path="Page3" element={<Page3/>}/>
          <Route path="/NewTradePerson" element={<NewTradePerson/>}/>
          <Route path="Add" element={<Add/>}/>
          <Route path="Add1" element={<Add1/>}/>
          <Route path="Page2" element={<Page2/>}/>
          <Route path="Page4" element={<Page4/>}/>
          <Route path="Page5" element={<Page5/>}/>
          <Route path="Page6" element={<Page6/>}/>
          <Route path="Page9" element={<Page9/>}/>
          <Route path="Page16" element={<Page16/>}/>



   </Routes>
    </Router> 
     );
}

export default App;

