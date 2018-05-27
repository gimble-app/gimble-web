import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {connect} from 'react-redux';
import ConnectedEventForm from './ConnectedEventForm';
import {saveEvent} from './actions';
import EditingEventToolbar from './EditingEventToolbar';

export class EventScreen extends Component {

  state = {
    fieldValues: {}
  };

  onChange = field => {
    this.setState({
      fieldValues: {
        ...this.state.fieldValues,
        ...field
      }
    });
  };

  render () {
    const { saveEvent, match } = this.props;
    const { fieldValues } = this.state;
    const id = match.params.id;
    const isNew = !id;

    return (
      <Fragment>
        <AppBar position="static">
          <EditingEventToolbar
            isNew={isNew}
            onSave={() => saveEvent(fieldValues, id)}
          />
        </AppBar>
        <ConnectedEventForm
          id={id}
          fieldValues={fieldValues}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  saveEvent
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(EventScreen)
