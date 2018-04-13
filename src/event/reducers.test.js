import events from './reducers';
import { eventSaved } from './actions';

const eventSavedAction = eventSaved({ title: 'value' });

describe('events reducer', () => {
  it('provides an empty array by default', () => {
    const result = events(undefined, {});
    expect(result).toEqual([]);
  });

  describe('eventSaved', () => {
    it('adds a new entry to an empty array', () => {
      const result = events([], eventSavedAction);

      expect(result.length).toBe(1);
      expect(result[0].title).toEqual('value');
    });

    it('adds a new entry to a populated array', () => {
      const result = events([{ id: 'some-id', title: 'exists' }], eventSavedAction);

      expect(result.length).toBe(2);
      expect(result[0]).toEqual({ id: 'some-id', title: 'exists' });
      expect(result[1].id).toBeDefined();
      expect(result[1].title).toEqual('value');
    });
  });
});
