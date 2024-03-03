import * as game from '../../api/cards';

export const types = {
  GET_CARDS: 'GAME/receive_cards',
};

export const getCards = () => dispatch => {
  game.getCards().then((cards) => {
    dispatch({
      type: types.GET_CARDS,
      cards,
    });
  });
};
