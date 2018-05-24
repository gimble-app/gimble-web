import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {isEmpty} from 'react-redux-firebase';
import EventForm from './EventForm';
import {selectEventFromId} from './selectors';

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
  connect(mapStateToProps)
)(ConnectedEventForm)
