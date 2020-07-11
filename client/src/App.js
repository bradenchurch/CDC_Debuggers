import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './components/home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Navbar from './shared/Navbar';
// import NoMatch from './components/shared/NoMatch';
import FetchUser from './auth/FetchUser';

import ProtectedRoute from './auth/ProtectedRoute';



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
