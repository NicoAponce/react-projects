import React from 'react';
import Person from './components/person/person';
import Header from './components/header/header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path={`/person`} component={Person}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
