import React from 'react';
import Home from './page/Home';
import Detail from './page/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageProfile from './page/PageProfile';
import WaitingPayment from './page/WaitingPayment';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={PageProfile} />
        <Route exact path="/waitingPayment" component={WaitingPayment} />
      </Router>

    </div>
  );
}

export default App;
