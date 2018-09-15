import Chip from "../../../common/Chip";
import React, {Fragment} from "react";
import LabelText from "../../../common/typography/LabelText";

const PreferredDateEntry = ({ to, from, onClick }) => (
  <Fragment>
    <Chip onClick={onClick}>
      <LabelText>{from} - {to}</LabelText>
    </Chip>
  </Fragment>
);

export default PreferredDateEntry;
