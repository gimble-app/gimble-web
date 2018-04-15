const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        uid: action.data.uid
      }
    case 'LOGOUT_SUCCESS':
      return {};
    default:
      return state;
  }
}
 
export default auth

export const selectIsLoggedIn = (state) => state.auth && state.auth.uid;
