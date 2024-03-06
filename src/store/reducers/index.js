import { combineReducers } from 'redux';

import GameReducer from './game_reducer';
import UserReducer from './user_reducer';

export default combineReducers({
  game: GameReducer,
  user: UserReducer,
});
