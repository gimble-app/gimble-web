import { logOut } from './firebaseProvider';
import browserHistory from '../navigation/history';

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  data: user
})

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

export const logout = () => {
    return async (dispatch) => {
      try {
        await logOut();
        dispatch(logoutSuccess());
        browserHistory.push('/login');
      } catch (exception) {
        console.error('logout failed');
      }
    }
}
