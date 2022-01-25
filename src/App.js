import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, Profile } from './components';
import './App.css';
import { HomeLayout } from './layouts';

function App() {
 
  return (
      <div className="App">
      <HomeLayout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </HomeLayout>
      </div>
  );
}

export default App;
