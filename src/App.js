import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Questions from './components/Questions';
function App() {

 
  return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route path='/signup'>
                  <SignUp />
              </Route>
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
              <Route path='/questions'>
                  <Questions />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
