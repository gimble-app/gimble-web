import React, {Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import AddButton from "./AddButton";
import AddPreferredDateForm from "./AddPreferredDateForm";

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

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <AddButton onClick={this.handleClickOpen}/>
        <Dialog
          open={open}
          onClose={this.handleClose}
        >
          <AddPreferredDateForm onSubmitSuccess={this.handleClose}/>
        </Dialog>
      </Fragment>
    );
  }
}

export default AddDateHandler;
