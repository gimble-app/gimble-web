export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  data: user
})

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

export const logout = () => {
    return async (dispatch, getState, { getFirestore, getFirebase }) => {
      try {
        const firebase = getFirebase();
        await firebase.logout();
        dispatch(logoutSuccess());
      } catch (exception) {
        console.error('logout failed', exception);
      }
    }
}

export const login = () => {
    return async (dispatch, getState, { getFirebase }) => {
      try {
        const firebase = getFirebase();
        const user = await firebase.login({ provider: 'google', type: 'redirect' });
        dispatch(loginSuccess(user));
      } catch (exception) {
        console.error('login failed', exception);
      }
    }
}
