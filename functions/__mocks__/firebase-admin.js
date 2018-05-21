import firebasemock from 'firebase-mock';
//export default jest.genMockFromModule('firebase-admin').default;


const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mocksdk = new firebasemock.MockFirebaseSdk(
  null,
  () => {
    return mockauth;
  },
  () => {
    return mockfirestore;
  },
  null,
  null
);

export default mocksdk;
