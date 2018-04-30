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
