import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page1B from './components/pag1b';

var history = createBrowserHistory();

history.listen(function (location) {
  console.log('change history')
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router forceRefresh>
          <div>
            <ul>
              <li>
                <Link to="page2">Page 2</Link>
              </li>
              <li>
                <Link to="/page3">Page 3</Link> 
              </li>
            </ul>

            <hr />
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page1-b" component={Page1B} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
