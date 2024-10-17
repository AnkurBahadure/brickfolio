import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Home from './Components/Home';
import HeadingSection from './Components/HeadingSection';

// Placeholder Components for Routes
const Landing = () => <h1 className="text-center mt-10">Home Page</h1>;
const Login = () => <h1 className="text-center mt-10">Login Page</h1>;
const Shortlist = () => <h1 className="text-center mt-10">Shortlist Page</h1>;
const NotFound = () => <h1 className="text-center mt-10">404 - Not Found</h1>;

const App = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <Navbar />
      <Filter />
      <HeadingSection />
      <Home />
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shortlist" element={<Shortlist />} />
        {/* Handle 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
