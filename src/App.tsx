import React from 'react';
import logo from './logo.svg';
import HomePage from './screens/HomePage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={HomePage} />
    </Router>
  );
}

export default App;
