import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

export default function BasicExample() {
  return (
    <Router>
      <Route path="/" component= { Home}></Route>
    </Router>
    
  );
}

