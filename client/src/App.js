import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import FacilityData from './components/facility/FacilityData';
import Inspector from './components/inspector/Inspector';
import ProtectedRoute from './components/auth/ProtectedRoute';




const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/Feed' component={Feed} /> */}
        <ProtectedRoute exact path='/facility' component={FacilityData} />
        <ProtectedRoute exact path='/inspector' component={Inspector} />
        {/* <ProtectedRoute exact path='/dash' component={Dash} /> */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/inspector' component={Inspector} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)
export default App;
