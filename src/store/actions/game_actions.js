import * as game from '../../api/cards';

export const types = {
  GET_CARDS: 'GAME/receive_cards',
  FLIP_CARD: 'GAME/flip_card',
};

export const getCards = () => dispatch => {
  game.getCards().then((cards) => {
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
