import mocksdk from 'firebase-admin';
import addFriendRequest from './addFriendRequest';

describe('addFriendRequest', () => {

  const mockFirestore = mocksdk.firestore();

  it('adds to the collection', async () => {
    const promise = addFriendRequest({ to: 'me', from: 'you' });
    mockFirestore.flush();
    await promise;

    expect(getMockCollectionEntries('friendRequests')[0]).toEqual({ to: 'me', from: 'you' });
  });

  const getMockCollectionEntries = (collection) => {
    return Object.values(mockFirestore.children[collection].data);
  }
});
