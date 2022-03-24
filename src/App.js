import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/homeScreen/HomeScreen';
import SigninScreen from './components/signinScreen/SigninScreen';
import ProfileScreen from './components/profileScreen/ProfileScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user)
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (<SigninScreen />) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
