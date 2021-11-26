import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
     <Router>
      <Navbar title="Employee" />
      <Switch>
          <Route exact path="/Login">
           <Login/>
          </Route>          
          <Route exact path="/SignUp">
           <SignUp />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
