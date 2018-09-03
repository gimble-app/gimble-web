import React from "react";
import AddIcon from '@material-ui/icons/Add';
import SimpleIconButton from "../../common/buttons/SimpleIconButton";

const AddButton = ({onClick}) =>
  <SimpleIconButton onClick={onClick} ariaLabel="add" colour="secondary">
    <AddIcon />
  </SimpleIconButton>;

export default AddButton;
