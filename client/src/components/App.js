import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import Login from './Login';
import ControlPanel from './ControlPanel';
import CreateManagers from './CreateManagers';
import CreateProperties from './CreateProperties';
import Calendar from './Calendar';
import Calendars from './Calendars';
import Layout from './Layout';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/controlPanel">Control Panel</Link></li>
        <li><Link to="/createManagers">Create Managers</Link></li>
        <li><Link to="/createProperties">Create Properties</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/calendars">Calendars</Link></li>

      </ul>


      <hr />
      <div>
        <Route exact path="/" component={Login} large={true} />
        <Route path="/controlPanel" component={ControlPanel} />
        <Route path="/createManagers" component={CreateManagers} />
        <Route path="/createProperties" component={CreateProperties} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/calendars" component={Calendars} />
      </div>
    </div>
  </Router>
)


export default App