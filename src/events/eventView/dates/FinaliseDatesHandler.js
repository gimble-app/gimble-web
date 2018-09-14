import React, {Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import FinaliseDateForm from "./FinaliseDatesForm";
import SimpleButton from "../../../common/buttons/SimpleButton";

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
    const { event } = this.props;

    return (
      <Fragment>
        <SimpleButton onClick={this.handleClickOpen}>Finalise dates</SimpleButton>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <FinaliseDateForm
            event={event}
            onSubmitSuccess={this.handleClose}
          />
        </Dialog>
      </Fragment>
    );
  }
}

export default FinaliseDatesHandler;
