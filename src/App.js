import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharactersPage from './pages/CharactersPage'
import EditPage from './pages/EditPage'
import store from './redux/createStore';
import {fetchCharacters} from './redux/reducers/characters'

import './App.css';

store.dispatch(fetchCharacters)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
        <Switch>
            <Route exact path='/'>
              <CharactersPage />
            </Route>
            <Route path='/edit'>
              <EditPage/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
