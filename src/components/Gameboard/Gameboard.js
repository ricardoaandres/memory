import PropTypes from 'prop-types';

import GameCard from '../GameCard/GameCard';

const Gameboard = (props) => {
  // render methods
  const renderCards = (cards) => {
    return cards.map((card, idx) => {
      const id = `${card.id}-${idx}`;
      const flipped = props.flippedPair.includes(id) || card.flipped;

      return <GameCard data={card} id={id} key={id} flipped={flipped} />;
    });
  };

  // render
  const cards = renderCards(props.cards);

  return (
    <div className='gameboard'>
      { cards }
    </div>
  );
};

Gameboard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }))),
  numberOfCards: PropTypes.number,
};

Gameboard.defaultProps = {
  cards: [],
  numberOfCards: 9,
};

export default Gameboard;
