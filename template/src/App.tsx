import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import { NavLinkButton } from './components/';
import { Dashboard } from './containers';

function App() {
  return (
    <div className="app">
      <nav className="app__navigation"></nav>
      <main className="app__body">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;

// <Router>
//   <Switch>
//     <NavLink to="/">Link</NavLink>
//     <NavLinkButton to="/">Link</NavLinkButton>
//     <Route path="/" component={} />
//   </Switch>
// </Router>;
