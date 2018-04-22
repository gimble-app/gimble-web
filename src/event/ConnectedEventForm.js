import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import EventForm from './EventForm';

export const ConnectedEventForm = ({ storedData, onChange }) => (
  !isEmpty(storedData) && <EventForm
    fieldValues={storedData}
    onChange={onChange}
  />
);

const mapStateToProps = (state, { id }) => {
  const { data } = state.firestore;
  if(id) {
      return {
        storedData: data.events && data.events[id],
      }
  }
  return {};
}

export default compose(
  firestoreConnect(({ id }) => [
   { collection: 'events', doc: id }
  ]),
  connect(mapStateToProps)
)(ConnectedEventForm)
