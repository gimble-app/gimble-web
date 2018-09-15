import Chip from "../../../common/Chip";
import React, {Fragment} from "react";
import LabelText from "../../../common/typography/LabelText";

const PreferredDateEntry = ({ event, to, from }) => (
  <Fragment>
    <Chip>
      <LabelText>{from} - {to}</LabelText>
    </Chip>
  </Fragment>
);

export default PreferredDateEntry;
