import mocksdk from 'firebase-admin';
import {PROFILE_NAMES_COLLECTION, registerProfileName} from "./profiles";
import {PROFILE_COLLECTION} from "./friendRequests";

const mockFirestore = mocksdk.firestore();

describe('profiles', () => {

  const stubAuthorisedContext = { auth: { uid: 'my-id'}};

  beforeEach(() => {
    mockFirestore.autoFlush();
  });

  describe('registerProfileName', () => {

    it('throws that the auth was invalid when no auth exists', async () => {
      try {
        await registerProfileName({profileName: 'my-name'}, {});

        fail("should have thrown an error by now");
      } catch (error) {
        expect(error.code).toBe("failed-precondition");
        expect(error.message).toBe("The function must be called while authenticated.");
      }
    });

    [
      { desc: 'empty string', datum: '' },
      { desc: 'only white space', datum: '  ' },
      { desc: 'not enough characters', datum: '   s   ' },
      { desc: 'too many characters', datum: 'sssssssssssssssssssssssssssssss' },
      { desc: 'invalid characters', datum: '   :   ' },
    ].forEach(testData =>
    it(`throws that the argument was invalid when given ${testData.desc}`, async () => {
      try {
        await registerProfileName({ profileName: testData.datum}, stubAuthorisedContext);

        fail("should have thrown an error by now");
      } catch (error) {
        expect(error.code).toBe("invalid-argument");
        expect(error.message).toBe("Invalid profile name.");
      }
    }));

    it('throws that the name exists when it is already taken', async () => {
      await mockFirestore.collection(PROFILE_NAMES_COLLECTION).doc("already-exists").set({});

      try {
        await registerProfileName({profileName: 'already-exists'}, stubAuthorisedContext);

        fail("should have thrown an error by now");
      } catch (error) {
        expect(error.code).toBe("already-exists");
        expect(error.message).toBe("Profile name is taken.");
      }
    });

    it('registers a new profile name', async () => {
      await registerProfileName({profileName: 'my-name'}, stubAuthorisedContext);

      expect(mockFirestore).toContainDocAtPath(`${PROFILE_NAMES_COLLECTION}/my-name`);
      expect(mockFirestore).toContainDocAtPathWith(`${PROFILE_COLLECTION}/my-id`, {profileName: 'my-name'});
    });
  });
});
