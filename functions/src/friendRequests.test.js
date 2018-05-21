import mocksdk from 'firebase-admin';
import { request } from './friendRequests';

describe('friendRequests', () => {

  const mockFirestore = mocksdk.firestore();

  it('adds to the collection', async () => {
    const promise = request({ to: 'me', from: 'you' }, { auth: true });
    mockFirestore.flush();
    await promise;

    expect(getMockCollectionEntries('friendRequests')[0]).toEqual({ to: 'me', from: 'you' });
  });

  const getMockCollectionEntries = (collection) => {
    return Object.values(mockFirestore.children[collection].data);
  }
});
