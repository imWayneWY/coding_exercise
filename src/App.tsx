import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import CommunitiesList from './pages/CommunitiesList'
import Index from './pages/Index'
import './App.css'
import Readme from './pages/Readme'

function App() {
  return (
    <Router>
      <div className='banner'>
        <Link to='/'><img className='logo' src='OPENHOUSE-ai-logo.png' alt='logo'/></Link>
      </div>
      <Switch>
        <Route path='/communities' component={CommunitiesList} />
        <Route path='/readme' component={Readme} />
        <Route component={Index} />
      </Switch>
      <div className='footer'>
        <strong>WeiYan</strong>
        <span>E-Mail: <a href="mailto:imweiyan@foxmail.com">im.weiyan@foxmail.com</a></span>
        <span>Tel: <a href="tel: 587-439-8687">587-439-8687</a></span>
      </div>
    </Router>
  );
}

export default App
