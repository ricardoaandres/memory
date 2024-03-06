export const types = {
  REGISTER_USER: 'USER/register_user',
};

export const registerUser = (user) => dispatch => {
  dispatch({
    type: types.REGISTER_USER,
    user,
  });
};
