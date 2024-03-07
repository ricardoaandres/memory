import { connect } from 'react-redux';

import Modal from '../Modal';

import { resetGame } from '../../store/actions/game_actions';

const SuccessModal = (props) => {
  // user actions
  const onButtonClicked = () => {
    props.resetGame();
    props.onClose();
  };

  // render
  return (
    <Modal title={'Congratulations'}>
      <div className='welcome-modal-wrapper'>
        <div className='welcome-modal-form'>
          <p>Congratulations { props.user.username } for finishing a round of memory! Click the button below to start playing again.</p>

          <div className='row row-cols-lg-auto g-3 align-items-center'>
            <div className='col-12'>
              <button type='submit' className='btn btn-primary' onClick={onButtonClicked}>Play again</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);
