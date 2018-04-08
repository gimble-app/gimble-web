import { loadState, saveState } from './storage';

describe('storage', () => {

  beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };
    global.localStorage = localStorageMock
  });

  describe('loadState', () => {
    it('returns a json object representing the saved store', () => {
      localStorage.getItem.mockReturnValue('{"state": "some-data"}');

      const result = loadState();
      expect(result).toEqual({
        state: 'some-data'
      });
    });

    it('returns undefined when the store is empty', () => {
      const result = loadState();
      expect(result).toBeUndefined();
    });
  });

  describe('saveState', () => {
    it('overwrites the existing state', () => {
      saveState({ state: 'new-data' });

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'state',
        '{\"state\":\"new-data\"}'
      );
    });
  });
});
