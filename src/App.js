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
      props.getCards();
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
          <Gameboard cards={props.cards} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cards: state.game.cards,
  numberOfCards: state.game.numberOfCards,
});

const mapDispatchToProps = (dispatch) => ({
  getCards: () => dispatch(getCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
