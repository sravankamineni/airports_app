
import React, {useState} from 'react';
import {Route, Routes,useNavigate } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AirPortsList from './components/AirPortsList';
import AirportDetails from './components/AirportDetails';

import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('AIRPORTS'); 
  const navigate = useNavigate();
  const handleSidebarClick = (section) => {
    setActiveSection(section);
    if (section === 'AIRPORTS') {
      navigate('/'); // Navigate to the airport list
    } else {
      navigate(`/${section.toLowerCase().replace(/\s+/g, '-')}`); // Navigate to a placeholder path
    }
  };

  return (
    <Provider theme={defaultTheme}>
      {/* <Router> */}
        <div className="app-container">
          <Navbar />
          <div className="main-container">
            <Sidebar onClick={handleSidebarClick}/>
            <div className="content-container">
              <Routes>
              <Route path="/" element={activeSection === 'AIRPORTS' ? <AirPortsList /> : <h1>Working in progress</h1>} />
              <Route path="/airport/:id" element={<AirportDetails />} />
              <Route path="/home" element={<h1>Working in progress</h1>} />
              <Route path="/dashboard-services" element={<h1>Working in progress</h1>} />
              <Route path="/videos" element={<h1>Working in progress</h1>} />
              <Route path="/others" element={<h1>Working in progress</h1>} />
               
              </Routes>
            </div>
          </div>
        </div>
      {/* </Router> */}
  
    </Provider>
  );
};

export default App;
