import {getFriendProfiles} from "./friendProfileData";

describe('friendProfileData', () => {
  describe('getFriendProfiles', () => {
    let mockGet;
    const firestore = {
      doc: () => ({
        get: mockGet
      })
    };

    beforeEach(() => {
      mockGet = jest.fn();
    });

    it('requests the profile details and maps them', async () => {
      const friends = ['1234'];
      mockGet.mockReturnValue(Promise.resolve({
        data: () => ({
          uid: '1234',
          photoURL: 'some-url',
          displayName: 'some-display-name'
        })
      }));

      const profiles = await getFriendProfiles(firestore, friends);

      expect(profiles).toEqual([
        {
          uid: '1234',
          photoURL: 'some-url',
          displayName: 'some-display-name'
        }
      ]);
    });

    it('handles a rejected request', async () => {
      const friends = ['1234'];
      mockGet.mockReturnValue(Promise.reject('some issue'));

      const profiles = await getFriendProfiles(firestore, friends);

      expect(profiles).toEqual([]);

    });
  });
});
