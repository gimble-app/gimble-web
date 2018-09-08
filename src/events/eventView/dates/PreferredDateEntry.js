import Chip from "../../../common/Chip";
import React, {Fragment} from "react";
import moment from "moment";
import LabelText from "../../../common/typography/LabelText";
import SimpleIconButton from "../../../common/buttons/SimpleIconButton";
import MaterialCloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import {removePreferredDate} from "./actions";

const PreferredDateEntry = ({ event, from, to, removePreferredDate }) => (
  <Fragment>
    <Chip>
      <LabelText>{moment(from).format('DD MMM')} - {moment(to).format('DD MMM')}</LabelText>
    </Chip>
    <SimpleIconButton onClick={() => removePreferredDate(from, to, event)}><MaterialCloseIcon/></SimpleIconButton>
  </Fragment>
);

export default connect(() => ({}), { removePreferredDate })(PreferredDateEntry);
