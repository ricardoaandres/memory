import { connect } from 'react-redux';
import classname from 'classname';

import { flipCard } from '../../store/actions/game_actions';

const GameCard = (props) => {
  // user methods
  const onCardClicked = () => {
    if (!props.flipped) {
      props.flipCard(props.id);
    }
  };

  // render
  const klass = classname({
    'gamecard-body': true,
    'flipped': props.flipped,
  });

  return (
    <div className='gamecard' onClick={onCardClicked}>
      <div className={klass}>
        <img className='gamecard-body-front' src={props.data.imageUrl} />
        <div className='gamecard-body-back'></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  flipCard: (cardId) => dispatch(flipCard(cardId)),
});

export default connect(undefined, mapDispatchToProps)(GameCard);
