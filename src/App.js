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
      <div className='footer'>
        <strong>WeiYan</strong>
        <span>E-Mail: <a href="mailto:imweiyan@foxmail.com">im.weiyan@foxmail.com</a></span>
        <span>Tel: <a href="tel: 587-439-8687">587-439-8687</a></span>
      </div>
    </Router>
  );
}

export default App;
