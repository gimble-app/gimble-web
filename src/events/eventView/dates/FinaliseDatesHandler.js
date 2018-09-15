import React, {Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import DateRangeForm from "./DateRangeForm";
import SimpleButton from "../../../common/buttons/SimpleButton";
import {setEventDates} from "./actions";
import {connect} from "react-redux";

class FinaliseDatesHandler extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { open } = this.state;
    const { onFormSubmit } = this.props;

    return (
      <Fragment>
        <SimpleButton onClick={this.handleClickOpen}>Finalise dates</SimpleButton>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <DateRangeForm
            onSubmitSuccess={this.handleClose}
            onDatesSelected={onFormSubmit}
          />
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, { event }) => ({
  onFormSubmit: (prop) => dispatch(setEventDates(prop, event))
});

export default connect(() => ({}), mapDispatchToProps)(FinaliseDatesHandler);
