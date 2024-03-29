import * as game from '../../api/cards';

export const types = {
  GET_CARDS: 'GAME/receive_cards',
  FLIP_CARD: 'GAME/flip_card',
  RESET_GAME: 'GAME/reset_game'
};

export const getCards = (numberOfCards) => dispatch => {
  game.getCards(numberOfCards).then((cards) => {
    dispatch({
      type: types.GET_CARDS,
      cards,
    });
  });
};

export const flipCard = (cardId) => dispatch => {
  dispatch({
    type: types.FLIP_CARD,
    cardId,
  });
};

export const resetGame = () => dispatch => {
  dispatch({
    type: types.RESET_GAME,
  });
};
