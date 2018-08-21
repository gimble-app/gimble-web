import React from 'react';
import MaterialCheckbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Add from "@material-ui/icons/Add";
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";
import LabelText from "../typography/LabelText";

const Checkbox = styled(MaterialCheckbox)`
  background-image: url(${({imageUrl}) => imageUrl });
  background-size: contain;
  height: 80px !important;
  width: 80px !important;
  position: relative !important;
  border: 1px solid ${({theme, checked}) => checked ? fromPalette(theme, 'primaryContrast') : 'red'} !important;
`;

const ImageSurround = styled.span`
  height: 116px;
  width: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  ${({theme}) => fromPalette(theme, 'primaryLight') };
  border-radius: 2px;
`;

const AddIcon = styled(Add)`
    position: absolute;
    right: -12px;
    top: -8px;
    color: ${({theme}) => fromPalette(theme, 'secondary') } !important;
`;

const CheckCircleOutlineIcon = styled(CheckCircleOutline)`
    position: absolute;
    right: -12px;
    top: -8px;
    color: ${({theme}) => fromPalette(theme, 'primaryContrast') } !important;
`;

const FormControlLabel = styled(MaterialFormControlLabel)`
    margin: 0px !important;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;

const ImageSelectEntry = ({label, ...props}) => (
  <ImageSurround>
    <FormControlLabel
      control={
        <Checkbox
          checked
          icon={<AddIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          {...props}
        />}
      label={<LabelText>{label}</LabelText>}
    />
  </ImageSurround>
)

export default ImageSelectEntry;
