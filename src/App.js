import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CommunitiesList from './pages/CommunitiesList';
import './App.css';

function App() {
  return (
    <Router>
      <div className='banner'>
        <img className='logo' src='OPENHOUSE-ai-logo.png' alt='logo'/>
      </div>
      <Switch>
        <Route component={CommunitiesList} />
      </Switch>
    </Router>
  );
}

export default App;
