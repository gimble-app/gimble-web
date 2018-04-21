import React, { Fragment, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import EventForm from './EventForm';
import ToolbarTitleText from '../common/ToolbarTitleText';
import { eventDeleted, saveEvent } from './actions';
import { selectEventFromId } from './reducers';

export class EventScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      fieldValues: props.initialState || {}
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
    const { onDelete, saveEvent } = this.props;
    const { fieldValues } = this.state;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <CancelButton />
            <ToolbarTitleText>Title</ToolbarTitleText>
            {
              fieldValues.id && <DeleteButton onClick={() => onDelete(fieldValues.id)} />
            }
            <SaveButton onClick={() => saveEvent(fieldValues)} />
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

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  return id ? {
    initialState: selectEventFromId(state, id)
  } : {}
}

const mapDispatchToProps = {
  onDelete: eventDeleted,
  saveEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
