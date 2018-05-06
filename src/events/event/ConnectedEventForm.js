import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, firebaseConnect, isEmpty } from 'react-redux-firebase';
import EventForm from './EventForm';
import { eventsForUserQuery } from '../firestoreQueries';
import { selectEventFromId } from './selectors';

export const ConnectedEventForm = ({ storedData, onChange, isNew }) => (
  (!isEmpty(storedData) || isNew) && <EventForm
    fieldValues={storedData}
    onChange={onChange}
  />
);

const mapStateToProps = (state, { id }) => {
  return {
    storedData: id ? selectEventFromId(state, id) : {},
    isNew: !id
  };
};

export default compose(
  firebaseConnect(),
  firestoreConnect(eventsForUserQuery),
  connect(mapStateToProps)
)(ConnectedEventForm)
