import {FRIENDS_STORE_KEY, selectFriendProfiles} from "./selectors";
import { mapsSelector } from '../firebaseSelectors';

jest.mock('../firebaseSelectors', () => ({
  mapsSelector: jest.fn()
}));

describe('selectors', () => {

  describe('selectFriendProfiles', () => {

    beforeEach(() => {
      mapsSelector.mockReturnValue({
        [FRIENDS_STORE_KEY]: {
          friend1: {
            some: 'data'
          },
          friend2: {
            more: 'data'
          }
        }
      })
    });

    it('maps the friends array from the object values when one exists', () => {
      const result = selectFriendProfiles({});
      expect(result).toEqual([
        { some: 'data' },
        { more: 'data'}
      ])
    });
  });
});
