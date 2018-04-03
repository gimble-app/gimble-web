import React from 'react';
import Button from 'material-ui/Button';
import { logOut } from './firebaseProvider';

const LogoutButton = ({ onLogout }) =>
<Button
  color="secondary"
  aria-label="logout"
  onClick={() => logOut(onLogout)}
>Log out
</Button>

export default LogoutButton;
