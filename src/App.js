import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import WelcomeModal from './components/WelcomeModal';
import SuccessModal from './components/SuccessModal';

import { getCards } from './store/actions/game_actions';

import './assets/styles/App.css';

function App(props) {
  // state
  const [modalData, setModalData] = useState({ show: false });

  // react lifecycle
  useEffect(() => {
    // get cards
    if (!props.cards.length) {
      props.getCards(10);
    }

    if (!props.user.username) {
      setModalData({ show: true, type: 'welcome-modal' });
    }

    if (props.cards.length > 0 && props.cards.length / 2 === props.matches) {
      setModalData({ show: true, type: 'success-modal' });
    }
  }, [props.matches]);

  // user actions
  const closeModal = () => {
    setModalData({ show: false });
  };

  // render methods
  const renderModal = () => {
    switch (modalData.type) {
      case 'welcome-modal':
        return <WelcomeModal onClose={closeModal} />;
      case 'success-modal':
        return <SuccessModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  // render
  const modal = renderModal();

  return (
    <div className='App'>
      { modal }
 
      <div className='container'>
        <div className='row'>
          <Scoreboard />
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <Gameboard cards={props.cards} flippedPair={props.flippedPair} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cards: state.game.cards,
  numberOfCards: state.game.numberOfCards,
  flippedPair: state.game.flippedPair,
  movements: state.game.movements,
  matches: state.game.matches,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCards: (numberOfCards) => dispatch(getCards(numberOfCards)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
