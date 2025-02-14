import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const routes = (
  <Router>
      <Routes>
        <Route path="/"  exact element={<Dashboard />} />
        <Route path="/login" exact element={<Login />} />
        <Route path= "/signup" exact element= {<Signup />} />
      </Routes>
    </Router>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
