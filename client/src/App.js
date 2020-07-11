import React from 'react';
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

export default App;
