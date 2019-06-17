import React from 'react';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:zipcode" component={Search} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
