import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import EventForm from './EventForm';
import { EVENTS_COLLECTION } from './data';

export const ConnectedEventForm = ({ storedData, onChange, isNew }) => (
  (!isEmpty(storedData) || isNew) && <EventForm
    fieldValues={storedData}
    onChange={onChange}
  />
);

const mapStateToProps = (state, { id }) => {
  const { data } = state.firestore;
  if(id) {
    return {
      storedData: data.events && data.events[id],
      isNew: false
    }
  }
  return {
    storedData: {},
    isNew: !id
  };
};

export default compose(
  firestoreConnect(({ id }) => [
   {
     collection: EVENTS_COLLECTION,
     doc: id,
     storeAs: 'edited-event'
   },
      EVENTS_COLLECTION
  ]),
  connect(mapStateToProps)
)(ConnectedEventForm)
