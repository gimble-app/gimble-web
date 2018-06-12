import mocksdk from 'firebase-admin';
import {request, accept, rescind, FRIEND_REQUESTS_COLLECTION, PROFILE_COLLECTION, FRIENDS_COLLECTION} from './friendRequests';
import uuid from "uuid/v4";

jest.mock('uuid/v4');

const mockFirestore = mocksdk.firestore();

describe('friendRequests', () => {

  const stubAuthorisedContext = { auth: { uid: 'my-id'}};

  beforeEach(() => {
    uuid.mockReturnValue('generated-id');
    mockFirestore.autoFlush();
  });

  afterEach(() => {
    //cleanup - need a better way to reset the mock
    mockFirestore.doc(`${FRIEND_REQUESTS_COLLECTION}/generated-id`).delete();
    mockFirestore.doc(`${PROFILE_COLLECTION}/my-id/${FRIENDS_COLLECTION}/their-id`).delete();
    mockFirestore.doc(`${PROFILE_COLLECTION}/their-id/${FRIENDS_COLLECTION}/my-id`).delete();
  });

  describe('request', () => {
    it('adds to the collection', async () => {
      await request({to: 'me', from: 'you'}, stubAuthorisedContext);

      expect(mockFirestore).toContainDocAtPath(`${FRIEND_REQUESTS_COLLECTION}/generated-id`);
    });

  });

  describe('rescind', () => {
    it('removes from the collection', async () => {
      await mockFirestore.collection(FRIEND_REQUESTS_COLLECTION).doc("generated-id").set({ from: "their-id" });

      await rescind({ id: 'generated-id' }, stubAuthorisedContext);

      expect(mockFirestore).not.toContainDocAtPath(`${FRIEND_REQUESTS_COLLECTION}/generated-id`);
    });
  });

  describe('accept', () => {
    it('adds friend entries for the profiles and removes the friend request', async () => {
      await mockFirestore.collection(FRIEND_REQUESTS_COLLECTION).doc("friend-request-id").set({ from: "their-id" });

      await accept({ requestId: 'friend-request-id' }, stubAuthorisedContext);

      expect(mockFirestore).toContainDocAtPath(`${PROFILE_COLLECTION}/my-id/${FRIENDS_COLLECTION}/their-id`);
      expect(mockFirestore).toContainDocAtPath(`${PROFILE_COLLECTION}/their-id/${FRIENDS_COLLECTION}/my-id`);
      expect(mockFirestore).not.toContainDocAtPath(`${FRIEND_REQUESTS_COLLECTION}/friend-request-id`);
    });

    it('does not update the friend entries when a request does not exist', async () => {
      await accept({ requestId: 'friend-request-id' }, stubAuthorisedContext);

      expect(mockFirestore).not.toContainDocAtPath(`${PROFILE_COLLECTION}/my-id/${FRIENDS_COLLECTION}/their-id`);
      expect(mockFirestore).not.toContainDocAtPath(`${PROFILE_COLLECTION}/their-id/${FRIENDS_COLLECTION}/my-id`);
    });
  });

});
