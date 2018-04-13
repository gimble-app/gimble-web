import events from './reducers';
import { eventSaved } from './actions';

const eventSavedAction = eventSaved({ field: 'value' });

describe('events reducer', () => {
  it('provides an empty array by default', () => {
    const result = events(undefined, {});
    expect(result).toEqual([]);
  });

  describe('eventSaved', () => {
    it('adds a new entry to an empty array', () => {
      const result = events([], eventSavedAction);
      expect(result).toEqual([{ field: 'value' }]);
    });

    it('adds a new entry to a populated array', () => {
      const result = events([{ field: 'exists'}], eventSavedAction);
      expect(result).toEqual([{ field: 'exists'}, { field: 'value' }]);
    });
  });
});
