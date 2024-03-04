import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

import { getCards } from './store/actions/game_actions';

import './assets/styles/App.css';

function App(props) {
  // react lifecycle
  useEffect(() => {
    // get cards
    if (!props.cards.length) {
      props.getCards(10);
    }
  }, []);

  // render
  return (
    <div className='App'>
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
});

const mapDispatchToProps = (dispatch) => ({
  getCards: (numberOfCards) => dispatch(getCards(numberOfCards)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
