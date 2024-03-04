import { combineReducers } from 'redux';

import GameReducer from './game_reducer';

export default combineReducers({
  game: GameReducer,
});
