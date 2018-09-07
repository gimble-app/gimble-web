import React, {Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import AddButton from "./AddButton";
import AddDateForm from "./AddDateForm";

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
          fullScreen
          open={open}
          onClose={this.handleClose}
        >
          <AddDateForm onSubmitSuccess={this.handleClose}/>
        </Dialog>
      </Fragment>
    );
  }
}

export default AddDateHandler;
