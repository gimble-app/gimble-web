import React, {Fragment} from "react";
import {connect} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DateRangeForm from "./DateRangeForm";
import {updateDateRange} from "./actions";
import PreferredDateEntry from "./PreferredDateEntry";

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
    const { onSubmit, date } = this.props;

    return (
      <Fragment>
        <PreferredDateEntry
          from={date.from.format('DD MMM')}
          to={date.to.format('DD MMM')}
          onClick={this.handleClickOpen}
        />
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <DateRangeForm
            onSubmit={onSubmit}
            onSubmitSuccess={this.handleClose}
            onDatesCanceled={this.handleClose}
            initialDate={date}
          />
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, { event }) => ({
  onSubmit: (values) => dispatch(updateDateRange(values, event))
});

export default connect(() => ({}), mapDispatchToProps)(AddDateHandler);
