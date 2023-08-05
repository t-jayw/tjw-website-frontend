import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ChronoLogPage from './pages/ChronoLogPage';
import ChronoLogPrivacyPage from './pages/ChronoLogPrivacyPage';
import ProjectList from './components/ProjectList';
import SiteHeader from './components/SiteHeader';
import DumbPhotoPage from './components/DumbPhotoPage';
import SiteFooter from './components/Footer';

function App() {
  return (
    <Router>

        <div className="container">

        <SiteHeader />


        <Routes>

          <Route path="/" element={<ProjectList />} />
          <Route path="/chronolog" element={<ChronoLogPage />} />
          <Route path="/chronolog_privacy_policy" element={<ChronoLogPrivacyPage />} />

          <Route path="/pass_image" element={<DumbPhotoPage />}/>

        </Routes>

        <SiteFooter />
      </div>

    </Router>

  );
}

export default App;
