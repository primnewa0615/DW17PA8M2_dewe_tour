import React from 'react';
import Home from './page/Home';
import Detail from './page/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
      </Router>

    </div>
  );
}

export default App;
