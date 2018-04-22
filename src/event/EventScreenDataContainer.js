import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import EventScreen from './EventScreen';

export class EventScreenDataContainer extends Component {
  render () {
    const { initialState } = this.props;
    return !isEmpty(initialState) && <EventScreen initialState={initialState} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const { data } = state.firestore;
  const id = match.params.id;
  const event = data.events && data.events[id];
  if(id) {
      return {
        initialState: event,
      }
  }
  return {};
}

export default compose(
  firestoreConnect(({match}) => [
   { collection: 'events', doc: match.params.id }
  ]),
  connect(mapStateToProps)
)(EventScreenDataContainer)
