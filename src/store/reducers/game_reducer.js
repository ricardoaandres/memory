import { types } from '../actions/game_actions';

const initialState = {
  cards: [],
  numberOfCards: 0,
  flippedPair: [],
  movements: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARDS:
      return { ...state, cards: action.cards };
    case types.FLIP_CARD:
      const cards = state.cards;
      let flippedPair = state.flippedPair;
      let movements;
      let slugs;

      if (flippedPair.length <= 2 && !flippedPair.includes(action.cardId)) {
        flippedPair.push(action.cardId);
        movements = state.movements + 1;
      }

      slugs = flippedPair.map(card => card.split('-')[0]);

      // if pairs match
      if (flippedPair.length === 2 && slugs[0] === slugs[1]) {
        cards.forEach((card) => {
          if (card.slug === slugs[0]) {
            card.flipped = true;
            flippedPair = [];
            movements = state.movements + 1;
          }
        });
      }

      if (flippedPair.length === 3) {
        flippedPair = [];
      }

      return { ...state, cards, flippedPair, movements };
    default:
      return initialState;
  }
};

export default gameReducer;
