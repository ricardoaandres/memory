import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import reducers from './reducers';

const getState = () => {
  // return localStorage.getItem('memory-store') ? JSON.parse(localStorage.getItem('memory-store')) : {};
};

const persistedState = getState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  const stateToBeSaved = { user: state.user };

  localStorage.setItem('memory-store', JSON.stringify(stateToBeSaved));
});

export default store;
