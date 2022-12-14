import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Questions from './components/Questions';
import { useAuthContext } from './hooks/useAuthContext'
import NotFound from './components/NotFound';
import { useOnAuthStateChanged } from './hooks/useOnAuthStateChanged'

function App() {

 const { user } = useOnAuthStateChanged()

  const { authIsReady } = useAuthContext()
 
  return (
        <div className="App">
          {authIsReady && (
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <Login />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/dashboard'>
                  {user && <Dashboard />}
                  {!user && <Redirect to='/'/>}
                </Route>
                <Route path='/questions'>  
                  {user && <Questions /> }
                  {!user && <Redirect to='/'/>}
                </Route>
                <Route path='*'>
                  <NotFound />
                </Route>
              </Switch>
            </BrowserRouter>
          )}
        </div>
  );
}

export default App;
