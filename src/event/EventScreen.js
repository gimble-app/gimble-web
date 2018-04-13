import React, { Fragment, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import EventForm from './EventForm';
import ToolbarTitleText from '../common/ToolbarTitleText';
import { eventSaved } from './actions';

export class EventScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      fieldValues: {}
    };
  }

  onChange = field => {
    this.setState({
      fieldValues: {
        ...this.state.fieldValues, ...field
      }
    });
  };

  render () {
    const { onSave } = this.props;
    const { fieldValues } = this.state;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <CancelButton />
            <ToolbarTitleText>Title</ToolbarTitleText>
            <SaveButton onClick={() => onSave(fieldValues)}
            />
          </Toolbar>
        </AppBar>
        <EventForm
          fieldValues={fieldValues}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onSave: eventSaved
}

export default connect(() => ({}), mapDispatchToProps)(EventScreen);
