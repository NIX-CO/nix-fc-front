import React from 'react';
import './App.css';
import OrganizationList from './components/organization/organization';
import CreateOrganization from './components/organization/create_organization';
import OrganizationDetails from './components/organization/organization_details';
import Nav from './components/base/nav';
import HOME from './components/base/home';
import OrganizationUpdate from './components/organization/organization_update';
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
          <Route path="/organization/create" element={<CreateOrganization />} />
          <Route path="/organization/:pk" element={<OrganizationDetails />} />
          <Route path="/organization/:pk/update" element={<OrganizationUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
