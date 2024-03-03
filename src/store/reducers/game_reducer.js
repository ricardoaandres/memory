import { types } from '../actions/game_actions';

const initialState = {
  cards: [],
  numberOfCards: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARDS:
      return { ...state, cards: action.cards };
    default:
      return initialState;
  }
};

export default gameReducer;
