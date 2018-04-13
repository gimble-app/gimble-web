import React, { Component, Fragment } from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu from 'material-ui/Menu';
import LogoutMenuOption from '../auth/LogoutMenuOption';

class ProfileMenu extends Component {

  state = {
     anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Fragment>
        <IconButton
           aria-owns={open ? 'menu-appbar' : null}
           aria-haspopup="true"
           onClick={this.handleMenu}
           color="inherit"
         >
           <AccountCircle />
        </IconButton>
        <Menu
           id="menu-appbar"
           anchorEl={anchorEl}
           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
           transformOrigin={{ vertical: 'top', horizontal: 'right' }}
           open={open}
           onClose={this.handleClose}
        >
           <LogoutMenuOption handleClose={this.handleClose} />
        </Menu>
      </Fragment>
    );
  }
}

export default ProfileMenu;
