export default () => {
  return {
    type: '@@reduxFirestore/LISTENER_RESPONSE',
      meta: {
    collection: 'events',
      where: [
      'author',
      '==',
      'some-user-id'
    ]
  },
    payload: {
      data: {
        'some-id': {
          author: '6oEIsHq4oVTz9BC1YIAKohvI1H02',
            id: 'some-id',
            title: 'some event'
        }
      },
      ordered: [
        {
          id: 'some-id',
          author: '6oEIsHq4oVTz9BC1YIAKohvI1H02',
          title: 'some event'
        }
      ]
    },
    merge: {}
  }
}

/*
{UPDATE_REQUEST/UPDATE_SUCCESS
  type: '@@reduxFirestore/UPDATE_SUCCESS',
  meta: {
    collection: 'events',
    doc: 'some-id'
  },
  payload: {
    args: [
      {
        title: 'Gentile'
      }
    ]
  }
}
 */

/*SET_REQUEST/SET_SUCCESS
{
  type: '@@reduxFirestore/SET_SUCCESS',
  meta: {
    collection: 'events',
    doc: 'some-id-4'
  },
  payload: {
    args: [
      {
        title: 'New!',
        id: 'some-id-4',
        author: '6oEIsHq4oVTz9BC1YIAKohvI1H02'
      }
    ]
  }
}
 */
