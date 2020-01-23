import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Menu from './components/Menu';
import GradesList from './components/GradesList';
import Grade from './views/Grade'
import CertificatesList from './components/CertificatesList'
import Certificate from './views/Certificate'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Logout from './views/Logout'
import Profile from './views/Profile'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-one-quarter"><Menu /></div>
        <div className="column main-panel">
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/grades" exact component={GradesList} />
          <Route path="/grades/:id" exact component={Grade} />
          <Route path="/certificates" exact component={CertificatesList} />
          <Route path="/certificates/:id" exact component={Certificate} />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
