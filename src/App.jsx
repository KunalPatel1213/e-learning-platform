import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PaperDetail from './pages/PaperDetail';
import Benifit from './pages/Benifit';
import Footer from './pages/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route, useLocation } from "react-router-dom";
import Comminity from './pages/Comminity';

const App = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
    window.addEventListener('storage', loadUser);
    return () => window.removeEventListener('storage', loadUser);
  }, []);
 
  if (location.pathname === "/register") {
    return (
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
  if (location.pathname === '/login'){
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }

  return (
    <div>
      {/* <Navbar user={user} />
      <Home />
      <About />
      <PaperDetail />
      <Benifit />
      <Footer /> */}

      <Comminity/>
    </div>
  );
};

export default App;