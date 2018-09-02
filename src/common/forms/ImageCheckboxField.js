import React from 'react';
import MaterialCheckbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";
import Check from '@material-ui/icons/Check';
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";
import LabelText from "../typography/LabelText";

const Checkbox = styled(MaterialCheckbox)`
  position: relative !important;
`;

const CheckBoxImageBackground = styled.div`
  background-image: url(${({imageUrl}) => imageUrl });
  background-size: contain;
  height: 80px;
  width: 80px;
  border: 2px solid ${({theme}) => fromPalette(theme, 'primary')};
  border-radius: 100%;
`;

const ImageSurround = styled.span`
  height: 116px;
  width: 116px;
  display: flex;
  margin: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 2px solid ${({theme, value}) => value === "true" ? fromPalette(theme, 'primaryLight') : fromPalette(theme, 'lightGrey')};
`;

const CheckIcon = styled(Check)`
    position: absolute;
    right: -44px;
    top: -8px;
    color: ${({theme}) => fromPalette(theme, 'primary') } !important;
`;

const FormControlLabel = styled(MaterialFormControlLabel)`
    margin: 0px !important;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;

const ImageCheckboxField = ({
  error,
  focused,
  label,
  value,
  checked,
  helperText,
  imageUrl,
  ...props}) => (
  <ImageSurround value={value}>
    <FormControlLabel
      control={<CheckBoxImageBackground imageUrl={imageUrl}>
          <Checkbox
            icon=""
            checkedIcon={<CheckIcon />}
            checked={value === "true"}
            value={value}
            {...props}
          />
        </CheckBoxImageBackground>
        }
      label={<LabelText colour="primary">{label}</LabelText>}
    />
  </ImageSurround>
);

export default ImageCheckboxField;
