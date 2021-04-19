import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path='/'>
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
