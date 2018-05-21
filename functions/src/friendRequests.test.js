import mocksdk from 'firebase-admin';
import { request, accept } from './friendRequests';
import uuid from "uuid/v4";

jest.mock('uuid/v4');
uuid.mockReturnValue('generated-id');

describe('friendRequests', () => {

  const mockFirestore = mocksdk.firestore();

  beforeEach(() => {
    mockFirestore.autoFlush();
  });

  describe('request', () => {
    it('adds to the collection', async () => {
      await request({ to: 'me', from: 'you' }, { auth: true });

      expect(getMockCollectionEntries('friendRequests')[0]).toEqual({ to: 'me', from: 'you', id: 'generated-id' });
    });
  });

  const getMockCollectionEntries = (collection) => {
    return Object.values(mockFirestore.children[collection].data);
  }
});
