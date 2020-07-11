import React from 'react';
<<<<<<< HEAD
import Home from './components/home/Home';
import {Route, Switch} from 'react-router-dom';
import Navbar from './shared/Navbar';

function App() {
  return(
<>

<Switch>
  <Route exact path='/' component={Home} />
</Switch>
</>
  )
}
=======
import { Switch, Route } from 'react-router-dom';
// import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';

import ProtectedRoute from './components/auth/ProtectedRoute';
>>>>>>> 2ac3b0ad6dd7ce91f39c833f19def8e37e330888



const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route exact path='/Feed' component={Feed} /> */}
        {/* <ProtectedRoute exact path='/profile' component={Profile} /> */}
        {/* <ProtectedRoute exact path='/collection' component={Collection} /> */}
        {/* <ProtectedRoute exact path='/dash' component={Dash} /> */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </FetchUser>
  </>
)
export default App;
