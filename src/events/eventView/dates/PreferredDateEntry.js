import Chip from "../../../common/Chip";
import React, {Fragment} from "react";
import LabelText from "../../../common/typography/LabelText";
import SimpleIconButton from "../../../common/buttons/SimpleIconButton";
import MaterialCloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import {removePreferredDate} from "./actions";

const PreferredDateEntry = ({ event, to, from, uid, removePreferredDate }) => (
  <Fragment>
    <Chip>
      <LabelText>{from} - {to}</LabelText>
    </Chip>
    <SimpleIconButton onClick={() => removePreferredDate(uid, event)}><MaterialCloseIcon/></SimpleIconButton>
  </Fragment>
);

export default connect(() => ({}), { removePreferredDate })(PreferredDateEntry);
