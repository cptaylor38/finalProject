import React from 'react';
// import Home from './pages/Home/Home';
// import Search from './pages/Search/Search';
import Home from "./pages/Auth/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./privateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Home} />
          <Route exact path="/search/:zipcode" component={Search} />
          <Route component={Home} /> */}
          </Switch>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
