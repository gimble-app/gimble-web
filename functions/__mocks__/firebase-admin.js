import firebasemock from 'firebase-mock';

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
