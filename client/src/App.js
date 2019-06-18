<<<<<<< HEAD
import React from "react";
import Results from "./components/Results";

function App() {
    return <Results />;
}

export default App;
=======
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
>>>>>>> 5474dab5bf1e700ee3782f7ff2e147d79dd191f7
