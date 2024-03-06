import { types } from '../actions/user_actions';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return { ...state, username: action.user.username };
    default:
      return state;
  }
};

export default userReducer;
