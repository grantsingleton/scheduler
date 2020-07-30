import React from 'react'
import Button from 'react-bootstrap/Button'
import Navigation from './Components/Navigation/Navigation'
import Schedule from './Components/Pages/Schedule'
import Landing from './Components/Pages/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/schedule' component={Schedule} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
