import React from 'react';
import './App.css';
import OrganizationList from './components/organization/organization';
import Nav from './components/base/nav';
import HOME from './components/base/home';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './components/assets/assets/bootstrap/css/bootstrap.min.css';
import './components/assets/assets/css/styles.css'
import './components/assets/assets/css/baguetteBox.min.css'
import './components/assets/assets/css/aos.min.css'
import './components/assets/assets/fonts/font-awesome.min.css'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<HOME />} />
          <Route path="/organization" element={<OrganizationList />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
