import events, { selectEventFromId } from './reducers';
import { eventSaved, eventDeleted } from './actions';

describe('events reducer', () => {
  const eventSavedAction = eventSaved({ id: 'id', title: 'value' });

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

    it('updates an entry if it exists', () => {
      const result = events([{ id: 'id', title: 'old value' }], eventSavedAction);
      expect(result.length).toBe(1);
      expect(result[0].title).toEqual('value');
    });
  });

  describe('eventDeleted', () => {
    const eventRemovedAction = eventDeleted('001');

    it('removes an entry when it exists', () => {
      const result = events([
        { id: '001', title: 'value' },
        { id: '002', title: 'value' },
      ], eventRemovedAction);
      expect(result).toEqual([{ id: '002', title: 'value' }]);
    });
  });
});

describe('event by id selecter', () => {
  it('returns an event if it exists for the id', () => {
    const event = { id: 123, title: 'some-title '};
    const result = selectEventFromId({ events: [event]}, 123);
    expect(result).toBe(event);
  })

  it('returns undefined if no event exists for the id', () => {
    const event = { id: 900, title: 'some-title '};
    const result = selectEventFromId({ events: [event]}, 123);
    expect(result).toBeUndefined();
  })

  it('returns undefined if the id is undefined', () => {
    const event = { id: 900, title: 'some-title '};
    const result = selectEventFromId({ events: [event]});
    expect(result).toBeUndefined();
  })
})
