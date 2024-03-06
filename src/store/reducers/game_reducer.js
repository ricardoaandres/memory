import { types } from '../actions/game_actions';

const initialState = {
  cards: [],
  numberOfCards: 0,
  flippedPair: [],
  movements: 0,
  matches: 0,
  mismatches: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARDS:
      return { ...state, cards: action.cards };
    case types.FLIP_CARD:
      const cards = state.cards;
      let { flippedPair, movements, matches, mismatches } = state;
      let slugs;

      // if flipping cards
      if (flippedPair.length <= 2 && !flippedPair.includes(action.cardId)) {
        flippedPair.push(action.cardId);
      }

      slugs = flippedPair.map(card => card.split('-')[0]);

      // if pair matches
      if (flippedPair.length === 2 && slugs[0] === slugs[1]) {
        cards.forEach((card) => {
          if (card.slug === slugs[0]) {
            card.flipped = true;
          }
        });

        flippedPair = [];
        matches = ++matches;
      }

      // if pair does not match
      if (flippedPair.length === 3) {
        flippedPair = [];
        mismatches = ++mismatches;
      }

      movements = ++movements;

      return { ...state, cards, flippedPair, movements, matches, mismatches };
    default:
      return state;
  }
};

export default gameReducer;
