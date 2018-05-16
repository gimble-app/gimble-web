import { create, createWithQuery, update, remove } from './firebase';
import uuid from "uuid/v4";

jest.mock('uuid/v4');
uuid.mockReturnValue('generated-id');

const firestore = {
  set: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
};

const getFirestore = jest.fn();

describe('firebase', () => {

  beforeEach(() => {
    getFirestore.mockReturnValue(firestore);
  });

  describe('createWithQuery', () => {
    it('sets the item in the collection in firestore', async () => {
      firestore.set.mockReturnValue(Promise.resolve());

      await createWithQuery('some-collection/id', { some: 'data' }, getFirestore);

      expect(firestore.set).toBeCalledWith('some-collection/id', { some: 'data' });
    });
  });


  describe('create', () => {

    it('generates an id and sets the item in the collection in firestore', async () => {
      firestore.set.mockReturnValue(Promise.resolve());

      await create('some-collection', { some: 'data' }, getFirestore);

      expect(firestore.set).toBeCalledWith('some-collection/generated-id',
        {
          some: 'data',
          id: 'generated-id',
        });
    });
  });

  describe('update', () => {
    it('updates the collection with the item in firestore', async () => {
      firestore.update.mockReturnValue(Promise.resolve());

      await update('some-collection', 'some-id', { some: 'data' }, getFirestore);

      expect(firestore.update).toBeCalledWith('some-collection/some-id', { some: 'data' });
    });
  });

  describe('remove', () => {
    it('deletes the item from the collection in firestore', async () => {
      firestore.delete.mockReturnValue(Promise.resolve());

      await remove('some-collection', 'some-id', getFirestore);

      expect(firestore.delete).toBeCalledWith('some-collection/some-id');

    });
  });
});
