import React, {Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import AddButton from "./AddButton";
import DateRangeForm from "./DateRangeForm";
import {addPreferredDateRange} from "./actions";
import {connect} from "react-redux";

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
    const { onFormSubmit } = this.props;

    return (
      <Fragment>
        <AddButton onClick={this.handleClickOpen}/>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <DateRangeForm
            onDatesSelected={onFormSubmit}
            onSubmitSuccess={this.handleClose}
            onDatesCanceled={this.handleClose}
          />
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, { event }) => ({
  onFormSubmit: (prop) => dispatch(addPreferredDateRange(prop, event))
});

export default connect(() => ({}), mapDispatchToProps)(AddDateHandler);
