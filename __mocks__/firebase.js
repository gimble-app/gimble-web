const firebase = jest.genMockFromModule('firebase');
const auth = jest.genMockFromModule('firebase/auth');

export default {
  ...firebase,
  firestore: () => ({
    collection: () => ({
      where: {
        apply: () => ({
          onSnapshot: jest.fn()
        })
      }
    })
  }),
  auth: () => ({
    onAuthStateChanged: jest.fn(),
    currentUser: {
      uid: 'some-id'
    }
  })
};
