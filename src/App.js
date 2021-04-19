import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharactersPage from './pages/CharactersPage'
import store from './redux/createStore';
import {fetchCharacters} from './redux/reducers/characters'

import 'antd/dist/antd.css';
import './App.css';

store.dispatch(fetchCharacters)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Route exact path='/'>
            <CharactersPage />
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
