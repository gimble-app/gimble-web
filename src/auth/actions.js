import { logOut, logIn } from './firebaseProvider';

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  data: user
})

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

export const logout = () => {
    return async (dispatch, getState, getFirestore) => {
      try {
        await logOut();
        dispatch(logoutSuccess());
      } catch (exception) {
        console.error('logout failed', exception);
      }
    }
}

export const login = () => {
    return async (dispatch, getState, getFirestore) => {
      try {
        const user = await logIn();
        dispatch(loginSuccess(user));
      } catch (exception) {
        console.error('login failed', exception);
      }
    }
}
