import { logOut, setAuthCallback } from './firebaseProvider';

const mockOnAuthStateChanged = jest.fn();

jest.mock('firebase', () => ({
  initializeApp: () => {},
  auth: () => ({
    signOut: () => Promise.resolve(),
    onAuthStateChanged: mockOnAuthStateChanged
  })
}))

describe('logOut', () => {
  it('calls the callback when everything is successful', async () => {
    const callback = jest.fn();
    await logOut(callback);
    expect(callback).toHaveBeenCalled();
  })
})

describe('setAuthCallback', () => {
  it('calls the callback when everything is successful', async () => {
    const callback = jest.fn();
    await setAuthCallback(callback);
    expect(mockOnAuthStateChanged).toHaveBeenCalledWith(callback);
  })
})
