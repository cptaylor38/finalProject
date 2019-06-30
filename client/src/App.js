import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./privateRoute";

console.log('App.js');

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
