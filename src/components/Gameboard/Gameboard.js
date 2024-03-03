import PropTypes from 'prop-types';
import GameCard from '../GameCard/GameCard';

const Gameboard = (props) => {
  // methods
  const shuffleCards = (cards) => {
    const inUse = cards.slice(0, props.numberOfCards);
    let duplicated = inUse.concat(inUse);

    for (let i = duplicated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
    }

    return duplicated;
  };

  // render methods
  const renderCards = (cards) => {
    return shuffleCards(cards).map((card, index) => {
      return <GameCard data={card} key={`${card.name}-${index}`} />;
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
