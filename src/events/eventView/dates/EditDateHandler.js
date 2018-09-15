import React, {Fragment} from "react";
import {connect} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DateRangeForm from "./DateRangeForm";
import {removePreferredDate, updateDateRange} from "./actions";
import AvailabilityIndicator from "./grid/AvailabilityIndicator";

class AddDateHandler extends React.Component {

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
    const { onSubmit, date, onDelete } = this.props;

    return (
      <Fragment>
        <AvailabilityIndicator onClick={this.handleClickOpen} />
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <DateRangeForm
            onSubmit={onSubmit}
            onSubmitSuccess={this.handleClose}
            onCanceled={this.handleClose}
            onDeleted={onDelete}
            initialDate={date}
          />
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, { date, event }) => ({
  onSubmit: (values) => dispatch(updateDateRange(values, event)),
  onDelete: () => dispatch(removePreferredDate(date.uid, event))
});

export default connect(() => ({}), mapDispatchToProps)(AddDateHandler);
