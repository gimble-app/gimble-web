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

  render() {
    const { open } = this.state;
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <SimpleButton onClick={this.handleClickOpen}>Finalise dates</SimpleButton>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <DateRangeForm
            onSubmit={onSubmit}
            onSubmitSuccess={this.handleClose}
            onCanceled={this.handleClose}
          />
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, { event }) => ({
  onSubmit: (values) => dispatch(setEventDates(values, event))
});

export default connect(() => ({}), mapDispatchToProps)(FinaliseDatesHandler);
