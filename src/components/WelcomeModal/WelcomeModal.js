import { useRef } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';

import { registerUser } from '../../store/actions/user_actions';

const WelcomeModal = (props) => {
  // refs
  const input = useRef();

  // user methods
  const onSubmitClicked = () => {
    const username = input.current.value;

    if (username) {
      props.registerUser({ username });

      // dismiss modal
      props.onClose();
    }
  };

  return (
    <Modal title={'Memory Game'}>
      <div className='welcome-modal-wrapper'>
        <div className='welcome-modal-form'>
          <p>Enter your name to start playing memory.</p>

          <div className='row row-cols-lg-auto g-3 align-items-center'>
            <div className='col-12'>
              <label className='visually-hidden' htmlFor='username'>username</label>
              <div className='input-group'>
                <input type='text' className='form-control' id='username' placeholder='username' ref={input}/>
              </div>
            </div>

            <div className='col-12'>
              <button type='submit' className='btn btn-primary' onClick={onSubmitClicked}>Start playing</button>
            </div>
          </div>

        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (user) => dispatch(registerUser(user)),
});

export default connect(undefined, mapDispatchToProps)(WelcomeModal);
